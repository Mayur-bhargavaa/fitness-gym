import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  const body = await req.json();
  const { name, email, message } = body;

  if (!name || !email || !message) {
    return NextResponse.json({ error: "All fields are required." }, { status: 400 });
  }

  console.log("Contact form:", { name, email, message });

  return NextResponse.json({ success: true, message: "Message received. We will get back to you within 24 hours." });
}
