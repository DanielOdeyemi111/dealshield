"use client";

import Link from "next/link";
import { ArrowRight, LayoutDashboard, Bot, Layers, Globe, Star, Zap, Shield, MessageSquare } from "lucide-react";
import { FadeUp, StaggerGroup, StaggerItem } from "@/components/ui/fade-up";
import { motion } from "framer-motion";

const features = [
  {
    icon: LayoutDashboard,
    title: "Real-time dashboard",
    body: "Log in and see every active deal — funds locked, timeline, delivery status, and history. Not a bot to trust blindly. A real platform you can verify.",
  },
  {
    icon: MessageSquare,
    title: "WhatsApp-native",
    body: "No app to download. Run an entire deal — create, pay, confirm, dispute — directly from WhatsApp. Everything syncs with the web dashboard too.",
  },
  {
    icon: Bot,
    title: "AI dispute resolution",
    body: "Our AI reviews your deal agreement, flags vague terms before you pay, and guides both parties through disputes 24/7. Average resolution: 24 hours.",
  },
  {
    icon: Layers,
    title: "Every deal type",
    body: "Physical goods, digital downloads, services, and milestone-based projects. Split large deals into payment stages so you pay as work is completed.",
  },
  {
    icon: Zap,
    title: "Instant auto-release",
    body: "If a buyer doesn't respond within the agreed window, funds release automatically. Sellers are never left chasing confirmation for days.",
  },
  {
    icon: Globe,
    title: "Diaspora support",
    body: "Buyers in the UK, US, Canada, and Europe can purchase from African sellers with the same escrow protection. Cross-border, zero complexity.",
  },
  {
    icon: Star,
    title: "Reputation scores",
    body: "Every completed deal builds your verified score. Share it as social proof — buyers trust sellers with a track record far faster than those without one.",
  },
  {
    icon: Shield,
    title: "Paystack-secured funds",
    body: "All payments flow through Paystack's regulated escrow infrastructure. Funds never touch our hands until both sides agree — or a dispute is resolved.",
  },
];

const comparison = [
  { feature: "Funds held in escrow", dealShield: true, whatsapp: false, bankTransfer: false },
  { feature: "Fake alert prevention", dealShield: true, whatsapp: false, bankTransfer: false },
  { feature: "Dispute resolution", dealShield: true, whatsapp: false, bankTransfer: false },
  { feature: "Works on WhatsApp", dealShield: true, whatsapp: true, bankTransfer: false },
  { feature: "Milestone payments", dealShield: true, whatsapp: false, bankTransfer: false },
  { feature: "Auto-release protection", dealShield: true, whatsapp: false, bankTransfer: false },
  { feature: "Reputation score", dealShield: true, whatsapp: false, bankTransfer: false },
  { feature: "Diaspora buyer support", dealShield: true, whatsapp: false, bankTransfer: false },
];

export default function FeaturesPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-white py-20 border-b border-[#111827]/[0.07]">
        <div className="mx-auto max-w-3xl px-6 text-center">
          <FadeUp>
            <span className="text-sm font-semibold text-[#166534] uppercase tracking-widest">
              Features
            </span>
            <h1 className="mt-3 text-4xl md:text-5xl font-bold tracking-tight text-[#111827]">
              Everything you need
              <br />
              <span className="text-[#22C55E]">to trade without fear.</span>
            </h1>
            <p className="mt-5 text-lg text-[#111827]/60 leading-relaxed">
              Deal Shield isn&apos;t just an escrow bot. It&apos;s a full trading infrastructure built for the realities of African commerce.
            </p>
          </FadeUp>
        </div>
      </section>

      {/* Feature grid */}
      <section className="py-10 md:py-20" style={{ background: "#BDEECF" }}>
        <div className="mx-auto max-w-6xl px-6">
          <StaggerGroup className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {features.map((f) => (
              <StaggerItem key={f.title}>
                <motion.div
                  whileHover={{ y: -4 }}
                  transition={{ duration: 0.2, ease: "easeOut" }}
                  className="rounded-2xl bg-white border border-[#111827]/10 p-6 h-full shadow-sm"
                >
                  <span className="inline-flex h-11 w-11 items-center justify-center rounded-xl bg-[#22C55E]/10 text-[#14532D] mb-4">
                    <f.icon size={20} />
                  </span>
                  <h3 className="font-semibold text-[#111827] mb-2">{f.title}</h3>
                  <p className="text-sm text-[#111827]/60 leading-relaxed">{f.body}</p>
                </motion.div>
              </StaggerItem>
            ))}
          </StaggerGroup>
        </div>
      </section>

      {/* Comparison table */}
      <section className="bg-white py-20">
        <div className="mx-auto max-w-3xl px-6">
          <FadeUp className="text-center mb-12">
            <span className="text-sm font-semibold text-[#166534] uppercase tracking-widest">
              How we compare
            </span>
            <h2 className="mt-3 text-3xl font-bold text-[#111827]">
              Deal Shield vs. the alternatives
            </h2>
          </FadeUp>
          <FadeUp>
            <div className="overflow-x-auto rounded-2xl border border-[#111827]/10 shadow-sm">
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b border-[#111827]/10">
                    <th className="text-left p-4 font-semibold text-[#111827]">Feature</th>
                    <th className="p-4 font-semibold text-[#14532D] text-center">Deal Shield</th>
                    <th className="p-4 font-medium text-[#111827]/50 text-center">WhatsApp only</th>
                    <th className="p-4 font-medium text-[#111827]/50 text-center">Bank transfer</th>
                  </tr>
                </thead>
                <tbody>
                  {comparison.map((row, i) => (
                    <tr
                      key={row.feature}
                      className={i % 2 === 0 ? "bg-white" : "bg-[#22C55E]/[0.03]"}
                    >
                      <td className="p-4 text-[#111827]/70">{row.feature}</td>
                      <td className="p-4 text-center">
                        {row.dealShield ? (
                          <span className="text-[#22C55E] font-bold text-base">✓</span>
                        ) : (
                          <span className="text-[#111827]/25">—</span>
                        )}
                      </td>
                      <td className="p-4 text-center">
                        {row.whatsapp ? (
                          <span className="text-[#22C55E] font-bold text-base">✓</span>
                        ) : (
                          <span className="text-[#111827]/25">—</span>
                        )}
                      </td>
                      <td className="p-4 text-center">
                        {row.bankTransfer ? (
                          <span className="text-[#22C55E] font-bold text-base">✓</span>
                        ) : (
                          <span className="text-[#111827]/25">—</span>
                        )}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </FadeUp>
        </div>
      </section>

      {/* CTA */}
      <section className="py-10 md:py-20" style={{ background: "#BDEECF" }}>
        <FadeUp className="mx-auto max-w-2xl px-6 text-center">
          <h2 className="text-3xl font-bold text-[#111827]">Start trading with protection.</h2>
          <p className="mt-3 text-[#111827]/60">Free for buyers. 5% for sellers, deducted at payout.</p>
          <Link
            href="/signup"
            className="btn-shimmer group mt-8 inline-flex items-center gap-2 bg-[#22C55E] text-white font-semibold px-6 py-3 rounded-full hover:bg-[#166534] transition-colors"
          >
            Get started free
            <ArrowRight size={16} className="group-hover:translate-x-0.5 transition-transform" />
          </Link>
        </FadeUp>
      </section>
    </>
  );
}
