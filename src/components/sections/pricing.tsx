"use client";

import { motion } from "framer-motion";
import { CheckCircle2, ArrowRight } from "lucide-react";
import Link from "next/link";
import { FadeUp, StaggerGroup, StaggerItem } from "@/components/ui/fade-up";

const sellerPerks = [
  "Unlimited deals — no cap",
  "Instant payment confirmation",
  "Auto-release protection",
  "Priority dispute support",
  "Verified seller badge",
  "Reputation score system",
];

const buyerPerks = [
  "Pay the exact deal amount",
  "Zero processing fees",
  "Full refund if seller fails",
  "AI-powered dispute review",
  "WhatsApp-native experience",
  "Diaspora buyer support",
];

export default function PricingSection() {
  return (
    <section className="bg-white py-12 md:py-24 flex items-center">
      <div className="w-full mx-auto max-w-5xl px-6">
        <FadeUp className="max-w-xl">
          <span className="text-sm font-semibold text-[#166534] uppercase tracking-widest">
            Transparent pricing
          </span>
          <h2 className="mt-3 text-3xl md:text-4xl font-bold tracking-tight text-[#111827]">
            Simple. Honest. No surprises.
          </h2>
          <p className="mt-4 text-[#111827]/60 leading-relaxed">
            No monthly subscriptions. No setup fees. Pay only when a deal
            completes — and only if you&apos;re the seller.
          </p>
        </FadeUp>

        <StaggerGroup className="mt-14 grid gap-6 md:grid-cols-2">
          {/* Buyer card */}
          <StaggerItem>
            <motion.div
              whileHover={{ y: -4 }}
              transition={{ duration: 0.22, ease: "easeOut" }}
              className="rounded-2xl border border-[#111827]/10 bg-white p-8 h-full flex flex-col shadow-sm"
            >
              <div className="mb-6">
                <span className="text-xs font-semibold text-[#166534] uppercase tracking-widest">
                  For Buyers
                </span>
                <div className="mt-3 flex items-end gap-2">
                  <span className="text-5xl font-bold text-[#111827]">Free</span>
                </div>
                <p className="mt-2 text-sm text-[#111827]/60">
                  Pay the exact deal amount. Nothing extra, ever.
                </p>
              </div>

              <ul className="space-y-3 flex-1">
                {buyerPerks.map((perk) => (
                  <li
                    key={perk}
                    className="flex items-center gap-3 text-sm text-[#111827]/75"
                  >
                    <CheckCircle2 size={15} className="shrink-0 text-[#22C55E]" />
                    {perk}
                  </li>
                ))}
              </ul>

              <Link
                href="/signup"
                className="mt-8 inline-flex items-center justify-center gap-2 border border-[#111827]/20 text-[#111827] font-semibold px-6 py-3 rounded-full hover:bg-[#111827]/[0.04] transition-colors text-sm"
              >
                Start buying safely
              </Link>
            </motion.div>
          </StaggerItem>

          {/* Seller card — deep forest green, the ONE rich dark element */}
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
              <div className="pointer-events-none absolute -bottom-16 -right-16 h-48 w-48 rounded-full bg-white/[0.07]" />

              <div className="mb-6 relative">
                <span className="text-xs font-semibold text-white/60 uppercase tracking-widest">
                  For Sellers
                </span>
                <div className="mt-3 flex items-end gap-2">
                  <span className="text-5xl font-bold text-white">5%</span>
                  <span className="text-white/60 text-sm mb-2">per deal</span>
                </div>
                <p className="mt-2 text-sm text-white/70">
                  Deducted only at payout. Not before.
                </p>
              </div>

              <ul className="space-y-3 flex-1 relative">
                {sellerPerks.map((perk) => (
                  <li
                    key={perk}
                    className="flex items-center gap-3 text-sm text-white/90"
                  >
                    <CheckCircle2 size={15} className="shrink-0 text-[#22C55E]" />
                    {perk}
                  </li>
                ))}
              </ul>

              <Link
                href="/signup"
                className="btn-shimmer relative mt-8 inline-flex items-center justify-center gap-2 bg-[#22C55E] text-white font-semibold px-6 py-3 rounded-full hover:bg-[#166534] transition-colors text-sm"
              >
                Start selling safely
                <ArrowRight size={15} />
              </Link>
            </motion.div>
          </StaggerItem>
        </StaggerGroup>

        <FadeUp className="mt-10 text-center">
          <p className="text-sm text-[#111827]/40">
            Min deal ₦1,000 &nbsp;·&nbsp; No maximum cap &nbsp;·&nbsp; No
            monthly fees. Ever.
          </p>
        </FadeUp>
      </div>
    </section>
  );
}
