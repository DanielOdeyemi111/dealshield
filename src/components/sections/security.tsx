"use client";

import { Check, ChevronLeft, Phone, Video, MoreVertical, Mic, Paperclip, Smile } from "lucide-react";
import { FadeUp } from "@/components/ui/fade-up";
import { motion } from "framer-motion";

const EASE: [number, number, number, number] = [0.22, 1, 0.36, 1];

const WA = {
  bg: "#0B141A",
  headerBg: "#1F2C34",
  incoming: "#202C33",
  outgoing: "#005C4B",
  inputBg: "#1F2C34",
  time: "#8696A0",
  text: "#E9EDEF",
  sub: "#8696A0",
};

const chatMessages = [
  { side: "bot",  text: "🔐 Funds secured!\n₦450,000 locked in 256-bit encrypted escrow.\nNo one can touch it — not even us.", time: "9:41", delay: 0.4 },
  { side: "user", text: "What if I don't receive my item? 😟", time: "9:42", delay: 1.1 },
  { side: "bot",  text: "🛡️ Simply raise a dispute.\nOur AI reviews evidence from both sides and rules in your favour if the seller fails.", time: "9:42", delay: 1.8 },
  { side: "user", text: "Are my bank details safe?", time: "9:43", delay: 2.5 },
  { side: "bot",  text: "✅ Absolutely. We never store your card or bank details. Paystack handles all payments under CBN regulation.", time: "9:43", delay: 3.2 },
  { side: "bot",  text: "🎉 Deal complete!\nFunds released safely. Your money is protected at every step.", time: "9:58", delay: 3.9 },
];

const points = [
  "All payments held via Paystack-secured escrow",
  "256-bit SSL encryption on every transaction",
  "Funds never touch our hands until both sides agree",
  "Auto-release protection if a buyer goes unresponsive",
];

