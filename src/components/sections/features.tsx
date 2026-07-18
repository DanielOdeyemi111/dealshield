"use client";

import { ShoppingBag, ShieldCheck, Bot } from "lucide-react";
import { FadeUp, StaggerGroup, StaggerItem } from "@/components/ui/fade-up";
import { motion } from "framer-motion";

const features = [
  {
    icon: ShoppingBag,
    emoji: "🛍️",
    title: "A real marketplace",
    body: "Browse thousands of verified product listings — electronics, fashion, services, digital goods and more. Sellers build storefronts. Buyers discover, compare, and buy safely.",
  },
  {
    icon: ShieldCheck,
    emoji: "🛡️",
    title: "Escrow on every order",
    body: "Every purchase on Deal Shield is automatically escrow-protected. Funds lock the moment a buyer pays and release only when they confirm delivery. No manual setup needed.",
  },
  {
    icon: Bot,
    emoji: "🤖",
    title: "AI dispute resolution",
    body: "Disagreement? Our AI reviews evidence from both sides, compares it against the original listing, and delivers a binding decision within 24 hours — 24/7, no waiting.",
  },
];

export default function FeaturesSection() {
  return (
    <section className="bg-white py-12 md:py-24">
      <div className="w-full mx-auto max-w-6xl px-6">
        <FadeUp className="max-w-xl">
          <span className="text-sm font-semibold text-[#166534] uppercase tracking-widest">
            Why Deal Shield
          </span>
          <h2 className="mt-3 text-3xl md:text-4xl font-bold tracking-tight text-[#111827]">
            Your personal AI safety net — on every trade.
          </h2>
          <p className="mt-4 text-[#111827]/60 leading-relaxed">
            Deal safely from the comfort of your mobile phone, directly on WhatsApp — with an LLM-powered escrow built into every transaction. Trade confidently across sellers and always get your full money&apos;s worth.
          </p>
        </FadeUp>

        <StaggerGroup className="mt-8 md:mt-14 flex gap-4 overflow-x-auto snap-x snap-mandatory scroll-hide pb-3 -mx-6 px-6 md:grid md:grid-cols-3 md:overflow-visible md:pb-0 md:mx-0 md:px-0 md:gap-6">
          {features.map((f, i) => (
            <StaggerItem key={f.title} className="snap-start shrink-0 w-[80vw] max-w-[320px] md:w-auto md:max-w-none">
              <motion.div
                whileHover={{ y: -6, boxShadow: "0 20px 40px rgba(34,197,94,0.1)" }}
                transition={{ duration: 0.25, ease: "easeOut" }}
                className="rounded-2xl border border-[#111827]/10 bg-white p-8 h-full shadow-sm hover:border-[#22C55E]/30 transition-all relative overflow-hidden group"
              >
                <motion.div
                  className="pointer-events-none absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  style={{ background: "radial-gradient(circle at 30% 20%, rgba(34,197,94,0.05) 0%, transparent 70%)" }}
                />

                <motion.span
                  initial={{ scale: 0.5, opacity: 0 }}
                  whileInView={{ scale: 1, opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.15, duration: 0.5, type: "spring", bounce: 0.5 }}
                  className="inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-[#22C55E]/10 relative"
                >
                  <motion.span
                    animate={{ y: [0, -4, 0] }}
                    transition={{ duration: 3, repeat: Infinity, ease: "easeInOut", delay: i * 0.8 }}
                    className="text-2xl"
                  >
                    {f.emoji}
                  </motion.span>
                  <motion.span
                    animate={{ scale: [1, 1.6], opacity: [0.4, 0] }}
                    transition={{ duration: 2, repeat: Infinity, ease: "easeOut", delay: i * 0.6 }}
                    className="absolute inset-0 rounded-2xl bg-[#22C55E]/20"
                  />
                </motion.span>

                <h3 className="mt-5 font-semibold text-[#111827] text-base">{f.title}</h3>
                <p className="mt-2 text-sm text-[#111827]/60 leading-relaxed">{f.body}</p>

                <motion.div
                  initial={{ scaleX: 0 }}
                  whileInView={{ scaleX: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.3 + i * 0.1, duration: 0.6, ease: "easeOut" }}
                  className="absolute bottom-0 left-6 right-6 h-[2px] rounded-full origin-left"
                  style={{ background: "linear-gradient(90deg, #22C55E, transparent)" }}
                />
              </motion.div>
            </StaggerItem>
          ))}
        </StaggerGroup>
      </div>
    </section>
  );
}
