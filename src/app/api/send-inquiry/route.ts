import { NextResponse } from "next/server";
import { Resend } from "resend";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, company, email, material, volume, port, message } = body;

    if (!name || !company || !email || !material || !volume || !port) {
      return NextResponse.json({ error: "Missing required fields" }, { status: 400 });
    }

    const resend = new Resend(process.env.RESEND_API_KEY || "re_B4wcnNpf_HVFxVHbt3X9fMtUYh2kMN7bS");

    await resend.emails.send({
      from: "Geoprocure <noreply@geoprocure.com>",
      to: ["office@geoprocure.com"],
      subject: "New RFQ from Geoprocure Website",
      html: `
        <!DOCTYPE html>
        <html>
        <head><style>body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }</style></head>
        <body>
          <h1>🧪 New RFQ - Geoprocure</h1>
          <p><strong>Name:</strong> ${name}</p>
          <p><strong>Company:</strong> ${company}</p>
          <p><strong>Email:</strong> ${email}</p>
          <p><strong>Material:</strong> ${material}</p>
          <p><strong>Volume:</strong> ${volume} MT</p>
          <p><strong>Target Port:</strong> ${port}</p>
          ${message ? `<p><strong>Message:</strong> ${message}</p>` : ""}
        </body>
        </html>
      `.trim(),
      reply_to: email,
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Email error:", error);
    return NextResponse.json({ error: "Failed to send email" }, { status: 500 });
  }
}