function ChatBubble({ msg }: { msg: typeof chatMessages[0] }) {
  const isUser = msg.side === "user";
  return (
    <motion.div
      initial={{ opacity: 0, y: 8, scale: 0.95 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      transition={{ duration: 0.28, delay: msg.delay, ease: EASE }}
      className={`flex ${isUser ? "justify-end" : "justify-start"}`}
    >
      <div
        className="max-w-[84%] px-3 py-1.5 text-[10px] leading-relaxed whitespace-pre-line"
        style={{
          background: isUser ? WA.outgoing : WA.incoming,
          color: WA.text,
          borderRadius: isUser ? "8px 8px 2px 8px" : "8px 8px 8px 2px",
        }}
      >
        {!isUser && (
          <div className="text-[9px] font-semibold mb-0.5" style={{ color: "#53BDEB" }}>
            Deal Shield
          </div>
        )}
        {msg.text}
        <div className="flex items-center justify-end gap-1 mt-1">
          <span className="text-[8px]" style={{ color: WA.time }}>{msg.time}</span>
          {isUser && (
            <svg width="14" height="8" viewBox="0 0 16 11" fill="none">
              <path d="M1 5.5L5 9.5L10 2" stroke="#53BDEB" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              <path d="M6 5.5L10 9.5L15 2" stroke="#53BDEB" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          )}
        </div>
      </div>
    </motion.div>
  );
}

export default function SecuritySection() {
  return (
    <section className="bg-white py-12 md:py-20">
      <div className="w-full mx-auto max-w-6xl px-6 grid gap-12 md:grid-cols-2 items-center">

        {/* ── Left: text ── */}
        <FadeUp>
          <span className="text-sm font-semibold text-[#166534] uppercase tracking-widest">
            Bank-grade security
          </span>
          <h2 className="mt-3 text-3xl md:text-4xl font-bold tracking-tight text-[#111827]">
            Built for trust, not just speed.
          </h2>
          <p className="mt-4 text-[#111827]/60 leading-relaxed">
            Every order on Deal Shield is protected end to end — from the moment funds are paid in, to the moment they&apos;re released.
          </p>

          <ul className="mt-8 space-y-4">
            {points.map((p) => (
              <li key={p} className="flex items-start gap-3">
                <span className="mt-0.5 inline-flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-[#22C55E]/15 text-[#166534]">
                  <Check size={12} strokeWidth={3} />
                </span>
                <span className="text-sm text-[#111827]/80">{p}</span>
              </li>
            ))}
          </ul>
        </FadeUp>

        {/* ── Right: iPhone WhatsApp mockup ── */}
        <FadeUp delay={0.12} className="flex justify-center">
          <div className="relative select-none" style={{ width: 254, height: 480 }}>
            <div
              className="absolute inset-0"
              style={{
                background: "linear-gradient(145deg, #3a3a3c 0%, #1c1c1e 40%, #2c2c2e 100%)",
                borderRadius: 46,
                boxShadow: "0 32px 64px rgba(0,0,0,0.4), inset 0 1px 0 rgba(255,255,255,0.12), 0 0 0 1px rgba(255,255,255,0.06)",
                padding: 4,
              }}
            >
              <div className="w-full h-full overflow-hidden flex flex-col" style={{ borderRadius: 42, background: WA.bg }}>

                {/* Status bar */}
                <div className="flex items-center justify-between px-5 pt-3 pb-1 shrink-0" style={{ background: WA.headerBg }}>
                  <span className="text-[10px] font-semibold" style={{ color: WA.text }}>9:41</span>
                  <div className="flex items-center gap-1" style={{ color: WA.text }}>
                    <svg width="16" height="10" viewBox="0 0 16 10" fill="currentColor"><rect x="0" y="6" width="3" height="4" rx="0.5" opacity="0.4" /><rect x="4" y="4" width="3" height="6" rx="0.5" opacity="0.6" /><rect x="8" y="2" width="3" height="8" rx="0.5" opacity="0.8" /><rect x="12" y="0" width="3" height="10" rx="0.5" /></svg>
                    <svg width="14" height="10" viewBox="0 0 14 10" fill="currentColor"><path d="M7 8.5a1.2 1.2 0 1 1 0-2.4 1.2 1.2 0 0 1 0 2.4z" /><path d="M3.2 5.3a5.3 5.3 0 0 1 7.6 0l-1.1 1.1a3.7 3.7 0 0 0-5.4 0L3.2 5.3z" opacity="0.8" /><path d="M1 3a8.3 8.3 0 0 1 12 0L11.9 4.1A6.7 6.7 0 0 0 2.1 4.1L1 3z" opacity="0.5" /></svg>
                    <svg width="20" height="10" viewBox="0 0 20 10" fill="currentColor"><rect x="0" y="1" width="17" height="8" rx="2" stroke="currentColor" strokeWidth="0.8" fill="none" /><rect x="1" y="2" width="13" height="6" rx="1" opacity="0.9" /><rect x="17.5" y="3.5" width="2" height="3" rx="1" /></svg>
                  </div>
                </div>

                {/* Chat header */}
                <div className="flex items-center gap-2 px-2 py-2 shrink-0" style={{ background: WA.headerBg }}>
                  <ChevronLeft size={15} color={WA.text} className="shrink-0 opacity-80" />
                  <div className="h-8 w-8 rounded-full flex items-center justify-center text-sm shrink-0" style={{ background: "#2A3942" }}>🔐</div>
                  <div className="flex-1 min-w-0">
                    <div className="text-[10px] font-semibold leading-tight" style={{ color: WA.text }}>Deal Shield</div>
                    <div className="text-[8px] font-medium" style={{ color: "#25D366" }}>● end-to-end encrypted</div>
                  </div>
                  <Video size={14} color={WA.sub} className="shrink-0" />
                  <Phone size={13} color={WA.sub} className="shrink-0" />
                  <MoreVertical size={14} color={WA.sub} className="shrink-0" />
                </div>

                {/* Messages */}
                <div className="flex-1 px-2 py-2 flex flex-col gap-1.5 overflow-hidden" style={{ background: WA.bg }}>
                  <div className="flex justify-center mb-1">
                    <span className="text-[8px] px-2 py-0.5 rounded-full" style={{ background: "#182229", color: WA.time }}>TODAY</span>
                  </div>
                  {chatMessages.map((msg, i) => (
                    <ChatBubble key={i} msg={msg} />
                  ))}
                </div>

                {/* Input bar */}
                <div className="flex items-center gap-1.5 px-2 py-2 shrink-0" style={{ background: WA.inputBg }}>
                  <div className="flex-1 flex items-center gap-2 rounded-full px-3 py-1.5" style={{ background: "#2A3942" }}>
                    <Smile size={12} color={WA.sub} />
                    <span className="text-[9px] flex-1" style={{ color: WA.sub }}>Message</span>
                    <Paperclip size={11} color={WA.sub} />
                  </div>
                  <div className="h-7 w-7 rounded-full flex items-center justify-center shrink-0" style={{ background: "#00A884" }}>
                    <Mic size={12} color="white" />
                  </div>
                </div>
              </div>
            </div>

            {/* Dynamic Island */}
            <div className="absolute z-20" style={{ top: 11, left: "50%", transform: "translateX(-50%)", width: 92, height: 25, background: "#000", borderRadius: 20 }} />
            {/* Side buttons */}
            <div className="absolute" style={{ left: -3, top: 96, width: 3, height: 28, background: "#3a3a3c", borderRadius: "2px 0 0 2px" }} />
            <div className="absolute" style={{ left: -3, top: 132, width: 3, height: 46, background: "#3a3a3c", borderRadius: "2px 0 0 2px" }} />
            <div className="absolute" style={{ left: -3, top: 186, width: 3, height: 46, background: "#3a3a3c", borderRadius: "2px 0 0 2px" }} />
            <div className="absolute" style={{ right: -3, top: 148, width: 3, height: 64, background: "#3a3a3c", borderRadius: "0 2px 2px 0" }} />
          </div>
        </FadeUp>

      </div>
    </section>
  );
}
