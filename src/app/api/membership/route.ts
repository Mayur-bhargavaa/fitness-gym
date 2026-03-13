import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  const body = await req.json();
  const { name, phone, email, plan } = body;

  if (!name || !phone || !email || !plan) {
    return NextResponse.json({ error: "All fields are required." }, { status: 400 });
  }

  // In production, persist to DB and send confirmation email here.
  console.log("Membership request:", { name, phone, email, plan });

  return NextResponse.json({ success: true, message: `${plan} membership request received. We will contact you shortly.` });
}
