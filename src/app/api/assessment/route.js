import { NextResponse } from "next/server";
import nodemailer from "nodemailer";
import mongoose from "mongoose";

const MONGODB_URI = process.env.MONGODB_URI;

if (!MONGODB_URI) {
  throw new Error("MONGODB_URI environment variable is not set");
}

let cached = global.mongoose;

if (!cached) {
  cached = global.mongoose = { conn: null, promise: null };
}

async function dbConnect() {
  if (cached.conn) return cached.conn;
  if (!cached.promise) {
    cached.promise = mongoose
      .connect(MONGODB_URI, { bufferCommands: false })
      .then((mongooseInstance) => mongooseInstance);
  }
  cached.conn = await cached.promise;
  return cached.conn;
}

const assessmentSchema = new mongoose.Schema(
  {
    answers: { type: Object, required: true },
    totalScore: { type: Number, required: true },
    recommendationTitle: { type: String, default: null },
  },
  { timestamps: true }
);

const Assessment =
  mongoose.models.Assessment || mongoose.model("Assessment", assessmentSchema);

export async function POST(request) {
  try {
    const body = await request.json();
    const { answers, totalScore, recommendationTitle } = body || {};

    if (!answers || typeof totalScore !== "number") {
      return NextResponse.json(
        { success: false, error: "Invalid payload" },
        { status: 400 }
      );
    }

    await dbConnect();

    const doc = await Assessment.create({
      answers,
      totalScore,
      recommendationTitle: recommendationTitle || null,
    });

    const insertedId = doc._id?.toString();

    if (
      process.env.GMAIL_USER &&
      process.env.GMAIL_PASS &&
      (process.env.GMAIL_TO || process.env.GMAIL_USER)
    ) {
      const transporter = nodemailer.createTransport({
        service: "gmail",
        auth: {
          user: process.env.GMAIL_USER,
          pass: process.env.GMAIL_PASS,
        },
      });

      const to = process.env.GMAIL_TO || process.env.GMAIL_USER;

      const mailText = `New AI Readiness Assessment submitted.\n\nTotal score: ${totalScore}\nRecommendation: ${
        recommendationTitle || "(not provided)"
      }\n\nDocument id: ${insertedId || ""}`;

      await transporter.sendMail({
        from: process.env.GMAIL_FROM || process.env.GMAIL_USER,
        to,
        subject: `New AI Readiness Assessment – score ${totalScore}`,
        text: mailText,
      });
    }

    return NextResponse.json(
      { success: true, id: insertedId },
      { status: 200 }
    );
  } catch (error) {
    console.error("Error in assessment API:", error);
    return NextResponse.json(
      { success: false, error: "Internal server error" },
      { status: 500 }
    );
  }
}
