"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { FadeUp, StaggerGroup, StaggerItem } from "@/components/ui/fade-up";
import { motion } from "framer-motion";

const values = [
  {
    emoji: "🔒",
    title: "Trust by default",
    body: "We believe every African trader deserves the same protection that international platforms take for granted. Trust shouldn't depend on personal reputation alone.",
  },
  {
    emoji: "⚡",
    title: "Speed matters",
    body: "Disputes in 24 hours. Funds released instantly. Payment confirmed in seconds. Slow protection is not protection — it's an excuse.",
  },
  {
    emoji: "🌍",
    title: "Built for Africa",
    body: "Not a copy of a Western product. Deal Shield is designed for the realities of African trade: WhatsApp commerce, cash economy transitions, and diaspora buyers.",
  },
  {
    emoji: "🤝",
    title: "Both sides matter",
    body: "We protect buyers from fraud AND sellers from non-payment and disputes. Escrow only works when both parties feel safe — we design with that in mind.",
  },
];

const stats = [
  { value: "₦2.4B+", label: "Secured in escrow" },
  { value: "8,400+", label: "Deals completed" },
  { value: "99.2%", label: "Resolution rate" },
  { value: "< 24hrs", label: "Average dispute time" },
];

export default function AboutPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-white py-20 border-b border-[#111827]/[0.07]">
        <div className="mx-auto max-w-3xl px-6 text-center">
          <FadeUp>
            <span className="text-sm font-semibold text-[#166534] uppercase tracking-widest">
              About us
            </span>
            <h1 className="mt-3 text-4xl md:text-5xl font-bold tracking-tight text-[#111827]">
              Built for Africans,
              <br />
              <span className="text-[#22C55E]">by Africans.</span>
            </h1>
            <p className="mt-5 text-lg text-[#111827]/60 leading-relaxed max-w-2xl mx-auto">
              Deal Shield was born out of a simple frustration: why should trading with someone you don&apos;t know require blind trust? We built the infrastructure to make it safe.
            </p>
          </FadeUp>
        </div>
      </section>

      {/* Mission */}
      <section className="py-10 md:py-20" style={{ background: "#BDEECF" }}>
        <div className="mx-auto max-w-4xl px-6 grid md:grid-cols-2 gap-12 items-center">
          <FadeUp>
            <span className="text-sm font-semibold text-[#166534] uppercase tracking-widest">
              Our mission
            </span>
            <h2 className="mt-3 text-3xl font-bold text-[#111827]">
              Make every trade safe — for everyone, everywhere.
            </h2>
            <p className="mt-4 text-[#111827]/60 leading-relaxed">
              Every week, thousands of Africans lose money to ghost sellers, fake alerts, and disputes with no resolution. The problem isn&apos;t that people are dishonest — it&apos;s that the infrastructure for trust doesn&apos;t exist.
            </p>
            <p className="mt-4 text-[#111827]/60 leading-relaxed">
              Deal Shield builds that infrastructure. Paystack-secured escrow, AI-guided dispute resolution, and a reputation system that makes honest traders visible — so the honest majority can trade without fear.
            </p>
          </FadeUp>
          <FadeUp delay={0.1}>
            <div className="grid grid-cols-2 gap-4">
              {stats.map((s) => (
                <div
                  key={s.label}
                  className="rounded-2xl bg-white border border-[#111827]/10 p-6 text-center shadow-sm"
                >
                  <div className="text-3xl font-bold text-[#14532D]">{s.value}</div>
                  <div className="mt-1 text-xs text-[#111827]/60">{s.label}</div>
                </div>
              ))}
            </div>
          </FadeUp>
        </div>
      </section>

      {/* Values */}
      <section className="bg-white py-20">
        <div className="mx-auto max-w-5xl px-6">
          <FadeUp className="text-center mb-12">
            <span className="text-sm font-semibold text-[#166534] uppercase tracking-widest">
              Our values
            </span>
            <h2 className="mt-3 text-3xl font-bold text-[#111827]">What we stand for</h2>
          </FadeUp>
          <StaggerGroup className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {values.map((v) => (
              <StaggerItem key={v.title}>
                <motion.div
                  whileHover={{ y: -4 }}
                  transition={{ duration: 0.2, ease: "easeOut" }}
                  className="rounded-2xl border border-[#111827]/10 bg-white p-6 h-full shadow-sm"
                >
                  <span className="text-3xl">{v.emoji}</span>
                  <h3 className="mt-4 font-semibold text-[#111827]">{v.title}</h3>
                  <p className="mt-2 text-sm text-[#111827]/60 leading-relaxed">{v.body}</p>
                </motion.div>
              </StaggerItem>
            ))}
          </StaggerGroup>
        </div>
      </section>

      {/* CTA */}
      <section className="py-10 md:py-20" style={{ background: "#BDEECF" }}>
        <FadeUp className="mx-auto max-w-2xl px-6 text-center">
          <h2 className="text-3xl font-bold text-[#111827]">Join thousands trading safely.</h2>
          <p className="mt-3 text-[#111827]/60">Your first deal is free. No monthly fee. Ever.</p>
          <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/signup"
              className="btn-shimmer group inline-flex items-center gap-2 bg-[#22C55E] text-white font-semibold px-6 py-3 rounded-full hover:bg-[#166534] transition-colors"
            >
              Get started free
              <ArrowRight size={16} className="group-hover:translate-x-0.5 transition-transform" />
            </Link>
            <Link
              href="/contact"
              className="inline-flex items-center justify-center border border-[#111827]/20 text-[#111827]/75 px-6 py-3 rounded-full hover:bg-[#111827]/[0.04] transition-all"
            >
              Talk to us
            </Link>
          </div>
        </FadeUp>
      </section>
    </>
  );
}
