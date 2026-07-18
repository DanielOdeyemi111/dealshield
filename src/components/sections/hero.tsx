"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import {
  ShieldCheck, ArrowRight, CheckCircle2, ChevronLeft,
  Phone, Video, MoreVertical, Mic, Paperclip, Smile,
  Star, Zap, Users, Lock, ShoppingBag, Package, Bot,
} from "lucide-react";

const EASE: [number, number, number, number] = [0.22, 1, 0.36, 1];

const container = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.09, delayChildren: 0.1 } },
};
const item = {
  hidden: { opacity: 0, y: 32 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.65, ease: EASE } },
};

const WA = {
  bg: "#0B141A",
  headerBg: "#1F2C34",
  incomingBubble: "#202C33",
  outgoingBubble: "#005C4B",
  inputBg: "#1F2C34",
  timeText: "#8696A0",
  text: "#E9EDEF",
  subText: "#8696A0",
};

// Messages show BOTH marketplace discovery AND escrow protection
const chatMessages = [
  { side: "bot", text: "🛍️ New listing on Deal Shield!\nEmeka listed iPhone 15 Pro, 256GB\n₦450,000 · ⭐ 4.9 · Verified seller", time: "9:41", delay: 0.6 },
  { side: "user", text: "Looks great! But is my payment safe? 🤔", time: "9:41", delay: 1.2 },
  { side: "bot", text: "🛡️ 100% safe with escrow!\nFunds lock until YOU confirm delivery.\nNo fake alerts possible.", time: "9:42", delay: 1.9 },
  { side: "user", text: "Perfect. Just made the payment ✅", time: "9:43", delay: 2.6 },
  { side: "bot", text: "💰 ₦450,000 locked in escrow!\nEmeka has been notified to ship 📦", time: "9:43", delay: 3.2 },
  { side: "bot", text: "🚚 Emeka marked order as shipped!\nEstimated delivery: 1-2 days.", time: "9:55", delay: 3.9 },
  { side: "user", text: "Package arrived! Looks perfect 😍", time: "10:03", delay: 4.5 },
  { side: "bot", text: "✅ Receipt confirmed!\nReleasing funds to Emeka now ⚡", time: "10:03", delay: 5.1 },
  { side: "bot", text: "🎉 Deal complete!\n₦441,000 released to seller.\nRate your experience ⭐⭐⭐⭐⭐", time: "10:03", delay: 5.7 },
];

