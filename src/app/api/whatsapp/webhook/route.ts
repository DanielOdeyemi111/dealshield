import { NextRequest, NextResponse } from "next/server";
import { sendText, sendWelcome, sendHelp, sendSignupPrompt } from "@/lib/whatsapp";
import { createClient } from "@supabase/supabase-js";

const VERIFY_TOKEN = (process.env.WHATSAPP_WEBHOOK_VERIFY_TOKEN ?? "dealshield_wh_2025").replace(/^﻿/, "");

const GREETINGS = new Set(["HI", "HELLO", "HEY", "START", "SIGNUP", "SIGN UP", "REGISTER", "MENU", "HI DEALSHIELD", "HELLO DEALSHIELD", ""]);

function parseSignup(body: string): { name: string; email: string; password: string } | null {
  const lines = body.split(/\r?\n/);
  let name = "", email = "", password = "";
  for (const line of lines) {
    const lower = line.toLowerCase();
    if (lower.startsWith("name:")) name = line.slice(line.indexOf(":") + 1).trim();
    else if (lower.startsWith("email:")) email = line.slice(line.indexOf(":") + 1).trim();
    else if (lower.startsWith("password:")) password = line.slice(line.indexOf(":") + 1).trim();
  }
  if (!name || !email || !password) return null;
  return { name, email, password };
}

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
    JSON.stringify({ received_token: token, expected_token: VERIFY_TOKEN }),
    { status: 403, headers: { "Content-Type": "application/json" } }
  );
}

export async function POST(req: NextRequest) {
  const body = await req.json();
  console.log("[webhook]", JSON.stringify(body).slice(0, 600));

  const messages = body?.entry?.[0]?.changes?.[0]?.value?.messages;
  if (!messages?.length) return NextResponse.json({ status: "no_message" });

  const msg = messages[0];
  const from: string = msg.from;
  const name: string | undefined = body?.entry?.[0]?.changes?.[0]?.value?.contacts?.[0]?.profile?.name;

  // "Create Account" button tapped
  if (msg.type === "interactive" && msg.interactive?.type === "button_reply") {
    const id: string = msg.interactive.button_reply?.id ?? "";
    if (id === "signup_start") {
      await sendSignupPrompt(from);
    }
    return NextResponse.json({ status: "ok" });
  }

  const textBody: string = msg.text?.body?.trim() ?? "";
  const upper = textBody.toUpperCase();

  // Signup details submitted (Name: / Email: / Password: format)
  const signup = parseSignup(textBody);
  if (signup && !GREETINGS.has(upper)) {
    const { name: fullName, email, password } = signup;

    if (password.length < 8) {
      await sendText(from, "⚠️ *Deal Shield* — Password must be at least 8 characters. Please try again with the same format.");
      return NextResponse.json({ status: "ok" });
    }

    const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
    const anonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;

    if (!supabaseUrl || !anonKey) {
      await sendText(from, "⚠️ *Deal Shield* — Account creation is unavailable right now. Please try again later.");
      return NextResponse.json({ status: "ok" });
    }

    const supabase = createClient(supabaseUrl, anonKey);
    const { error } = await supabase.auth.signUp({
      email,
      password,
      options: { data: { full_name: fullName, whatsapp: from } },
    });

    if (error) {
      console.error("[supabase signUp error]", error.message);
      const msg = error.message.toLowerCase().includes("already registered")
        ? `⚠️ *Deal Shield* — That email is already registered. Reply *HI* to start again.`
        : `❌ *Deal Shield* — Signup failed: ${error.message}`;
      await sendText(from, msg);
    } else {
      const first = fullName.split(" ")[0];
      await sendText(
        from,
        `✅ *Deal Shield* — Welcome, ${first}! Your account has been created.\n\nCheck *${email}* for a confirmation link, then you're all set to make your first safe deal. 🛡️`
      );
    }

    return NextResponse.json({ status: "ok" });
  }

  // Standard keyword handling
  if (GREETINGS.has(upper)) {
    await sendWelcome(from, name);
  } else if (upper === "YES") {
    await sendText(from, "✅ *Deal Shield* — Thank you for confirming!\n\nFunds are being released to the seller. Your deal is complete. 🎉");
  } else if (upper === "NO") {
    await sendText(from, "⚠️ *Deal Shield* — Dispute opened.\n\nOur team will review your case within 24 hours. Please describe what went wrong.");
  } else {
    await sendHelp(from);
  }

  return NextResponse.json({ status: "ok" });
}
