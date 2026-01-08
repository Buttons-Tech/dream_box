import { NextResponse } from 'next/server';
import { connectToDatabase } from '@/lib/mongodb';
import Tutor from '@/models/Tutor';

export async function POST(request: Request) {
  try {
    await connectToDatabase();
    
    const body = await request.json();

    // Validation: Ensure the email isn't already registered
    const existingTutor = await Tutor.findOne({ email: body.email });
    if (existingTutor) {
      return NextResponse.json(
        { error: "A tutor with this email already exists." }, 
        { status: 400 }
      );
    }

    const newTutor = await Tutor.create(body);

    return NextResponse.json(
      { message: "Application received!", id: newTutor._id }, 
      { status: 201 }
    );
  } catch (error: any) {
    console.error("Database Error:", error);
    return NextResponse.json(
      { error: "Failed to submit application. Please try again." }, 
      { status: 500 }
    );
  }
}