function ChatBubble({ msg }: { msg: typeof chatMessages[0] }) {
  const isUser = msg.side === "user";
  return (
    <motion.div
      initial={{ opacity: 0, y: 8, scale: 0.94 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      transition={{ duration: 0.28, delay: msg.delay, ease: EASE }}
      className={`flex ${isUser ? "justify-end" : "justify-start"}`}
    >
      <div
        className="max-w-[82%] px-3 py-1.5 text-[10px] leading-relaxed whitespace-pre-line"
        style={{
          background: isUser ? WA.outgoingBubble : WA.incomingBubble,
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
          <span className="text-[8px]" style={{ color: WA.timeText }}>{msg.time}</span>
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

function TypingIndicator({ delay }: { delay: number }) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: [0, 1, 1, 0] }}
      transition={{ duration: 0.7, delay, times: [0, 0.1, 0.8, 1] }}
      className="flex justify-start"
    >
      <div className="px-3 py-2.5 flex gap-1 items-center" style={{ background: WA.incomingBubble, borderRadius: "8px 8px 8px 2px" }}>
        {[0, 1, 2].map((i) => (
          <motion.span
            key={i}
            animate={{ opacity: [0.4, 1, 0.4] }}
            transition={{ duration: 0.8, delay: delay + i * 0.15, repeat: Infinity }}
            className="block h-1.5 w-1.5 rounded-full"
            style={{ background: WA.timeText }}
          />
        ))}
      </div>
    </motion.div>
  );
}

function iPhoneMockup() {
  return (
    <div className="relative mx-auto select-none" style={{ width: 234, height: 480 }}>
      <div
        className="absolute inset-0"
        style={{
          background: "linear-gradient(145deg, #3a3a3c 0%, #1c1c1e 40%, #2c2c2e 100%)",
          borderRadius: 44,
          boxShadow: "0 32px 64px rgba(0,0,0,0.5), inset 0 1px 0 rgba(255,255,255,0.12), 0 0 0 1px rgba(255,255,255,0.06)",
          padding: 4,
        }}
      >
        <div className="w-full h-full overflow-hidden flex flex-col" style={{ borderRadius: 40, background: WA.bg }}>

          {/* Status bar */}
          <div className="flex items-center justify-between px-5 pt-3 pb-1 shrink-0" style={{ background: WA.headerBg }}>
            <span className="text-[10px] font-semibold" style={{ color: WA.text }}>9:41</span>
            <div className="flex items-center gap-1" style={{ color: WA.text }}>
              <svg width="16" height="10" viewBox="0 0 16 10" fill="currentColor">
                <rect x="0" y="6" width="3" height="4" rx="0.5" opacity="0.4" />
                <rect x="4" y="4" width="3" height="6" rx="0.5" opacity="0.6" />
                <rect x="8" y="2" width="3" height="8" rx="0.5" opacity="0.8" />
                <rect x="12" y="0" width="3" height="10" rx="0.5" />
              </svg>
              <svg width="14" height="10" viewBox="0 0 14 10" fill="currentColor">
                <path d="M7 8.5a1.2 1.2 0 1 1 0-2.4 1.2 1.2 0 0 1 0 2.4z" />
                <path d="M3.2 5.3a5.3 5.3 0 0 1 7.6 0l-1.1 1.1a3.7 3.7 0 0 0-5.4 0L3.2 5.3z" opacity="0.8" />
                <path d="M1 3a8.3 8.3 0 0 1 12 0L11.9 4.1A6.7 6.7 0 0 0 2.1 4.1L1 3z" opacity="0.5" />
              </svg>
              <svg width="20" height="10" viewBox="0 0 20 10" fill="currentColor">
                <rect x="0" y="1" width="17" height="8" rx="2" stroke="currentColor" strokeWidth="0.8" fill="none" />
                <rect x="1" y="2" width="13" height="6" rx="1" opacity="0.9" />
                <rect x="17.5" y="3.5" width="2" height="3" rx="1" />
              </svg>
            </div>
          </div>

          {/* WhatsApp header */}
          <div className="flex items-center gap-2 px-2 py-2 shrink-0" style={{ background: WA.headerBg }}>
            <ChevronLeft size={15} color={WA.text} className="shrink-0 opacity-80" />
            <div className="h-8 w-8 rounded-full flex items-center justify-center text-sm shrink-0" style={{ background: "#2A3942" }}>🛡️</div>
            <div className="flex-1 min-w-0">
              <div className="text-[10px] font-semibold leading-tight" style={{ color: WA.text }}>Deal Shield</div>
              <div className="text-[8px] font-medium" style={{ color: "#25D366" }}>● online</div>
            </div>
            <Video size={14} color={WA.subText} className="shrink-0" />
            <Phone size={13} color={WA.subText} className="shrink-0" />
            <MoreVertical size={14} color={WA.subText} className="shrink-0" />
          </div>

          {/* Messages */}
          <div className="flex-1 px-2 py-2 flex flex-col gap-1.5 overflow-hidden" style={{ background: WA.bg }}>
            <div className="flex justify-center my-1">
              <span className="text-[8px] px-2 py-0.5 rounded-full" style={{ background: "#182229", color: WA.timeText }}>TODAY</span>
            </div>
            <TypingIndicator delay={0.3} />
            {chatMessages.map((msg, i) => (
              <div key={i}>
                <ChatBubble msg={msg} />
                {i < chatMessages.length - 1 && chatMessages[i + 1].side === "bot" && (
                  <TypingIndicator delay={msg.delay + 0.4} />
                )}
              </div>
            ))}
          </div>

          {/* Input bar */}
          <div className="flex items-center gap-1.5 px-2 py-2 shrink-0" style={{ background: WA.inputBg }}>
            <div className="flex-1 flex items-center gap-2 rounded-full px-3 py-1.5" style={{ background: "#2A3942" }}>
              <Smile size={12} color={WA.subText} />
              <span className="text-[9px] flex-1" style={{ color: WA.subText }}>Message</span>
              <Paperclip size={11} color={WA.subText} />
            </div>
            <div className="h-7 w-7 rounded-full flex items-center justify-center shrink-0" style={{ background: "#00A884" }}>
              <Mic size={12} color="white" />
            </div>
          </div>
        </div>
      </div>

      {/* Dynamic Island */}
      <div className="absolute z-20" style={{ top: 10, left: "50%", transform: "translateX(-50%)", width: 88, height: 24, background: "#000", borderRadius: 20 }} />
      {/* Side buttons */}
      <div className="absolute" style={{ left: -3, top: 96, width: 3, height: 28, background: "#3a3a3c", borderRadius: "2px 0 0 2px" }} />
      <div className="absolute" style={{ left: -3, top: 132, width: 3, height: 46, background: "#3a3a3c", borderRadius: "2px 0 0 2px" }} />
      <div className="absolute" style={{ left: -3, top: 186, width: 3, height: 46, background: "#3a3a3c", borderRadius: "2px 0 0 2px" }} />
      <div className="absolute" style={{ right: -3, top: 148, width: 3, height: 64, background: "#3a3a3c", borderRadius: "0 2px 2px 0" }} />
    </div>
  );
}

/* ---- Float wrapper ---- */
function FloatBadge({
  children, delay, duration = 4.5, amount = 8, className = "",
}: {
  children: React.ReactNode; delay: number; duration?: number; amount?: number; className?: string;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.75 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ delay, duration: 0.4, ease: EASE }}
      className={className}
    >
      <motion.div
        animate={{ y: [0, -amount, 0] }}
        transition={{ duration, repeat: Infinity, ease: "easeInOut", delay: delay % 2 }}
      >
        {children}
      </motion.div>
    </motion.div>
  );
}

