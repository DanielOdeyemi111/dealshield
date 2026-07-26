"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight, ShieldCheck, Clock, Zap, MessageSquare } from "lucide-react";
import { FadeUp, StaggerGroup, StaggerItem } from "@/components/ui/fade-up";

const steps = [
  {
    n: "01",
    title: "Create a deal",
    body: "Give the deal a name, describe what's being traded, set the amount, and choose a delivery window. You can do this on the web dashboard or by sending a WhatsApp message to our bot.",
    detail: "Takes under 60 seconds.",
    emoji: "📝",
  },
  {
    n: "02",
    title: "Invite the other party",
    body: "Share a deal link or WhatsApp invite with the buyer or seller. They join with a single tap — no account required. Both parties see the same deal terms before anyone pays.",
    detail: "No signup needed to join.",
    emoji: "🔗",
  },
  {
    n: "03",
    title: "Buyer pays into escrow",
    body: "The buyer pays via bank transfer or debit/credit card through Paystack. Funds are locked instantly in a Paystack-secured escrow account — visible to both parties on the dashboard.",
    detail: "Fake alerts are impossible.",
    emoji: "💳",
  },
  {
    n: "04",
    title: "Seller delivers",
    body: "With payment confirmed and locked, the seller ships or delivers with full confidence. The buyer can track deal status in real time and the seller sees exactly when funds will be released.",
    detail: "No more 'I'll send after delivery'.",
    emoji: "📦",
  },
  {
    n: "05",
    title: "Buyer confirms receipt",
    body: "Once the buyer confirms delivery, funds are released to the seller instantly. If the buyer is unresponsive past the agreed window, funds are released automatically — no seller is left waiting.",
    detail: "Auto-release on timeout.",
    emoji: "✅",
  },
  {
    n: "06",
    title: "Dispute? We step in.",
    body: "If the buyer disputes the delivery, our AI reviews evidence from both sides and guides a resolution within hours. If needed, our team issues a binding decision — funds go to whoever is right.",
    detail: "24-hour average resolution.",
    emoji: "⚖️",
  },
];

const channels = [
  {
    icon: MessageSquare,
    title: "WhatsApp",
    body: "Run an entire deal — create, pay, confirm, dispute — entirely from WhatsApp. No app download, no registration required.",
  },
  {
    icon: ShieldCheck,
    title: "Web Dashboard",
    body: "Manage all your deals from a real dashboard. See deal status, timelines, history, and your reputation score in one place.",
  },
  {
    icon: Zap,
    title: "Any device",
    body: "Works on mobile, tablet, or desktop. Buyers in the UK or US can pay in local currency for deals with African sellers.",
  },
  {
    icon: Clock,
    title: "24/7 availability",
    body: "Deals run around the clock. Our AI handles disputes at 3am the same as midday — no waiting for office hours.",
  },
];

export default function HowItWorksPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-white py-20 border-b border-[#111827]/[0.07]">
        <div className="mx-auto max-w-3xl px-6 text-center">
          <FadeUp>
            <span className="text-sm font-semibold text-[#166534] uppercase tracking-widest">
              How it works
            </span>
            <h1 className="mt-3 text-4xl md:text-5xl font-bold tracking-tight text-[#111827]">
              Safe in 60 seconds.
              <br />
              <span className="text-[#22C55E]">Resolved in hours.</span>
            </h1>
            <p className="mt-5 text-lg text-[#111827]/60 leading-relaxed">
              Deal Shield turns every trade into a structured, protected transaction. Here&apos;s exactly how it works, step by step.
            </p>
          </FadeUp>
        </div>
      </section>

      {/* Steps */}
      <section className="bg-white py-20">
        <div className="mx-auto max-w-4xl px-6">
          <div className="space-y-12">
            {steps.map((s, i) => (
              <FadeUp key={s.n} delay={i * 0.05}>
                <motion.div
                  className="flex gap-6 md:gap-10"
                >
                  <div className="shrink-0 flex flex-col items-center">
                    <div className="h-12 w-12 rounded-2xl bg-[#22C55E]/10 flex items-center justify-center text-xl">
                      {s.emoji}
                    </div>
                    {i < steps.length - 1 && (
                      <div className="mt-4 w-px flex-1 bg-[#22C55E]/20 min-h-[48px]" />
                    )}
                  </div>
                  <div className="pb-8">
                    <span className="text-xs font-bold text-[#22C55E] uppercase tracking-widest">
                      Step {s.n}
                    </span>
                    <h3 className="mt-1 text-xl font-semibold text-[#111827]">
                      {s.title}
                    </h3>
                    <p className="mt-2 text-[#111827]/60 leading-relaxed">{s.body}</p>
                    <div className="mt-3 inline-flex items-center gap-1.5 text-xs font-medium text-[#14532D] bg-[#22C55E]/10 px-3 py-1 rounded-full">
                      <ShieldCheck size={11} />
                      {s.detail}
                    </div>
                  </div>
                </motion.div>
              </FadeUp>
            ))}
          </div>
        </div>
      </section>

      {/* Channels */}
      <section className="py-10 md:py-20" style={{ background: "#BDEECF" }}>
        <div className="mx-auto max-w-5xl px-6">
          <FadeUp className="max-w-xl mb-12">
            <span className="text-sm font-semibold text-[#166534] uppercase tracking-widest">
              Where you can trade
            </span>
            <h2 className="mt-3 text-3xl font-bold tracking-tight text-[#111827]">
              Web, WhatsApp, or both
            </h2>
          </FadeUp>
          <StaggerGroup className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {channels.map((c) => (
              <StaggerItem key={c.title}>
                <div className="rounded-2xl bg-white border border-[#111827]/10 p-6 h-full shadow-sm">
                  <span className="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-[#22C55E]/10 text-[#14532D] mb-4">
                    <c.icon size={18} />
                  </span>
                  <h3 className="font-semibold text-[#111827] mb-2">{c.title}</h3>
                  <p className="text-sm text-[#111827]/60 leading-relaxed">{c.body}</p>
                </div>
              </StaggerItem>
            ))}
          </StaggerGroup>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-white py-20">
        <FadeUp className="mx-auto max-w-2xl px-6 text-center">
          <h2 className="text-3xl font-bold text-[#111827]">Ready to trade safely?</h2>
          <p className="mt-3 text-[#111827]/60">Your first deal is free. No monthly fees. Ever.</p>
          <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/signup"
              className="btn-shimmer group inline-flex items-center gap-2 bg-[#22C55E] text-white font-semibold px-6 py-3 rounded-full hover:bg-[#166534] transition-colors"
            >
              Create your first deal
              <ArrowRight size={16} className="group-hover:translate-x-0.5 transition-transform" />
            </Link>
            <a
              href="https://wa.me/15551878900?text=Hi"
              className="inline-flex items-center justify-center gap-2 border border-[#111827]/15 text-[#111827]/75 px-6 py-3 rounded-full hover:bg-[#111827]/[0.04] transition-all"
            >
              Try on WhatsApp
            </a>
          </div>
        </FadeUp>
      </section>
    </>
  );
}
