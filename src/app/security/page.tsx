"use client";

import Link from "next/link";
import { ArrowRight, Shield, Lock, Zap, Users, RefreshCw, Eye } from "lucide-react";
import { FadeUp, StaggerGroup, StaggerItem } from "@/components/ui/fade-up";
import { motion } from "framer-motion";

const pillars = [
  {
    icon: Shield,
    title: "Paystack escrow",
    body: "All funds are held in a regulated Paystack escrow account — not a personal account, not ours. Paystack is CBN-regulated and processes billions in transactions annually.",
  },
  {
    icon: Lock,
    title: "256-bit SSL encryption",
    body: "Every transaction and message on Deal Shield is encrypted end-to-end. Your personal details, payment info, and deal data are never exposed.",
  },
  {
    icon: Eye,
    title: "Zero access to funds",
    body: "Deal Shield staff cannot access or move your funds. Only the agreed conditions (buyer confirmation or timeout) trigger a release — not a human override.",
  },
  {
    icon: RefreshCw,
    title: "Auto-release on timeout",
    body: "If a buyer doesn't confirm within the agreed window, funds are released automatically to the seller. No manual intervention, no waiting for someone to log in.",
  },
  {
    icon: Zap,
    title: "Instant payment confirmation",
    body: "Paystack's payment infrastructure confirms funds in real time. The seller sees a verified payment — not a screenshot, not a promise. This eliminates fake alerts entirely.",
  },
  {
    icon: Users,
    title: "AI-guided dispute resolution",
    body: "Our AI reviews deal agreements and submitted evidence from both parties, flags inconsistencies, and guides a fair resolution — typically within 24 hours.",
  },
];

const disputeSteps = [
  {
    n: "1",
    title: "Buyer raises a dispute",
    body: "The buyer taps 'Dispute' within the deal window and submits their reason and evidence (photos, messages, receipts).",
  },
  {
    n: "2",
    title: "Seller responds",
    body: "The seller is notified and given time to respond with counter-evidence. Funds remain locked during this period.",
  },
  {
    n: "3",
    title: "AI reviews both sides",
    body: "Our AI analyses the deal agreement, both parties' evidence, and relevant precedents. It highlights the key facts for our human team.",
  },
  {
    n: "4",
    title: "Binding decision issued",
    body: "Our team issues a binding decision — typically within 24 hours. Funds are released to whichever party is found to be in the right.",
  },
];

export default function SecurityPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-white py-20 border-b border-[#111827]/[0.07]">
        <div className="mx-auto max-w-3xl px-6 text-center">
          <FadeUp>
            <span className="text-sm font-semibold text-[#166534] uppercase tracking-widest">
              Security
            </span>
            <h1 className="mt-3 text-4xl md:text-5xl font-bold tracking-tight text-[#111827]">
              Bank-grade protection
              <br />
              <span className="text-[#22C55E]">on every deal.</span>
            </h1>
            <p className="mt-5 text-lg text-[#111827]/60 leading-relaxed">
              Deal Shield is built on regulated financial infrastructure. Your money is safe from the moment it&apos;s paid in, to the moment it&apos;s released.
            </p>
          </FadeUp>
        </div>
      </section>

      {/* Pillars */}
      <section className="py-10 md:py-20" style={{ background: "#BDEECF" }}>
        <div className="mx-auto max-w-5xl px-6">
          <FadeUp className="max-w-xl mb-12">
            <span className="text-sm font-semibold text-[#166534] uppercase tracking-widest">
              How we protect you
            </span>
            <h2 className="mt-3 text-3xl font-bold text-[#111827]">Six layers of protection</h2>
          </FadeUp>
          <StaggerGroup className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {pillars.map((p) => (
              <StaggerItem key={p.title}>
                <motion.div
                  whileHover={{ y: -4 }}
                  transition={{ duration: 0.2, ease: "easeOut" }}
                  className="rounded-2xl bg-white border border-[#111827]/10 p-6 h-full shadow-sm"
                >
                  <span className="inline-flex h-11 w-11 items-center justify-center rounded-xl bg-[#22C55E]/10 text-[#14532D] mb-4">
                    <p.icon size={20} />
                  </span>
                  <h3 className="font-semibold text-[#111827] mb-2">{p.title}</h3>
                  <p className="text-sm text-[#111827]/60 leading-relaxed">{p.body}</p>
                </motion.div>
              </StaggerItem>
            ))}
          </StaggerGroup>
        </div>
      </section>

      {/* Dispute resolution process */}
      <section className="bg-white py-20">
        <div className="mx-auto max-w-3xl px-6">
          <FadeUp className="text-center mb-14">
            <span className="text-sm font-semibold text-[#166534] uppercase tracking-widest">
              Dispute resolution
            </span>
            <h2 className="mt-3 text-3xl font-bold text-[#111827]">
              A fair process. Every time.
            </h2>
            <p className="mt-3 text-[#111827]/60">
              If something goes wrong, here&apos;s exactly what happens.
            </p>
          </FadeUp>
          <div className="space-y-6">
            {disputeSteps.map((s) => (
              <FadeUp key={s.n}>
                <div className="flex gap-5 items-start rounded-2xl border border-[#111827]/10 bg-white p-6 shadow-sm">
                  <div className="shrink-0 h-9 w-9 rounded-full bg-[#22C55E]/10 text-[#14532D] font-bold text-sm flex items-center justify-center">
                    {s.n}
                  </div>
                  <div>
                    <h3 className="font-semibold text-[#111827]">{s.title}</h3>
                    <p className="mt-1 text-sm text-[#111827]/60 leading-relaxed">{s.body}</p>
                  </div>
                </div>
              </FadeUp>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-10 md:py-20" style={{ background: "#BDEECF" }}>
        <FadeUp className="mx-auto max-w-2xl px-6 text-center">
          <h2 className="text-3xl font-bold text-[#111827]">Trade with total confidence.</h2>
          <p className="mt-3 text-[#111827]/60">Every deal is protected from first payment to final release.</p>
          <Link
            href="/signup"
            className="btn-shimmer group mt-8 inline-flex items-center gap-2 bg-[#22C55E] text-white font-semibold px-6 py-3 rounded-full hover:bg-[#166534] transition-colors"
          >
            Start trading safely
            <ArrowRight size={16} className="group-hover:translate-x-0.5 transition-transform" />
          </Link>
        </FadeUp>
      </section>
    </>
  );
}
