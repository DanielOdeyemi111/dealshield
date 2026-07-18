"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  ChevronLeft, Phone, Video, MoreVertical, Mic, Paperclip, Smile,
} from "lucide-react";
import { FadeUp } from "@/components/ui/fade-up";

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

type Msg = { side: "bot" | "user"; text: string; time: string };

const tabs: { id: string; emoji: string; title: string; subtitle: string; messages: Msg[] }[] = [
  {
    id: "buy",
    emoji: "🛍️",
    title: "Buy safely",
    subtitle: "Find a listing, pay into escrow, only release when you're happy.",
    messages: [
      { side: "bot",  text: "🛍️ Found it!\nEmeka listed iPhone 15 Pro, 256GB — ₦450,000\n⭐ 4.9 · Verified seller", time: "9:41" },
      { side: "user", text: "I'll take it! Is my money safe? 🤔", time: "9:42" },
      { side: "bot",  text: "🛡️ 100% safe with Deal Shield escrow!\nFunds lock until YOU confirm delivery.", time: "9:42" },
      { side: "user", text: "Perfect. Just paid ✅", time: "9:43" },
      { side: "bot",  text: "💰 ₦450,000 locked in escrow!\nSeller has been notified to ship 📦", time: "9:43" },
      { side: "user", text: "Package arrived! Looks perfect 😍", time: "10:03" },
      { side: "bot",  text: "🎉 Deal complete!\nFunds released to seller.", time: "10:03" },
    ],
  },
  {
    id: "sell",
    emoji: "🏪",
    title: "Sell confidently",
    subtitle: "List your product, get paid first, then ship — zero fake alerts.",
    messages: [
      { side: "bot",  text: "🛍️ New buyer on your listing!\nChidi wants to buy your MacBook Pro M3\nPrice: ₦850,000", time: "2:14" },
      { side: "user", text: "Has he paid yet? 🤔", time: "2:15" },
      { side: "bot",  text: "💰 Yes! ₦850,000 confirmed in escrow.\nPayment is real — safe to ship now.", time: "2:15" },
      { side: "user", text: "Shipping today! Waybill: NG-4829 📦", time: "2:30" },
      { side: "bot",  text: "✅ Shipment logged. Buyer notified.", time: "2:30" },
      { side: "bot",  text: "🎉 Chidi confirmed delivery!\n₦833,000 sent to your bank account.", time: "4:17" },
    ],
  },
  {
    id: "service",
    emoji: "🔧",
    title: "Hire a freelancer",
    subtitle: "Pay service providers securely — funds release only on completion.",
    messages: [
      { side: "user", text: "Need a logo designed. Budget: ₦80,000", time: "10:00" },
      { side: "bot",  text: "🎨 Service deal created!\nChukwudi will design your logo — ₦80,000\nDeadline: 3 days", time: "10:01" },
      { side: "user", text: "Agreed! Funding now ✅", time: "10:02" },
      { side: "bot",  text: "💰 ₦80,000 locked in escrow.\nChukwudi can start with confidence!", time: "10:02" },
      { side: "bot",  text: "📎 Chukwudi delivered the final files!\nPlease review and confirm.", time: "3:45" },
      { side: "user", text: "Love it! Approved 🔥", time: "3:50" },
      { side: "bot",  text: "🎉 ₦78,400 paid to Chukwudi.\nService deal complete!", time: "3:50" },
    ],
  },
  {
    id: "milestone",
    emoji: "🏗️",
    title: "Milestone projects",
    subtitle: "Break large projects into funded stages — pay as each is delivered.",
    messages: [
      { side: "bot",  text: "🏗️ Project: Mobile App Development\nTotal: ₦2,000,000 · 4 milestones\nMilestone 1: UI Design — ₦500,000", time: "9:00" },
      { side: "user", text: "Looks good! Fund Milestone 1 ✅", time: "9:05" },
      { side: "bot",  text: "💰 ₦500,000 locked for Milestone 1\nDev team notified to begin!", time: "9:05" },
      { side: "bot",  text: "✅ Milestone 1 complete!\nUI designs submitted for your review.", time: "2 days" },
      { side: "user", text: "Designs approved! Fund Milestone 2 🚀", time: "2 days" },
      { side: "bot",  text: "🎉 ₦500,000 released to dev team.\n₦500,000 locked for Milestone 2!", time: "2 days" },
    ],
  },
  {
    id: "dispute",
    emoji: "⚖️",
    title: "Raise a dispute",
    subtitle: "If something goes wrong, our AI reviews evidence and decides fairly within 24hrs.",
    messages: [
      { side: "user", text: "Item arrived damaged! Not as described 😡", time: "11:20" },
      { side: "bot",  text: "⚠️ Dispute opened on Deal #ESC-2847\nFunds remain locked. Submit evidence.", time: "11:20" },
      { side: "user", text: "Sent 3 photos of the damage 📸", time: "11:22" },
      { side: "bot",  text: "🤖 AI reviewing evidence from both sides...\nSeller has 24 hours to respond.", time: "11:22" },
      { side: "bot",  text: "⚖️ AI Decision: Refund approved.\nItem doesn't match listing description.", time: "12:10" },
      { side: "bot",  text: "✅ ₦450,000 refunded to your account.\nDeal closed in your favour.", time: "12:10" },
    ],
  },
];

