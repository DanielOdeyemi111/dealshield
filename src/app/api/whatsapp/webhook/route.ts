import { NextRequest, NextResponse } from "next/server";
import { sendText, sendWelcome, sendHelp } from "@/lib/whatsapp";
import { createClient } from "@supabase/supabase-js";

const VERIFY_TOKEN = (process.env.WHATSAPP_WEBHOOK_VERIFY_TOKEN ?? "dealshield_wh_2025").replace(/^﻿/, "");

const GREETINGS = new Set(["HI", "HELLO", "HEY", "START", "SIGNUP", "SIGN UP", "REGISTER", "HELP", "MENU", "HI DEALSHIELD", "HELLO DEALSHIELD", ""]);

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

  return new NextResponse(
    JSON.stringify({ received_token: token, received_mode: mode, expected_token: VERIFY_TOKEN }),
    { status: 403, headers: { "Content-Type": "application/json" } }
  );
}

export async function POST(req: NextRequest) {
  const body = await req.json();
  console.log("[webhook]", JSON.stringify(body).slice(0, 500));

  const messages = body?.entry?.[0]?.changes?.[0]?.value?.messages;
  if (!messages?.length) return NextResponse.json({ status: "no_message" });

  const msg = messages[0];
  const from: string = msg.from;
  const name: string | undefined = body?.entry?.[0]?.changes?.[0]?.value?.contacts?.[0]?.profile?.name;

  // WhatsApp Flow submission
  if (msg.type === "interactive" && msg.interactive?.type === "nfm_reply") {
    const flowData = JSON.parse(msg.interactive.nfm_reply?.response_json ?? "{}");
    console.log("[flow submission]", JSON.stringify(flowData));

    const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
    const serviceKey = process.env.SUPABASE_SERVICE_ROLE_KEY;

    if (!supabaseUrl || !serviceKey) {
      await sendText(from, "⚠️ *Deal Shield* — Account creation is not configured yet. Please contact support.");
      return NextResponse.json({ status: "ok" });
    }

    const supabase = createClient(supabaseUrl, serviceKey, {
      auth: { autoRefreshToken: false, persistSession: false },
    });

    const fullName = [flowData.first_name, flowData.last_name].filter(Boolean).join(" ") || flowData.full_name || "";

    const { error } = await supabase.auth.admin.createUser({
      email: flowData.email,
      password: flowData.password,
      user_metadata: { full_name: fullName, whatsapp: from },
      email_confirm: true,
    });

    if (error) {
      console.error("[supabase error]", error.message);
      const msg = error.message.includes("already registered")
        ? `⚠️ *Deal Shield* — That email is already registered. Reply *HI* to start over or visit the app to sign in.`
        : `❌ *Deal Shield* — Could not create your account: ${error.message}`;
      await sendText(from, msg);
    } else {
      await sendText(
        from,
        `✅ *Deal Shield* — Welcome${fullName ? `, ${fullName.split(" ")[0]}` : ""}! Your account is ready.\n\nYou can now create escrow deals right here on WhatsApp. Reply *HELP* to see what I can do.`
      );
    }

    return NextResponse.json({ status: "ok" });
  }

  const text = (msg.text?.body?.trim() ?? "").toUpperCase();

  if (GREETINGS.has(text)) {
    await sendWelcome(from, name);
  } else if (text === "YES") {
    await sendText(from, "✅ *Deal Shield* — Thank you for confirming!\n\nFunds are being released to the seller. Your deal is complete. 🎉");
  } else if (text === "NO") {
    await sendText(from, "⚠️ *Deal Shield* — Dispute opened.\n\nOur team will review your case within 24 hours. Please describe what went wrong and we'll get back to you promptly.");
  } else {
    await sendHelp(from);
  }

  return NextResponse.json({ status: "ok" });
}
