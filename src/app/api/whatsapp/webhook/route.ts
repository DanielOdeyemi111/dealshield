import { NextRequest, NextResponse } from "next/server";
import { sendText } from "@/lib/whatsapp";

// Strip BOM that PowerShell sometimes prepends when writing env vars
const VERIFY_TOKEN = (process.env.WHATSAPP_WEBHOOK_VERIFY_TOKEN ?? "dealshield_wh_2025").replace(/^﻿/, "");

// Meta calls this GET to verify the webhook
export async function GET(req: NextRequest) {
  const { searchParams } = new URL(req.url);
  const mode = searchParams.get("hub.mode");
  const token = searchParams.get("hub.verify_token");
  const challenge = searchParams.get("hub.challenge");

  if (mode === "subscribe" && token === VERIFY_TOKEN) {
    return new NextResponse(challenge, {
      status: 200,
      headers: { "Content-Type": "text/plain" },
    });
  }

  // Debug: return what we received so we can diagnose mismatches
  return new NextResponse(
    JSON.stringify({ received_token: token, received_mode: mode, expected_token: VERIFY_TOKEN }),
    { status: 403, headers: { "Content-Type": "application/json" } }
  );
}

// Meta sends incoming WhatsApp messages here
export async function POST(req: NextRequest) {
  const body = await req.json();

  const messages = body?.entry?.[0]?.changes?.[0]?.value?.messages;
  if (!messages?.length) return NextResponse.json({ status: "no_message" });

  const msg = messages[0];
  const from: string = msg.from;
  const text = msg.text?.body?.trim().toUpperCase();

  if (text === "YES") {
    await sendText(from, "✅ *Deal Shield* — Thank you for confirming!\n\nFunds are being released to the seller. Your deal is complete.");
  } else if (text === "NO") {
    await sendText(from, "⚠️ *Deal Shield* — Dispute opened.\n\nOur team will review your case within 24 hours. Please describe the issue and we'll get back to you.");
  } else {
    await sendText(from, `🛡️ *Deal Shield*\n\nHi! To confirm delivery, reply *YES*.\nTo raise a dispute, reply *NO*.`);
  }

  return NextResponse.json({ status: "ok" });
}
