import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  const body = await req.json();
  const { name, email, phone, trainer, date, time, goal } = body;

  if (!name || !email || !trainer || !date || !time) {
    return NextResponse.json({ error: "All fields are required." }, { status: 400 });
  }

  console.log("Trainer booking:", { name, email, phone, trainer, date, time, goal });

  return NextResponse.json({ success: true, message: `Session with ${trainer} booked for ${date} at ${time}.` });
}
