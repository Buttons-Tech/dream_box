import { NextResponse } from 'next/server';
import { Resend } from 'resend';
import { WelcomeParentEmail } from '@/app/emails/WelcomeParent';

// This helps us see if the key is actually loading
const apiKey = process.env.RESEND_API_KEY;
const resend = new Resend(apiKey);

export async function GET() {
  console.log("Testing Resend with Key:", apiKey ? "Key Found" : "KEY MISSING");

  if (!apiKey) {
    return NextResponse.json({ error: "API Key is missing from .env.local" }, { status: 500 });
  }

  try {
    const { data, error } = await resend.emails.send({
      from: 'onboarding@resend.dev', 
      to: 'chigozieohakwej@gmail.com', // 👈 MUST be your signup email
      subject: 'Dreambox Test',
      react: WelcomeParentEmail({ parentName: "Test User", childCount: 1 }),
    });

    if (error) {
      console.error("Resend Error:", error);
      return NextResponse.json({ error }, { status: 400 });
    }

    return NextResponse.json({ success: true, data });
 } catch (error: unknown) {
  const message = error instanceof Error ? error.message : "An unexpected error occurred";
  return NextResponse.json({ error: message }, { status: 500 });
}
}