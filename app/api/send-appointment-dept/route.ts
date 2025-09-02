// app/api/appointment/route.ts
import nodemailer from "nodemailer";
import { NextResponse } from "next/server";

// Create transporter object
const transporter = nodemailer.createTransport({
  host: "smtp.gmail.com",
  port: 587,
  secure: false,
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASSWORD,
  },
});

export async function POST(req: Request) {
  try {
    const { name, email, department, doctor } = await req.json();

    // Validate form data
    if (!name || !email || !department || !doctor) {
      return NextResponse.json(
        { message: "Missing required fields" },
        { status: 400 }
      );
    }

    // Create email HTML content
    const htmlContent = `
        <!DOCTYPE html>
      <html lang="en">
      <head>
          <meta charset="UTF-8">
          <meta name="viewport" content="width=device-width, initial-scale=1.0">
          <title>Appointment request received.</title>
          <style>
              body {
                  font-family: 'Arial', sans-serif;
                  margin: 0;
                  padding: 0;
                  background-color: #f5f5f5;
              }
              .container {
                  max-width: 600px;
                  margin: 20px auto;
                  background: #ffffff;
                  padding: 30px;
                  border-radius: 12px;
                  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
              }
              .header {
                  background: #2563eb;
                  color: white;
                  padding: 20px;
                  border-radius: 8px 8px 0 0;
                  margin: -30px -30px 20px -30px;
              }
              h2 {
                  margin: 0;
                  font-size: 24px;
                  text-align: center;
              }
              .info {
                  background: #f8fafc;
                  padding: 15px;
                  margin: 10px 0;
                  border-radius: 6px;
                  border-left: 4px solid #2563eb;
              }
              .info strong {
                  color: #1e40af;
                  display: inline-block;
                  width: 80px;
              }
              .message-box {
                  background: #f8fafc;
                  padding: 15px;
                  margin: 20px 0;
                  border-radius: 6px;
                  border: 1px solid #e2e8f0;
              }
              .footer {
                  margin-top: 30px;
                  padding-top: 20px;
                  border-top: 1px solid #e2e8f0;
                  text-align: center;
                  color: #64748b;
                  font-size: 14px;
              }
          </style>
      </head>
      <body>
          <div class="container">
              <div class="header">
                  <h2>New Appointment Received</h2>
              </div>
              <div class="info"><strong>Name:</strong> ${name}</div>
              <div class="info"><strong>Email:</strong> ${email}</div>
                            <div class="info"><strong>Department:</strong> ${department}</div>
              <div class="info"><strong>Requested Doctor:</strong> ${doctor}</div>
             
              <div class="footer">
                  <p>This message was sent from your website's contact form.</p>
              </div>
          </div>
      </body>
      </html>
    `;

    // Send email to clinic
    const infoClinic = await transporter.sendMail({
      from: process.env.EMAIL_USER,
      to: "Info.belshospital@gmail.com", // Replace with your hospital's email
      subject: `New Appointment Request - ${department}`,
      html: htmlContent,
    });

    // Create confirmation email HTML content
    const confirmationHtmlContent = `
        <!DOCTYPE html>
      <html lang="en">
      <head>
          <meta charset="UTF-8">
          <meta name="viewport" content="width=device-width, initial-scale=1.0">
          <title>Appointment Confirmation Received</title>
          <style>
              body {
                  font-family: 'Arial', sans-serif;
                  margin: 0;
                  padding: 0;
                  background-color: #f5f5f5;
              }
              .container {
                  max-width: 600px;
                  margin: 20px auto;
                  background: #ffffff;
                  padding: 30px;
                  border-radius: 12px;
                  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
              }
              .header {
                  background: #2563eb;
                  color: white;
                  padding: 20px;
                  border-radius: 8px 8px 0 0;
                  margin: -30px -30px 20px -30px;
              }
              h2 {
                  margin: 0;
                  font-size: 24px;
                  text-align: center;
              }
              .content {
                  color: #334155;
                  line-height: 1.6;
              }
              .message-summary {
                  background: #f8fafc;
                  padding: 15px;
                  margin: 20px 0;
                  border-radius: 6px;
                  border-left: 4px solid #2563eb;
              }
              .footer {
                  margin-top: 30px;
                  padding-top: 20px;
                  border-top: 1px solid #e2e8f0;
                  text-align: center;
                  color: #64748b;
                  font-size: 14px;
              }
              .contact-info {
                  background: #f8fafc;
                  padding: 15px;
                  margin: 20px 0;
                  border-radius: 6px;
                  text-align: center;
              }
          </style>
      </head>
      <body>
          <div class="container">
              <div class="header">
                  <h2>Appointment request received.</h2>
              </div>
              <div class="content">
                  <p>Dear ${name},</p>
              <p>We have received your appointment request with the following details:</p>
              <div class="info"><strong>Department:</strong> ${department}</div>
              <div class="info"><strong>Doctor:</strong> ${doctor}</div>
                  <p>Thank you for contacting us. We have received your message and will get back to you as soon as possible.</p>
                  
                  <div class="message-summary">
                      <strong>Your message details:</strong><br>
                      Sent: ${new Date().toLocaleString()}
                  </div>

                  <div class="contact-info">
                      <p>If you need immediate assistance, please contact us at:</p>
                      <p>📞 Phone: +91  9935754963<br>
                      📧 Email: Info.belshospital@gmail.com</p>
                  </div>

                  <div class="footer">
                      <p>Best regards,<br>Your Support Team</p>
                  </div>
              </div>
          </div>
      </body>
      </html>
    `;

    // Send confirmation email to patient
    const infoPatient = await transporter.sendMail({
      from: process.env.EMAIL_USER,
      to: email,
      subject: "Appointment Request Confirmation",
      html: confirmationHtmlContent,
    });

    return NextResponse.json(
      {
        message: "Appointment request sent successfully",
        clinicMessageId: infoClinic.messageId,
        patientMessageId: infoPatient.messageId,
      },
      { status: 200 }
    );
  } catch (error) {
    console.error("Error sending email:", error);
    return NextResponse.json(
      {
        message: "Failed to send appointment request",
        error: error instanceof Error ? error.message : "Unknown error",
      },
      { status: 500 }
    );
  }
}
