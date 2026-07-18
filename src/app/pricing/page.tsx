"use client";

import Link from "next/link";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import { FadeUp, StaggerGroup, StaggerItem } from "@/components/ui/fade-up";
import { motion } from "framer-motion";

const buyerPerks = [
  "Pay the exact deal amount — nothing extra",
  "Full refund if seller fails to deliver",
  "AI-powered dispute review",
  "WhatsApp-native experience",
  "Works for diaspora buyers worldwide",
  "Verified payment confirmation (no fake alerts)",
];

const sellerPerks = [
  "Unlimited deals — no monthly cap",
  "Instant payment confirmation",
  "Auto-release when buyer is unresponsive",
  "Priority dispute support",
  "Verified seller badge on your profile",
  "Reputation score builds with every deal",
];

const faqs = [
  {
    q: "When exactly is the 5% deducted?",
    a: "Only at payout — when funds are released to you after a successful deal. Nothing is charged upfront or when a deal is created.",
  },
  {
    q: "What if a deal is disputed and refunded?",
    a: "If a dispute results in a full refund to the buyer, the seller's 5% fee is waived. You only pay when a deal completes in your favour.",
  },
  {
    q: "Is there a minimum deal size?",
    a: "The minimum deal size is ₦1,000. There is no maximum — for deals above ₦10M, contact us and we'll handle it personally.",
  },
  {
    q: "Are there any other charges?",
    a: "No. No setup fee, no monthly subscription, no withdrawal fee. The 5% seller fee is the only charge on the platform.",
  },
  {
    q: "Can buyers from outside Africa use Deal Shield?",
    a: "Yes. Diaspora buyers in the UK, US, Canada, and other countries can pay via card or international transfer at no extra cost to them.",
  },
];

export default function PricingPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-white py-20 border-b border-[#111827]/[0.07]">
        <div className="mx-auto max-w-3xl px-6 text-center">
          <FadeUp>
            <span className="text-sm font-semibold text-[#166534] uppercase tracking-widest">
              Pricing
            </span>
            <h1 className="mt-3 text-4xl md:text-5xl font-bold tracking-tight text-[#111827]">
              Simple. Honest.
              <br />
              <span className="text-[#22C55E]">No surprises.</span>
            </h1>
            <p className="mt-5 text-lg text-[#111827]/60 leading-relaxed">
              No subscriptions. No setup fees. Buyers always pay free.
              Sellers pay 5% — only when a deal completes.
            </p>
          </FadeUp>
        </div>
      </section>

      {/* Pricing cards */}
      <section className="py-10 md:py-20" style={{ background: "#BDEECF" }}>
        <div className="mx-auto max-w-4xl px-6">
          <StaggerGroup className="grid gap-6 md:grid-cols-2">
            {/* Buyer */}
            <StaggerItem>
              <motion.div
                whileHover={{ y: -4 }}
                transition={{ duration: 0.22, ease: "easeOut" }}
                className="rounded-2xl bg-white border border-[#111827]/10 p-8 h-full flex flex-col shadow-sm"
              >
                <span className="text-xs font-semibold text-[#166534] uppercase tracking-widest">For Buyers</span>
                <div className="mt-4 mb-2">
                  <span className="text-5xl font-bold text-[#111827]">Free</span>
                </div>
                <p className="text-sm text-[#111827]/60 mb-8">
                  Pay exactly the deal amount. Zero extra charges, ever.
                </p>
                <ul className="space-y-3 flex-1 mb-8">
                  {buyerPerks.map((p) => (
                    <li key={p} className="flex items-center gap-3 text-sm text-[#111827]/75">
                      <CheckCircle2 size={15} className="shrink-0 text-[#22C55E]" />
                      {p}
                    </li>
                  ))}
                </ul>
                <Link
                  href="/signup"
                  className="inline-flex items-center justify-center border border-[#111827]/20 text-[#111827] font-semibold px-6 py-3 rounded-full hover:bg-[#111827]/[0.04] transition-colors text-sm"
                >
                  Start buying safely
                </Link>
              </motion.div>
            </StaggerItem>

            {/* Seller */}
            <StaggerItem>
              <motion.div
                whileHover={{ y: -4 }}
                transition={{ duration: 0.22, ease: "easeOut" }}
                className="rounded-2xl p-8 h-full flex flex-col relative overflow-hidden text-white"
                style={{ background: "#14532D" }}
              >
                <div className="absolute top-5 right-5 text-[10px] font-bold bg-white/15 text-white px-2.5 py-1 rounded-full uppercase tracking-widest">
                  Most used
                </div>
                <div className="pointer-events-none absolute -bottom-16 -right-16 h-48 w-48 rounded-full bg-white/[0.06]" />
                <span className="text-xs font-semibold text-white/60 uppercase tracking-widest">For Sellers</span>
                <div className="mt-4 mb-2 flex items-end gap-2">
                  <span className="text-5xl font-bold text-white">5%</span>
                  <span className="text-white/60 text-sm mb-2">per deal</span>
                </div>
                <p className="text-sm text-white/70 mb-8">
                  Deducted only at payout — not upfront, not on creation.
                </p>
                <ul className="space-y-3 flex-1 mb-8">
                  {sellerPerks.map((p) => (
                    <li key={p} className="flex items-center gap-3 text-sm text-white/90">
                      <CheckCircle2 size={15} className="shrink-0 text-[#22C55E]" />
                      {p}
                    </li>
                  ))}
                </ul>
                <Link
                  href="/signup"
                  className="btn-shimmer inline-flex items-center justify-center gap-2 bg-[#22C55E] text-white font-semibold px-6 py-3 rounded-full hover:bg-[#166534] transition-colors text-sm"
                >
                  Start selling safely
                  <ArrowRight size={15} />
                </Link>
              </motion.div>
            </StaggerItem>
          </StaggerGroup>

          <FadeUp className="mt-8 text-center">
            <p className="text-sm text-[#111827]/50">
              Min deal ₦1,000 &nbsp;·&nbsp; No maximum cap &nbsp;·&nbsp; No monthly fees. Ever.
            </p>
          </FadeUp>
        </div>
      </section>

      {/* FAQ */}
      <section className="bg-white py-20">
        <div className="mx-auto max-w-2xl px-6">
          <FadeUp className="text-center mb-12">
            <h2 className="text-3xl font-bold text-[#111827]">Pricing questions</h2>
          </FadeUp>
          <div className="space-y-4">
            {faqs.map((f) => (
              <FadeUp key={f.q}>
                <div className="rounded-2xl border border-[#111827]/10 bg-white p-6 shadow-sm">
                  <h3 className="font-semibold text-[#111827] mb-2">{f.q}</h3>
                  <p className="text-sm text-[#111827]/60 leading-relaxed">{f.a}</p>
                </div>
              </FadeUp>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
