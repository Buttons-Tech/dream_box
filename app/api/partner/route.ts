import { NextResponse } from 'next/server';
import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { schoolName, state, phone } = body;

    if (!schoolName || !state || !phone) {
      return NextResponse.json(
        { error: 'All fields are required.' },
        { status: 400 }
      );
    }

    // Send email notification via Resend
    const { data, error } = await resend.emails.send({
      from: 'Dreambox Leads <onboarding@resend.dev>', // Use your custom domain once verified
      to: [process.env.NOTIFICATION_EMAIL || 'chigozieohakwej@gmail.com'],
      subject: `🏫 New School Partner Lead: ${schoolName} (${state})`,
      html: `
        <div style="font-family: Arial, sans-serif; padding: 20px; color: #333; max-width: 600px;">
          <h2 style="color: #6C5CE7;">New School Partnership Request! 🌟</h2>
          <p>A new school is interested in bringing Dreambox Education clubs to their campus.</p>
          <hr style="border: 0; border-top: 1px solid #eee; margin: 20px 0;" />
          <table style="width: 100%; border-collapse: collapse;">
            <tr>
              <td style="padding: 8px 0; font-weight: bold; width: 140px;">School Name:</td>
              <td style="padding: 8px 0;">${schoolName}</td>
            </tr>
            <tr>
              <td style="padding: 8px 0; font-weight: bold;">State:</td>
              <td style="padding: 8px 0;">${state}</td>
            </tr>
            <tr>
              <td style="padding: 8px 0; font-weight: bold;">Phone / WhatsApp:</td>
              <td style="padding: 8px 0;">
                <a href="https://wa.me/234${phone.replace(/^0/, '')}" style="color: #6C5CE7; font-weight: bold;">
                  ${phone} (Click to WhatsApp)
                </a>
              </td>
            </tr>
          </table>
          <hr style="border: 0; border-top: 1px solid #eee; margin: 20px 0;" />
          <p style="font-size: 12px; color: #777;">Sent automatically from Dreambox Education Web App.</p>
        </div>
      `,
    });

    if (error) {
      console.error('Resend API Error:', error);
      return NextResponse.json({ error: 'Failed to send email' }, { status: 500 });
    }

    return NextResponse.json({ success: true, message: 'Email sent successfully!' }, { status: 200 });
  } catch (err) {
    console.error('Server error:', err);
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 });
  }
}