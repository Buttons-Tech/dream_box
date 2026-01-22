import { NextResponse } from 'next/server';
import { connectToDatabase } from '@/lib/mongodb';
import Parent from '@/models/Parent';

interface OPayWebhookPayload {
  reference: string;
  status: string;
  orderNo: string;
  amount: number;
}

export async function POST(request: Request) {
  
  const payload: OPayWebhookPayload = await request.json();
  
  // OPay sends status "SUCCESS" when payment clears
  if (payload.status === "SUCCESS") {
    await connectToDatabase();
    
    // Update the parent record using the reference (orderId) we sent earlier
    await Parent.findByIdAndUpdate(payload.reference, {
      paymentStatus: 'Paid',
      transactionId: payload.orderNo
    });

    console.log(`Payment confirmed for Order: ${payload.reference}`);
  }

  return NextResponse.json({ status: "ok" });
}