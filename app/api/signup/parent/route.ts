import { NextResponse } from 'next/server';
import { connectToDatabase } from '@/lib/mongodb';
import Parent from '@/models/Parent';
import { Resend } from 'resend';
import { WelcomeParentEmail } from '@/app/emails/WelcomeParent';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: Request) {
  try {
    await connectToDatabase();
    const body = await request.json();

    // 1. Save to MongoDB
    const newParent = await Parent.create(body);

    // 2. Send Welcome Email
    if (newParent) {
      await resend.emails.send({
        from: 'Dreambox Academy <onboarding@yourdomain.com>', // You'll verify this domain later
        to: body.email,
        subject: 'Welcome to Dreambox Academy!',
        react: WelcomeParentEmail({ 
          parentName: body.fullName, 
          childCount: body.children.length 
        }),
      });
    }

    return NextResponse.json({ success: true }, { status: 201 });
  } catch (error: unknown) {
  const message = error instanceof Error ? error.message : "An unexpected error occurred";
  return NextResponse.json({ error: message }, { status: 500 });
}
}