"use client";

import { motion } from "framer-motion";
import { FadeUp, StaggerGroup, StaggerItem } from "@/components/ui/fade-up";

type Side = "in" | "out" | "system";
type ChatMsg = { side: Side; text: string };
type Scenario = { emoji: string; tag: string; situation: string; outcome: string; chat: ChatMsg[] };

const scenarios: Scenario[] = [
  {
    emoji: "👻",
    tag: "Ghost Seller",
    situation: "You found a product, paid in full, seller confirmed. Then they vanished — number switched off.",
    outcome: "₦180,000 gone. Zero recourse.",
    chat: [
      { side: "out", text: "I've sent the money, where's my item? 🙏" },
      { side: "in", text: "It's on the way, just be patient" },
      { side: "out", text: "It's been 2 weeks! Hello??" },
      { side: "system", text: "This message could not be delivered" },
    ],
  },
  {
    emoji: "📸",
    tag: "Fake Alert",
    situation: "The screenshot looked real. The payment looked confirmed. Your account balance says otherwise.",
    outcome: "Item shipped. Alert was photoshopped.",
    chat: [
      { side: "out", text: "I've paid ✅ See my alert screenshot" },
      { side: "in", text: "Nothing showing in my account..." },
      { side: "out", text: "Na bank delay! Release the goods abeg 🙏" },
    ],
  },
  {
    emoji: "🏪",
    tag: "No Buyer Trust",
    situation: "You listed a legit product but buyers keep asking for proof. No one wants to pay first.",
    outcome: "Your shop stalls. Genuine buyers walk away.",
    chat: [
      { side: "in", text: "How do I know you won't collect money and disappear?" },
      { side: "out", text: "I'm legit! Check my testimonials 🙏" },
      { side: "in", text: "Sorry, I'll find someone with escrow." },
      { side: "system", text: "Buyer went offline" },
    ],
  },
];

function ChatBubble({ msg }: { msg: ChatMsg }) {
  if (msg.side === "system") {
    return (
      <div className="text-center text-[10px] text-[#111827]/40 italic py-0.5">{msg.text}</div>
    );
  }
  return (
    <div className={`flex ${msg.side === "out" ? "justify-end" : "justify-start"}`}>
      <div className={`max-w-[75%] rounded-2xl px-3 py-2 text-[11px] leading-snug ${
        msg.side === "out"
          ? "bg-[#22C55E] text-white rounded-br-sm"
          : "bg-[#111827]/[0.07] text-[#111827] rounded-bl-sm"
      }`}>
        {msg.text}
      </div>
    </div>
  );
}

export default function ProblemSection() {
  return (
    <section className="bg-white py-12 md:py-24">
      <div className="w-full mx-auto max-w-6xl px-6">
        <FadeUp className="max-w-xl">
          <span className="text-sm font-semibold text-[#166534] uppercase tracking-widest">
            Sound familiar?
          </span>
          <h2 className="mt-3 text-3xl md:text-4xl font-bold tracking-tight text-[#111827]">
            Online trading in Africa is broken.
            <br />
            <span className="text-[#22C55E]">We fix it.</span>
          </h2>
          <p className="mt-4 text-[#111827]/60 leading-relaxed">
            Whether you&apos;re buying on our marketplace or selling anywhere across Africa — these scenarios end careers and wallets. Deal Shield eliminates all of them.
          </p>
        </FadeUp>

        <StaggerGroup className="mt-8 md:mt-14 flex gap-4 overflow-x-auto snap-x snap-mandatory scroll-hide pb-3 -mx-6 px-6 md:grid md:grid-cols-3 md:overflow-visible md:pb-0 md:mx-0 md:px-0 md:gap-6">
          {scenarios.map((s) => (
            <StaggerItem key={s.tag} className="snap-start shrink-0 w-[80vw] max-w-[320px] md:w-auto md:max-w-none">
              <motion.div
                whileHover={{ y: -4 }}
                transition={{ duration: 0.2, ease: "easeOut" }}
                className="rounded-2xl border border-[#111827]/10 bg-white p-6 h-full flex flex-col shadow-sm"
              >
                <div className="flex items-center gap-3 mb-4">
                  <span className="text-2xl">{s.emoji}</span>
                  <span className="text-sm font-semibold text-[#111827]">{s.tag}</span>
                </div>
                <div className="flex-1 rounded-xl bg-[#111827]/[0.04] border border-[#111827]/[0.06] p-3 space-y-2 mb-5">
                  {s.chat.map((msg, i) => <ChatBubble key={i} msg={msg} />)}
                </div>
                <p className="text-xs text-[#111827]/60 leading-snug mb-3">{s.situation}</p>
                <div className="mt-auto rounded-lg bg-[#14532D]/[0.06] border border-[#14532D]/10 px-3 py-2">
                  <span className="text-xs font-semibold text-[#14532D]">{s.outcome}</span>
                </div>
              </motion.div>
            </StaggerItem>
          ))}
        </StaggerGroup>

        <FadeUp className="mt-10 text-center">
          <p className="text-sm text-[#111827]/50">
            Deal Shield holds every payment in escrow until{" "}
            <span className="font-semibold text-[#111827]">both sides are satisfied</span>. No trust required — just protection built into every transaction.
          </p>
        </FadeUp>
      </div>
    </section>
  );
}
