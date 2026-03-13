import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  const body = await req.json();
  const { name, email, date, time } = body;

  if (!name || !email || !date || !time) {
    return NextResponse.json({ error: "All fields are required." }, { status: 400 });
  }

  // In production, persist to DB and send confirmation email here.
  console.log("Booking received:", { name, email, date, time });

  return NextResponse.json({ success: true, message: `Booking confirmed for ${date} at ${time}.` });
}