function ChatBubble({ msg, index }: { msg: Msg; index: number }) {
  const isUser = msg.side === "user";
  return (
    <motion.div
      initial={{ opacity: 0, y: 8, scale: 0.95 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      transition={{ duration: 0.28, delay: index * 0.45 + 0.1, ease: EASE }}
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

export default function HowItWorksSection() {
  const [active, setActive] = useState(0);
  const tab = tabs[active];

  return (
    <section className="py-10 md:py-16" style={{ background: "#BDEECF" }}>
      <div className="w-full mx-auto max-w-6xl px-6">
        <div className="grid lg:grid-cols-2 gap-6 lg:gap-10 items-center">

          {/* ── Left: header + clickable tabs ── */}
          <div className="space-y-2">
            <FadeUp className="mb-5">
              <span className="text-sm font-semibold text-[#166534] uppercase tracking-widest">
                How it works
              </span>
              <h2 className="mt-2 text-3xl md:text-4xl font-bold tracking-tight text-[#111827]">
                Pick your scenario
              </h2>
              <p className="mt-2 text-[#111827]/60">
                Whether you&apos;re buying, selling, or hiring — see exactly how Deal Shield protects you.
              </p>
            </FadeUp>
            {tabs.map((t, i) => (
              <motion.button
                key={t.id}
                onClick={() => setActive(i)}
                whileHover={{ x: active === i ? 0 : 5 }}
                transition={{ duration: 0.18 }}
                className={`w-full text-left rounded-xl px-4 py-3 flex items-start gap-3 border transition-all duration-200 ${
                  active === i
                    ? "bg-[#14532D] border-[#14532D] shadow-xl"
                    : "bg-white border-[#111827]/10 hover:border-[#22C55E]/50 hover:shadow-md"
                }`}
              >
                <motion.span
                  animate={active === i ? { rotate: [0, -8, 8, 0] } : {}}
                  transition={{ duration: 0.5 }}
                  className="text-xl shrink-0 mt-0.5"
                >
                  {t.emoji}
                </motion.span>
                <div className="flex-1 min-w-0">
                  <div className={`font-semibold text-sm ${active === i ? "text-white" : "text-[#111827]"}`}>
                    {t.title}
                  </div>
                  <div className={`text-xs leading-snug ${active === i ? "text-white/65" : "text-[#111827]/50"}`}>
                    {t.subtitle}
                  </div>
                </div>
                {active === i && (
                  <motion.span
                    layoutId="dot"
                    className="h-2 w-2 rounded-full bg-[#22C55E] shrink-0 mt-1"
                  />
                )}
              </motion.button>
            ))}
          </div>

          {/* ── Right: iPhone mockup ── */}
          <div className="flex justify-center lg:justify-center lg:pt-0">
            <div className="relative select-none" style={{ width: 254, height: 520 }}>
              <div
                className="absolute inset-0"
                style={{
                  background: "linear-gradient(145deg, #3a3a3c 0%, #1c1c1e 40%, #2c2c2e 100%)",
                  borderRadius: 48,
                  boxShadow: "0 32px 64px rgba(0,0,0,0.45), inset 0 1px 0 rgba(255,255,255,0.12), 0 0 0 1px rgba(255,255,255,0.06)",
                  padding: 4,
                }}
              >
                <div className="w-full h-full overflow-hidden flex flex-col" style={{ borderRadius: 44, background: WA.bg }}>

                  {/* Status bar */}
                  <div className="flex items-center justify-between px-5 pt-3 pb-1 shrink-0" style={{ background: WA.headerBg }}>
                    <span className="text-[10px] font-semibold" style={{ color: WA.text }}>9:41</span>
                    <div className="flex items-center gap-1" style={{ color: WA.text }}>
                      <svg width="16" height="10" viewBox="0 0 16 10" fill="currentColor"><rect x="0" y="6" width="3" height="4" rx="0.5" opacity="0.4" /><rect x="4" y="4" width="3" height="6" rx="0.5" opacity="0.6" /><rect x="8" y="2" width="3" height="8" rx="0.5" opacity="0.8" /><rect x="12" y="0" width="3" height="10" rx="0.5" /></svg>
                      <svg width="14" height="10" viewBox="0 0 14 10" fill="currentColor"><path d="M7 8.5a1.2 1.2 0 1 1 0-2.4 1.2 1.2 0 0 1 0 2.4z" /><path d="M3.2 5.3a5.3 5.3 0 0 1 7.6 0l-1.1 1.1a3.7 3.7 0 0 0-5.4 0L3.2 5.3z" opacity="0.8" /><path d="M1 3a8.3 8.3 0 0 1 12 0L11.9 4.1A6.7 6.7 0 0 0 2.1 4.1L1 3z" opacity="0.5" /></svg>
                      <svg width="20" height="10" viewBox="0 0 20 10" fill="currentColor"><rect x="0" y="1" width="17" height="8" rx="2" stroke="currentColor" strokeWidth="0.8" fill="none" /><rect x="1" y="2" width="13" height="6" rx="1" opacity="0.9" /><rect x="17.5" y="3.5" width="2" height="3" rx="1" /></svg>
                    </div>
                  </div>

                  {/* WhatsApp header — updates with active tab */}
                  <div className="flex items-center gap-2 px-2 py-2 shrink-0" style={{ background: WA.headerBg }}>
                    <ChevronLeft size={15} color={WA.text} className="shrink-0 opacity-80" />
                    <motion.div
                      key={tab.id + "-avatar"}
                      initial={{ scale: 0.7, opacity: 0 }}
                      animate={{ scale: 1, opacity: 1 }}
                      transition={{ duration: 0.3, type: "spring", bounce: 0.5 }}
                      className="h-8 w-8 rounded-full flex items-center justify-center text-base shrink-0"
                      style={{ background: "#2A3942" }}
                    >
                      {tab.emoji}
                    </motion.div>
                    <div className="flex-1 min-w-0">
                      <motion.div
                        key={tab.id + "-name"}
                        initial={{ opacity: 0, x: -6 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.25, ease: EASE }}
                        className="text-[10px] font-semibold leading-tight truncate"
                        style={{ color: WA.text }}
                      >
                        {tab.title}
                      </motion.div>
                      <div className="text-[8px] font-medium" style={{ color: "#25D366" }}>● online</div>
                    </div>
                    <Video size={14} color={WA.sub} className="shrink-0" />
                    <Phone size={13} color={WA.sub} className="shrink-0" />
                    <MoreVertical size={14} color={WA.sub} className="shrink-0" />
                  </div>

                  {/* Messages — re-animates on tab switch */}
                  <div className="flex-1 px-2 py-2 overflow-hidden" style={{ background: WA.bg }}>
                    <div className="flex justify-center mb-2">
                      <span className="text-[8px] px-2 py-0.5 rounded-full" style={{ background: "#182229", color: WA.time }}>TODAY</span>
                    </div>
                    <AnimatePresence mode="wait">
                      <motion.div
                        key={tab.id}
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0, y: -6 }}
                        transition={{ duration: 0.18 }}
                        className="flex flex-col gap-1.5"
                      >
                        {tab.messages.map((msg, i) => (
                          <ChatBubble key={i} msg={msg} index={i} />
                        ))}
                      </motion.div>
                    </AnimatePresence>
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
              <div className="absolute z-20" style={{ top: 12, left: "50%", transform: "translateX(-50%)", width: 96, height: 26, background: "#000", borderRadius: 20 }} />
              {/* Side buttons */}
              <div className="absolute" style={{ left: -3, top: 100, width: 3, height: 30, background: "#3a3a3c", borderRadius: "2px 0 0 2px" }} />
              <div className="absolute" style={{ left: -3, top: 138, width: 3, height: 48, background: "#3a3a3c", borderRadius: "2px 0 0 2px" }} />
              <div className="absolute" style={{ left: -3, top: 194, width: 3, height: 48, background: "#3a3a3c", borderRadius: "2px 0 0 2px" }} />
              <div className="absolute" style={{ right: -3, top: 156, width: 3, height: 66, background: "#3a3a3c", borderRadius: "0 2px 2px 0" }} />
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
