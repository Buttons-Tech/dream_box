import { NextResponse } from 'next/server';
import crypto from 'crypto';

export async function POST(request: Request) {
  try {
    const { email, fullName, amount, orderId } = await request.json();

    // OPay requires a signature for security (HMAC-SHA512)
    const body = {
      amount: {
        total: amount * 100, // OPay usually works in Kobo/Minor units
        currency: "NGN" 
      },
      callbackUrl: `${process.env.NEXT_PUBLIC_URL}/api/webhook/opay`,
      cancelUrl: `${process.env.NEXT_PUBLIC_URL}/signup/parent`,
      returnUrl: `${process.env.NEXT_PUBLIC_URL}/signup/success`,
      reference: orderId, // Unique ID for this transaction
      userEmail: email,
      userName: fullName,
      productDesc: "Dreambox Academy Enrollment",
      merchantId: process.env.OPAY_MERCHANT_ID
    };

    // Note: OPay signature logic varies by version. 
    // Usually, you hash the JSON body with your Secret Key.
    const signature = crypto
      .createHmac('sha512', process.env.OPAY_SECRET_KEY!)
      .update(JSON.stringify(body))
      .digest('hex');

    const response = await fetch('https://api.opaycheckout.com/api/v1/international/cashier/create', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${process.env.OPAY_PUBLIC_KEY}`,
        'Signature': signature
      },
      body: JSON.stringify(body),
    });

    const result = await response.json();

    if (result.code === "00000") {
      return NextResponse.json({ checkoutUrl: result.data.cashierUrl });
    } else {
      throw new Error(result.message || "OPay Initialization Failed");
    }

  } catch (error: unknown) {
  // We check if the error is an instance of the Error object
  const errorMessage = error instanceof Error ? error.message : "An unknown error occurred";
  
  console.error("Payment API Error:", errorMessage);
  
  return NextResponse.json(
    { error: errorMessage }, 
    { status: 500 }
  );
}
}