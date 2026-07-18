import { NextRequest, NextResponse } from "next/server";
import { sendText } from "@/lib/whatsapp";

// Simple test endpoint — POST { "to": "2348012345678", "message": "Hello" }
export async function POST(req: NextRequest) {
  const { to, message } = await req.json();
  if (!to || !message) {
    return NextResponse.json({ error: "to and message are required" }, { status: 400 });
  }
  const result = await sendText(to, message);
  return NextResponse.json(result);
}
