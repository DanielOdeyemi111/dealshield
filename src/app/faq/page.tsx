"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { Plus, ArrowRight } from "lucide-react";
import { FadeUp, StaggerGroup, StaggerItem } from "@/components/ui/fade-up";

const categories = [
  {
    label: "Getting started",
    faqs: [
      {
        q: "Do I need to create an account?",
        a: "No — you can create and join deals entirely through WhatsApp with no signup. Create a web account if you want a dashboard to manage multiple deals and see your history.",
      },
      {
        q: "How do I create my first deal?",
        a: "On the web, click 'Get started free' and follow the steps. On WhatsApp, message our bot and type 'new deal'. You'll be guided through setting the item, amount, and delivery window.",
      },
      {
        q: "Does the other party need an account?",
        a: "No. You send them a deal link or WhatsApp invite. They can join and pay (or confirm) without registering — the escrow protects both sides regardless.",
      },
    ],
  },
  {
    label: "Payments",
    faqs: [
      {
        q: "What payment methods are accepted?",
        a: "Bank transfers and debit/credit cards via Paystack. This is what eliminates fake payment screenshots — payment is verified in real time before the seller sees it.",
      },
      {
        q: "Where is my money held?",
        a: "Funds are held in a Paystack-secured escrow account regulated by the CBN. They are released to the seller only after you confirm delivery, or automatically after the agreed deadline.",
      },
      {
        q: "Can diaspora buyers use Deal Shield?",
        a: "Yes. Buyers in the UK, US, Canada, Europe, and other countries can pay via international card or transfer at no extra cost. The escrow protection is identical.",
      },
      {
        q: "Is there a minimum or maximum deal size?",
        a: "Minimum is ₦1,000. There's no maximum — contact us for deals above ₦10M and we'll handle it personally.",
      },
    ],
  },
  {
    label: "Disputes",
    faqs: [
      {
        q: "What if the seller doesn't deliver?",
        a: "Raise a dispute within the deal window. Our AI and team review evidence from both sides and issue a binding decision. Funds can be fully refunded if the seller is at fault.",
      },
      {
        q: "What if the item isn't as described?",
        a: "Submit photos, messages, and any relevant evidence when raising the dispute. Our AI compares this against the original deal agreement and guides a fair resolution.",
      },
      {
        q: "How long does a dispute take?",
        a: "Most disputes are resolved within 24 hours. Complex cases involving physical evidence may take slightly longer. Funds remain locked throughout the process.",
      },
      {
        q: "Can a dispute decision be appealed?",
        a: "Yes. If you believe the decision was unfair, you can request a secondary review from our senior team within 48 hours of the initial ruling.",
      },
    ],
  },
  {
    label: "Sellers",
    faqs: [
      {
        q: "How much does it cost to sell?",
        a: "5% per completed deal, deducted at payout. No monthly fee, no setup cost, no charge for creating deals. You only pay when you successfully complete a transaction.",
      },
      {
        q: "When are funds released to me?",
        a: "Immediately after the buyer confirms delivery. If the buyer doesn't respond within the agreed window, funds auto-release to you — no waiting, no chasing.",
      },
      {
        q: "Can I run multiple deals at once?",
        a: "Yes, unlimited. Your dashboard shows all active deals with their status, amounts, and timelines. No cap on concurrent deals.",
      },
    ],
  },
];

function FaqItem({ q, a }: { q: string; a: string }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="border-b border-[#111827]/10 last:border-0">
      <button
        onClick={() => setOpen((v) => !v)}
        className="w-full flex items-center justify-between gap-4 py-5 text-left"
      >
        <span className="font-medium text-[#111827] text-sm">{q}</span>
        <motion.span
          animate={{ rotate: open ? 45 : 0 }}
          transition={{ duration: 0.2 }}
          className="shrink-0 text-[#166534]"
        >
          <Plus size={18} />
        </motion.span>
      </button>
      <AnimatePresence initial={false}>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.25, ease: "easeInOut" }}
            className="overflow-hidden"
          >
            <p className="pb-5 text-sm text-[#111827]/60 leading-relaxed">{a}</p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default function FaqPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-white py-20 border-b border-[#111827]/[0.07]">
        <div className="mx-auto max-w-3xl px-6 text-center">
          <FadeUp>
            <span className="text-sm font-semibold text-[#166534] uppercase tracking-widest">
              FAQ
            </span>
            <h1 className="mt-3 text-4xl md:text-5xl font-bold tracking-tight text-[#111827]">
              Questions answered.
            </h1>
            <p className="mt-5 text-lg text-[#111827]/60">
              Everything you need to know about Deal Shield. Can&apos;t find what you&apos;re looking for?{" "}
              <Link href="/contact" className="text-[#14532D] underline underline-offset-2 hover:text-[#22C55E] transition-colors">
                Contact us.
              </Link>
            </p>
          </FadeUp>
        </div>
      </section>

      {/* FAQ categories */}
      <section className="bg-white py-16">
        <div className="mx-auto max-w-3xl px-6 space-y-14">
          {categories.map((cat) => (
            <FadeUp key={cat.label}>
              <h2 className="text-lg font-bold text-[#111827] mb-2 pb-3 border-b border-[#22C55E]/30">
                {cat.label}
              </h2>
              <div className="divide-y divide-[#111827]/10">
                {cat.faqs.map((f) => (
                  <FaqItem key={f.q} q={f.q} a={f.a} />
                ))}
              </div>
            </FadeUp>
          ))}
        </div>
      </section>

      {/* Still need help */}
      <section className="py-10 md:py-20" style={{ background: "#BDEECF" }}>
        <FadeUp className="mx-auto max-w-2xl px-6 text-center">
          <h2 className="text-2xl font-bold text-[#111827]">Still have questions?</h2>
          <p className="mt-3 text-[#111827]/60">
            Our team is available via WhatsApp or email and typically responds within an hour.
          </p>
          <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="btn-shimmer group inline-flex items-center gap-2 bg-[#22C55E] text-white font-semibold px-6 py-3 rounded-full hover:bg-[#166534] transition-colors"
            >
              Contact us
              <ArrowRight size={16} className="group-hover:translate-x-0.5 transition-transform" />
            </Link>
            <a
              href="https://wa.me/"
              className="inline-flex items-center justify-center border border-[#111827]/20 text-[#111827]/75 px-6 py-3 rounded-full hover:bg-[#111827]/[0.04] transition-all"
            >
              WhatsApp us
            </a>
          </div>
        </FadeUp>
      </section>
    </>
  );
}
