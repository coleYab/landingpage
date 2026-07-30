import { NextResponse } from "next/server";
import { Resend } from "resend";

const TEAM_EMAIL = process.env.TEAM_EMAIL;
const FROM_EMAIL = process.env.FROM_EMAIL;

export async function POST(request) {
  if (!process.env.RESEND_API_KEY) {
    return NextResponse.json(
      { success: false, error: "Resend API key not configured" },
      { status: 500 }
    );
  }
  const resend = new Resend(process.env.RESEND_API_KEY);
  try {
    const body = await request.json();
    const { name, email, phone, service, requested_modules, preferred_date, message, company, totalScore, recommendationTitle } = body;

    if (!name || !email) {
      return NextResponse.json(
        { success: false, error: "Name and email are required" },
        { status: 400 }
      );
    }

    let detailRows = "";
    const fields = [
      { label: "Name", value: name },
      { label: "Email", value: email },
      { label: "Phone", value: phone || "N/A" },
      { label: "Company", value: company || "N/A" },
      { label: "Service Type", value: service || "General Inquiry" },
      { label: "Requested Modules", value: requested_modules || "N/A" },
      { label: "Preferred Date", value: preferred_date || "N/A" },
      { label: "Assessment Score", value: totalScore != null ? `${totalScore}/100` : null },
      { label: "Readiness Level", value: recommendationTitle || null },
    ];

    for (const field of fields) {
      if (field.value && field.value !== "N/A") {
        detailRows += `<tr>
          <td style="padding: 10px; border: 1px solid #ddd; font-weight: 600; color: #0b3937; width: 180px;">${field.label}</td>
          <td style="padding: 10px; border: 1px solid #ddd; color: #333;">${field.value}</td>
        </tr>`;
      }
    }

    const htmlContent = `
      <!DOCTYPE html>
      <html lang="en">
      <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>New Contact - Axonova Consulting</title>
      </head>
      <body style="font-family: Arial, sans-serif; background-color: #f7f9fc; margin: 0; padding: 20px;">
        <div style="max-width: 600px; margin: 0 auto; background-color: #ffffff; border-radius: 12px; box-shadow: 0 6px 20px rgba(0,0,0,0.08); overflow: hidden; border: 1px solid #e0e0e0;">
          <div style="background-color: #0b3937; color: #ffffff; padding: 30px; text-align: center;">
            <h1 style="margin: 0; font-size: 24px;">New Contact Request</h1>
            <p style="margin: 10px 0 0; color: #a9fa60; font-weight: 600;">Axonova Consulting</p>
          </div>
          <div style="padding: 30px;">
            <p style="font-size: 16px; color: #333;">A new contact request has been submitted:</p>
            <table style="width: 100%; border-collapse: collapse; margin-top: 20px;">
              ${detailRows}
            </table>
            ${message ? `
            <div style="margin-top: 20px; padding: 15px; background-color: #f0f4ff; border-left: 4px solid #0b3937; border-radius: 4px;">
              <p style="margin: 0; font-weight: 600; color: #0b3937;">Message:</p>
              <p style="margin: 8px 0 0; color: #555;">${message}</p>
            </div>` : ""}
            <p style="margin-top: 30px; font-size: 14px; color: #777; text-align: center;">
              Sent from axonovaconsulting.co.uk
            </p>
          </div>
          <div style="background-color: #eeeeee; padding: 15px; text-align: center; font-size: 12px; color: #777;">
            &copy; ${new Date().getFullYear()} Axonova Consulting
          </div>
        </div>
      </body>
      </html>
    `;

    await resend.emails.send({
      from: FROM_EMAIL,
      to: TEAM_EMAIL,
      subject: `New Contact - ${name}${service && service !== "General Inquiry" ? ` (${service})` : ""}`,
      html: htmlContent,
    });

    const userHtml = `
      <!DOCTYPE html>
      <html lang="en">
      <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Thank You - Axonova Consulting</title>
      </head>
      <body style="font-family: Arial, sans-serif; background-color: #f7f9fc; margin: 0; padding: 20px;">
        <div style="max-width: 600px; margin: 0 auto; background-color: #ffffff; border-radius: 12px; box-shadow: 0 6px 20px rgba(0,0,0,0.08); overflow: hidden; border: 1px solid #e0e0e0;">
          <div style="background-color: #0b3937; color: #ffffff; padding: 30px; text-align: center;">
            <h1 style="margin: 0; font-size: 24px;">Thank You, ${name}!</h1>
            <p style="margin: 10px 0 0; color: #a9fa60; font-weight: 600;">Axonova Consulting</p>
          </div>
          <div style="padding: 30px;">
            <p style="font-size: 16px; color: #333;">We've received your enquiry and a member of our team will get back to you shortly.</p>
            ${service ? `<p style="font-size: 14px; color: #555;">Regarding: <strong>${service}</strong></p>` : ""}
            <div style="margin-top: 25px; padding: 20px; background-color: #f0f4ff; border-radius: 8px;">
              <p style="margin: 0; font-size: 14px; color: #555;">In the meantime, feel free to explore our services at <a href="https://axonovaconsulting.co.uk" style="color: #0b3937; font-weight: 600;">axonovaconsulting.co.uk</a></p>
            </div>
            <p style="margin-top: 30px; font-size: 16px; color: #333;">Best regards,</p>
            <p style="font-size: 16px; font-weight: 600; color: #0b3937;">The Axonova Consulting Team</p>
          </div>
          <div style="background-color: #eeeeee; padding: 15px; text-align: center; font-size: 12px; color: #777;">
            &copy; ${new Date().getFullYear()} Axonova Consulting
          </div>
        </div>
      </body>
      </html>
    `;

    await resend.emails.send({
      from: FROM_EMAIL,
      to: email,
      subject: `Thank you for contacting Axonova Consulting`,
      html: userHtml,
    });

    return NextResponse.json({ success: true }, { status: 200 });
  } catch (error) {
    console.error("Error in contact API:", error);
    return NextResponse.json(
      { success: false, error: "Internal server error" },
      { status: 500 }
    );
  }
}
