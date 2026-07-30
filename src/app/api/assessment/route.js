import { NextResponse } from "next/server";
import { Resend } from "resend";
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

function generateAIReadinessEmail(userName, userScore) {
  let readinessLevel, ratingTitle, insight, actionSteps, color, emoji;

  const primaryColor = "#0b3937"; // Dark Teal/Navy (Primary)
  const secondaryColor = "#a9fa60"; // Bright Accent)

  if (userScore >= 80) {
    readinessLevel = "AI Leader";
    ratingTitle = "Highly Ready";
    insight =
      "Your business is primed to scale AI as a core capability. You have strong strategy, infrastructure, and culture. Focus on maximizing your competitive advantage.";
    actionSteps = [
      "Scale AI across multiple functions for maximum impact and integration.",
      "Explore advanced applications (Generative AI, predictive models) to drive innovation.",
      "Develop an enterprise-wide AI playbook and robust governance model.",
      "Build a long-term AI roadmap aligned to innovation or product strategy.",
    ];
    color = "#4CAF50"; // Green for Success
    emoji = "✅";
  } else if (userScore >= 60) {
    readinessLevel = "AI Explorer";
    ratingTitle = "Moderately Ready";
    insight =
      "You have a solid foundation and cultural openness to begin embedding AI more deeply into operations, but some gaps remain, particularly in scaling.";
    actionSteps = [
      "Scale successful pilots across departments to realize measurable ROI.",
      "Address specific weak spots (e.g., governance, infrastructure, staff skills) revealed in the assessment.",
      "Prioritize 2–3 high-value AI use cases with measurable returns and clear ownership.",
      "Build a structured change management approach to ensure organization-wide adoption.",
    ];
    color = "#2196F3"; // Blue for Progress
    emoji = "🚀";
  } else if (userScore >= 40) {
    readinessLevel = "AI Beginner";
    ratingTitle = "Low Readiness";
    insight =
      "Interest exists, and you show potential, but critical foundations are missing, particularly in integrated strategy, technology, and data governance.";
    actionSteps = [
      "Improve data collection and governance; focus on data quality and accessibility.",
      "Start with low-risk pilots to build confidence and gather internal case studies.",
      "Invest strategically in staff training and AI literacy across all departments.",
      "Assign an “AI Champion” internally to drive momentum and coordinate initiatives.",
      "Begin documenting SOPs for future AI-powered workflows.",
    ];
    color = "#FF9800"; // Orange for Warning
    emoji = "🟡";
  } else {
    readinessLevel = "AI Unprepared";
    ratingTitle = "Very Low Readiness";
    insight =
      "You are just beginning your AI journey. Focus first on leadership buy-in, data quality, and basic digital transformation before advanced AI integration.";
    actionSteps = [
      "Develop leadership alignment on the strategic value of AI.",
      "Run internal workshops on AI potential and risks to build foundational awareness.",
      "Train employees on AI Foundations and basic tools (e.g., specific Copilots).",
      "Audit your existing digital systems and address critical infrastructure gaps.",
      "Identify one non-technical team to experiment with a simple AI tool (e.g., HR, marketing).",
    ];
    color = "#F44336"; // Red for Alert
    emoji = "🛑";
  }
  const actionStepsHtml = actionSteps
    .map(
      (step) =>
        `<li style="margin-bottom: 12px; line-height: 1.5; font-size: 14px; color: #333333; padding-left: 10px;">${step}</li>`
    )
    .join("");

  const htmlContent = `
    <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Your AI Readiness Assessment Results - Axonva Consulting</title>
        <style>
            body { 
                font-family: 'Arial', sans-serif; 
                background-color: #f7f9fc; 
                margin: 0; 
                padding: 0; 
                -webkit-text-size-adjust: 100%;
                -ms-text-size-adjust: 100%;
            }
            .container { 
                max-width: 600px; 
                margin: 30px auto; 
                background-color: #ffffff; 
                border-radius: 12px; 
                box-shadow: 0 6px 20px rgba(0, 0, 0, 0.08); 
                overflow: hidden; 
                border: 1px solid #e0e0e0;
            }
            .header { 
                background-color: ${primaryColor}; 
                color: #ffffff; 
                padding: 35px 30px 20px 30px; 
                text-align: center; 
            }
            .header h1 { 
                margin: 0; 
                font-size: 26px; 
                font-weight: 700; 
            }
            .logo-placeholder {
                color: ${secondaryColor};
                font-size: 20px;
                font-weight: 900;
                margin-bottom: 15px;
            }
            .tagline {
                font-size: 14px;
                font-weight: 400;
                color: #cccccc;
                margin-top: 10px;
            }
            .content { 
                padding: 30px; 
                color: #333333; 
            }
            .score-card { 
                background-color: #f0f4ff; 
                padding: 25px; 
                border-radius: 8px; 
                text-align: center; 
                margin-bottom: 25px; 
                border: 2px solid ${color};
                box-shadow: 0 2px 8px rgba(0, 0, 0, 0.05);
            }
            .score-card h2 { 
                margin: 0 0 10px 0; 
                color: ${primaryColor}; 
                font-size: 18px; 
                font-weight: 600; 
            }
            .score-number { 
                font-size: 52px; 
                font-weight: 800; 
                color: ${color}; 
                line-height: 1; 
            }
            .readiness-level { 
                font-size: 22px; 
                font-weight: 700; 
                color: ${primaryColor}; 
                margin-top: 10px; 
            }
            .rating-badge { 
                display: inline-block; 
                padding: 6px 18px; 
                background-color: ${color}; 
                color: ${primaryColor}; 
                border-radius: 25px; 
                font-weight: 700; 
                margin-top: 15px; 
                font-size: 14px; 
                text-transform: uppercase;
                background-color: ${secondaryColor};
            }
            .section-title { 
                font-size: 20px; 
                color: ${primaryColor}; 
                margin-top: 35px; 
                margin-bottom: 15px; 
                border-bottom: 2px solid ${secondaryColor}; 
                padding-bottom: 8px; 
                font-weight: 700; 
            }
            ul { 
                list-style-type: disc; 
                padding-left: 20px; 
                margin-top: 20px;
            }
            .insight { 
                background-color: #fff9e6; 
                border-left: 4px solid #ffc107; 
                padding: 15px; 
                margin-bottom: 20px; 
                border-radius: 4px; 
                font-style: italic;
                color: #555555;
            }
            .contact-info {
                margin-top: 40px;
                padding-top: 20px;
                border-top: 1px dashed #cccccc;
                text-align: center;
                font-size: 14px;
            }
            .footer { 
                background-color: #eeeeee; 
                color: #777777; 
                padding: 20px; 
                text-align: center; 
                font-size: 12px; 
                border-top: 1px solid #e0e0e0; 
            }
        </style>
    </head>
    <body>
        <div class="container">
            <div class="header">
                <div class="logo-placeholder">AXONVA CONSULTING</div>
                <h1>Your AI Readiness Assessment Results</h1>
                <p class="tagline">AI Consultation Done Right</p>
            </div>
            <div class="content">
                <p style="font-size: 16px;">Hello <strong>${userName}</strong>,</p>
                <p style="font-size: 16px; margin-bottom: 25px;">Thank you for completing your assessment. We've compiled a summary of your results and a customized action plan to guide your next steps in AI adoption.</p>
                
                <div class="score-card">
                    <h2>Overall AI Readiness Rating:</h2>
                    <p class="score-number">${userScore}<span style="font-size: 24px; font-weight: 400; color: #333;">/100</span></p>
                    <p class="readiness-level">${emoji} ${readinessLevel}</p>
                    <span class="rating-badge">${ratingTitle}</span>
                </div>

                <div class="section-title">Key Insight</div>
                <div class="insight">
                    <p style="margin: 0; color: ${primaryColor};">${insight}</p>
                </div>

                <div class="section-title">Tailored Next Steps</div>
                <p style="font-size: 16px; margin-bottom: 20px;">Based on your current readiness, we recommend the following strategic actions:</p>
                <ul style="list-style-type: none; padding-left: 0;">
                    ${actionStepsHtml}
                </ul>
                
                <div class="contact-info">
                    <p style="margin: 0; font-weight: 600; color: ${primaryColor};">Ready to execute your AI roadmap?</p>
                    <p style="margin-top: 5px;">
                        <a href="[Link to Scheduling Page]" style="color: ${primaryColor}; text-decoration: none; font-weight: 700;">Schedule a Strategy Session</a>
                        or reply to this email.
                    </p>
                </div>
                
                <p style="font-size: 16px; margin-top: 30px;">Best regards,</p>
                <p style="font-size: 16px; font-weight: 600; color: ${primaryColor};">The Axonva Consulting Team</p>

            </div>
            <div class="footer">
                &copy; ${new Date().getFullYear()} Axonva Consulting. AI Consultation Done Right.
            </div>
        </div>
    </body>
    </html>
    `;

  return htmlContent;
}
export async function POST(request) {
  try {
    const body = await request.json();
    const { userData, answers, totalScore, recommendationTitle } = body || {};

    const { name, email } = userData;

    // console.log(body);

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

    const TEAM_EMAIL = process.env.TEAM_EMAIL;
    const FROM_EMAIL = process.env.FROM_EMAIL;

    if (process.env.RESEND_API_KEY) {
      const resend = new Resend(process.env.RESEND_API_KEY);
      const mailHtml = generateAIReadinessEmail(name, totalScore);

      await resend.emails.send({
        from: FROM_EMAIL,
        to: [TEAM_EMAIL, email],
        subject: `New AI Readiness Assessment – score ${totalScore}`,
        html: mailHtml,
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