/* ---- Emoji bubble ---- */
function EmojiBubble({ emoji, delay, className = "" }: { emoji: string; delay: number; className?: string }) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ delay, duration: 0.35, type: "spring", bounce: 0.55 }}
      className={`h-11 w-11 rounded-full bg-white shadow-xl border border-[#111827]/[0.07] flex items-center justify-center text-xl ${className}`}
    >
      <motion.span
        animate={{ rotate: [0, 7, -7, 0], scale: [1, 1.1, 1] }}
        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay }}
      >
        {emoji}
      </motion.span>
    </motion.div>
  );
}

/* ---- Pulse ring ---- */
function PulseRing({ delay, size, color }: { delay: number; size: number; color: string }) {
  return (
    <motion.div
      animate={{ scale: [1, 2.3], opacity: [0.4, 0] }}
      transition={{ duration: 3.2, delay, repeat: Infinity, ease: "easeOut", repeatDelay: 1 }}
      className="absolute rounded-full pointer-events-none"
      style={{ width: size, height: size, background: color, top: "50%", left: "50%", marginLeft: -size / 2, marginTop: -size / 2 }}
    />
  );
}

export default function HeroSection() {
  return (
    <section className="relative bg-white overflow-hidden">
      {/* Ambient glows */}
      <div className="pointer-events-none absolute inset-0">
        <motion.div
          animate={{ y: [0, 20, 0], opacity: [0.6, 1, 0.6] }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
          className="absolute -top-40 right-0 h-[600px] w-[600px] rounded-full bg-[#22C55E]/[0.08] blur-3xl"
        />
        <motion.div
          animate={{ y: [0, -16, 0], opacity: [0.4, 0.7, 0.4] }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-40 -left-32 h-[420px] w-[420px] rounded-full bg-[#22C55E]/[0.06] blur-3xl"
        />
        <motion.div
          animate={{ x: [0, 20, 0], opacity: [0.3, 0.5, 0.3] }}
          transition={{ duration: 12, repeat: Infinity, ease: "easeInOut", delay: 2 }}
          className="absolute bottom-0 right-1/3 h-[300px] w-[300px] rounded-full bg-[#14532D]/[0.05] blur-3xl"
        />
      </div>

      <div className="relative mx-auto max-w-6xl px-6 pt-14 pb-16 md:pt-24 md:pb-28 grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">

        {/* ── Left: Text ── */}
        <motion.div variants={container} initial="hidden" animate="visible">
          <motion.div variants={item}>
            <div className="inline-flex items-center gap-2 rounded-full border border-[#22C55E]/30 bg-[#22C55E]/[0.07] px-4 py-1.5 text-xs font-medium text-[#14532D]">
              <motion.span animate={{ rotate: [0, 360] }} transition={{ duration: 8, repeat: Infinity, ease: "linear" }}>
                <ShieldCheck size={14} className="text-[#22C55E]" />
              </motion.span>
              Africa&apos;s marketplace + escrow platform
            </div>
          </motion.div>

          <motion.h1
            variants={item}
            className="mt-6 text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight leading-[1.05]"
          >
            <span className="text-[#22C55E]">Trade without stress </span>
            <span className="text-[#111827]">and</span>
            <span className="text-[#22C55E]"> wahala</span>
          </motion.h1>

          <motion.p variants={item} className="mt-6 text-lg text-[#111827]/60 leading-relaxed max-w-lg">
            Your money stays locked in escrow until both sides are happy. No fake alerts. No ghost sellers. Just safe trades — on web or WhatsApp.
          </motion.p>

          <motion.div variants={item} className="mt-10 flex flex-col sm:flex-row items-center sm:items-start gap-4">
            <Link
              href="/signup"
              className="btn-shimmer group inline-flex items-center gap-2 bg-[#22C55E] text-white font-semibold px-6 py-3 rounded-full hover:bg-[#166534] hover:scale-[1.03] transition-all"
            >
              Start selling free
              <ArrowRight size={16} className="transition-transform group-hover:translate-x-0.5" />
            </Link>
            <a
              href="https://wa.me/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 border border-[#111827]/15 text-[#111827]/75 px-6 py-3 rounded-full hover:bg-[#111827]/[0.04] hover:border-[#111827]/25 transition-all"
            >
              Try on WhatsApp
            </a>
          </motion.div>

          <motion.div variants={item} className="mt-10 flex flex-wrap items-center gap-x-6 gap-y-2 text-xs text-[#111827]/40">
            <span>Paystack-secured</span>
            <span className="h-1 w-1 rounded-full bg-[#111827]/20" />
            <span>No hidden fees</span>
            <span className="h-1 w-1 rounded-full bg-[#111827]/20" />
            <span>24hr dispute resolution</span>
          </motion.div>

          {/* Stat pills */}
          <motion.div variants={item} className="mt-8 flex flex-wrap gap-3">
            {[
              { icon: <Users size={12} />, text: "8,400+ traders" },
              { icon: <Star size={12} className="fill-[#22C55E]" />, text: "99.2% resolved" },
              { icon: <Zap size={12} />, text: "< 24hr disputes" },
            ].map((s, i) => (
              <motion.div
                key={s.text}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.0 + i * 0.15, duration: 0.4, ease: EASE }}
                className="inline-flex items-center gap-1.5 text-[11px] font-medium text-[#14532D] bg-[#22C55E]/[0.09] border border-[#22C55E]/20 px-3 py-1.5 rounded-full"
              >
                <span className="text-[#22C55E]">{s.icon}</span>
                {s.text}
              </motion.div>
            ))}
          </motion.div>
        </motion.div>

        {/* ── Right: iPhone + all floating elements ── */}
        <motion.div
          initial={{ opacity: 0, y: 36, scale: 0.95 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 0.75, delay: 0.3, ease: EASE }}
          className="relative flex justify-center py-16"
        >
          {/* 4 expanding pulse rings behind phone */}
          <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
            <PulseRing delay={0}   size={310} color="rgba(34,197,94,0.04)" />
            <PulseRing delay={1}   size={250} color="rgba(34,197,94,0.06)" />
            <PulseRing delay={2}   size={185} color="rgba(34,197,94,0.09)" />
            <PulseRing delay={2.8} size={125} color="rgba(34,197,94,0.13)" />
          </div>

          {/* Floating phone */}
          <motion.div
            animate={{ y: [0, -10, 0] }}
            transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
          >
            {iPhoneMockup()}
          </motion.div>

          {/* ── 7 Emoji Bubbles ── */}
          <FloatBadge delay={1.0} duration={5}   amount={12} className="absolute top-[5%]   left-[3%]  hidden lg:block">
            <EmojiBubble emoji="💰" delay={1.0} />
          </FloatBadge>
          <FloatBadge delay={1.5} duration={4}   amount={9}  className="absolute top-[28%]  left-[-1%] hidden lg:block">
            <EmojiBubble emoji="🔐" delay={1.5} />
          </FloatBadge>
          <FloatBadge delay={2.0} duration={6}   amount={11} className="absolute bottom-[26%] left-[2%] hidden lg:block">
            <EmojiBubble emoji="⚡" delay={2.0} />
          </FloatBadge>
          <FloatBadge delay={1.2} duration={4.5} amount={10} className="absolute top-[8%]   right-[2%] hidden lg:block">
            <EmojiBubble emoji="🤝" delay={1.2} />
          </FloatBadge>
          <FloatBadge delay={1.8} duration={5.5} amount={8}  className="absolute top-[50%]  right-[-1%] hidden lg:block">
            <EmojiBubble emoji="⭐" delay={1.8} />
          </FloatBadge>
          {/* New: Shopping bag — marketplace icon */}
          <FloatBadge delay={2.4} duration={5}   amount={7}  className="absolute bottom-[14%] right-[3%] hidden lg:block">
            <EmojiBubble emoji="🛍️" delay={2.4} />
          </FloatBadge>
          {/* New: Party — deal complete icon, appears late */}
          <FloatBadge delay={4.6} duration={4.5} amount={9}  className="absolute bottom-[8%]  left-[3%]  hidden lg:block">
            <EmojiBubble emoji="🎉" delay={4.6} />
          </FloatBadge>

          {/* ── Notification Badges ── */}

          {/* 1. New listing — top left (marketplace), appears first */}
          <FloatBadge delay={0.5} duration={5.5} amount={6} className="absolute top-1 left-[3%] hidden sm:block">
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="bg-[#14532D] text-white rounded-xl px-3 py-2 flex items-center gap-1.5 text-[11px] font-semibold shadow-lg"
            >
              <ShoppingBag size={12} className="text-[#22C55E]" /> New listing! 🛍️
            </motion.div>
          </FloatBadge>

          {/* 2. Escrow locked — top right */}
          <FloatBadge delay={1.4} duration={4} amount={6} className="absolute top-1 right-[2%] hidden sm:block">
            <div className="bg-[#14532D] text-white rounded-xl px-3 py-2 flex items-center gap-1.5 text-[11px] font-semibold shadow-lg">
              <Lock size={11} className="text-[#22C55E]" /> ₦450k locked 🔒
            </div>
          </FloatBadge>

          {/* 3. Escrow active — left mid-upper (xl) */}
          <FloatBadge delay={0.9} duration={4.8} amount={8} className="absolute top-[26%] -left-5 hidden xl:block">
            <div className="bg-white border border-[#111827]/10 rounded-xl px-3 py-2 flex items-center gap-1.5 text-[11px] font-medium text-[#111827] shadow-md whitespace-nowrap">
              <ShieldCheck size={12} className="text-[#22C55E]" /> Escrow active
            </div>
          </FloatBadge>

          {/* 4. Instant release — right mid-upper (xl) */}
          <FloatBadge delay={2.2} duration={4.5} amount={7} className="absolute top-[30%] -right-5 hidden xl:block">
            <div className="bg-white border border-[#111827]/10 rounded-xl px-3 py-2 flex items-center gap-1.5 text-[11px] font-medium text-[#111827] shadow-md whitespace-nowrap">
              <Zap size={12} className="text-[#22C55E]" /> Instant release ⚡
            </div>
          </FloatBadge>

          {/* 5. AI dispute — left mid-lower (xl) */}
          <FloatBadge delay={2.6} duration={5.2} amount={6} className="absolute top-[54%] -left-5 hidden xl:block">
            <div className="bg-white border border-[#111827]/10 rounded-xl px-3 py-2 flex items-center gap-1.5 text-[11px] font-medium text-[#111827] shadow-md whitespace-nowrap">
              <Bot size={12} className="text-[#22C55E]" /> AI dispute: 24hr 🤖
            </div>
          </FloatBadge>

          {/* 6. 99.2% resolved — right mid-lower (xl) */}
          <FloatBadge delay={3.0} duration={5} amount={9} className="absolute top-[54%] -right-5 hidden xl:block">
            <div className="bg-white border border-[#111827]/10 rounded-xl px-3 py-2 flex items-center gap-1.5 text-[11px] font-medium text-[#111827] shadow-md whitespace-nowrap">
              <Star size={12} className="text-[#22C55E] fill-[#22C55E]" /> 99.2% resolved
            </div>
          </FloatBadge>

          {/* 7. Order shipped — bottom left (appears at delay 3.9 matching shipped message) */}
          <FloatBadge delay={3.9} duration={4.5} amount={6} className="absolute bottom-4 left-[2%] hidden sm:block">
            <div className="bg-white border border-[#111827]/[0.07] rounded-xl shadow-xl px-3 py-2 flex items-center gap-1.5 text-[11px] font-medium text-[#111827]">
              <Package size={13} className="text-[#166534]" /> Order shipped 📦
            </div>
          </FloatBadge>

          {/* 8. ₦441k released — bottom right (appears at delay 5.7 matching deal complete) */}
          <FloatBadge delay={5.7} duration={5} amount={7} className="absolute bottom-4 right-[2%] hidden sm:block">
            <div className="bg-white border border-[#111827]/[0.07] rounded-xl shadow-xl px-3 py-2 flex items-center gap-1.5 text-[11px] font-medium text-[#111827]">
              <CheckCircle2 size={13} className="text-[#22C55E]" /> ₦441k released! 🎉
            </div>
          </FloatBadge>

          {/* 9. Traders count — visible on sm/md (xl uses the side badges) */}
          <FloatBadge delay={3.0} duration={4.5} amount={5} className="absolute top-[20%] right-[2%] hidden sm:block xl:hidden">
            <div className="bg-white border border-[#111827]/10 rounded-xl px-3 py-2 flex items-center gap-1.5 text-[11px] font-medium text-[#111827] shadow-md">
              <Users size={12} className="text-[#22C55E]" /> 8,400+ traders
            </div>
          </FloatBadge>

          {/* Live activity ticker — slides up after chat completes */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 6.5, duration: 0.45, ease: EASE }}
            className="absolute -bottom-6 left-1/2 -translate-x-1/2 whitespace-nowrap hidden sm:flex"
          >
            <div className="bg-white border border-[#111827]/10 rounded-full px-4 py-2 flex items-center gap-2 text-[10px] text-[#111827]/70 shadow-lg">
              <motion.span
                animate={{ scale: [1, 1.5, 1] }}
                transition={{ duration: 1.5, repeat: Infinity }}
                className="h-2 w-2 rounded-full bg-[#22C55E] inline-block shrink-0"
              />
              Adaeze just completed a ₦120,000 deal on Deal Shield
            </div>
          </motion.div>
        </motion.div>

      </div>
    </section>
  );
}
