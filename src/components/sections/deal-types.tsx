"use client";

import { motion } from "framer-motion";
import { FadeUp, StaggerGroup, StaggerItem } from "@/components/ui/fade-up";

const types = [
  {
    emoji: "📱",
    title: "Physical Goods",
    description: "Browse verified listings for phones, gadgets, fashion, cars, and appliances. Buy with escrow — funds release only when item arrives safely.",
    examples: "e.g. iPhones, laptops, cars, clothing",
  },
  {
    emoji: "💾",
    title: "Digital Products",
    description: "Sell templates, courses, game keys, and software on our marketplace. File delivered and verified before payment releases.",
    examples: "e.g. Canva templates, courses, game keys",
  },
  {
    emoji: "🔧",
    title: "Services",
    description: "List your service on our marketplace. Clients discover you, pay upfront into escrow — funds release when work meets the agreed standard.",
    examples: "e.g. Graphics, plumbing, repairs, tutoring",
  },
  {
    emoji: "🏗️",
    title: "Milestone Projects",
    description: "Post large projects and get offers from verified service providers. Fund milestones gradually — pay per stage as each deliverable is completed.",
    examples: "e.g. App builds, construction, long contracts",
  },
];

export default function DealTypesSection() {
  return (
    <section className="py-12 md:py-24" style={{ background: "#BDEECF" }}>
      <div className="w-full mx-auto max-w-6xl px-6">
        <FadeUp className="max-w-xl">
          <span className="text-sm font-semibold text-[#166534] uppercase tracking-widest">
            Marketplace categories
          </span>
          <h2 className="mt-3 text-3xl md:text-4xl font-bold tracking-tight text-[#111827]">
            Browse, buy, or sell anything — safely.
          </h2>
          <p className="mt-4 text-[#111827]/60 leading-relaxed">
            Every category on our marketplace comes with automatic escrow protection. No configuration needed — just list and sell, or browse and buy.
          </p>
        </FadeUp>

        <StaggerGroup className="mt-8 md:mt-14 flex gap-4 overflow-x-auto snap-x snap-mandatory scroll-hide pb-3 -mx-6 px-6 md:grid md:grid-cols-4 md:overflow-visible md:pb-0 md:mx-0 md:px-0 md:gap-6">
          {types.map((t, i) => (
            <StaggerItem key={t.title} className="snap-start shrink-0 w-[72vw] max-w-[260px] md:w-auto md:max-w-none">
              <motion.div
                whileHover={{ y: -5 }}
                transition={{ duration: 0.22, ease: "easeOut" }}
                className="group rounded-2xl border border-[#111827]/10 bg-white p-6 h-full flex flex-col shadow-sm hover:border-[#22C55E]/50 hover:shadow-md transition-all"
              >
                <motion.div
                  animate={{ y: [0, -3, 0] }}
                  transition={{ duration: 3.5, repeat: Infinity, ease: "easeInOut", delay: i * 0.6 }}
                  className="h-12 w-12 rounded-xl bg-[#22C55E]/10 flex items-center justify-center text-2xl mb-5"
                >
                  {t.emoji}
                </motion.div>
                <h3 className="font-semibold text-[#111827] text-base mb-2">{t.title}</h3>
                <p className="text-sm text-[#111827]/60 leading-relaxed flex-1">{t.description}</p>
                <div className="mt-4 text-xs text-[#166534] font-medium">{t.examples}</div>
              </motion.div>
            </StaggerItem>
          ))}
        </StaggerGroup>
      </div>
    </section>
  );
}
