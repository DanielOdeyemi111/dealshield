"use client";

import { FadeUp, StaggerGroup, StaggerItem } from "@/components/ui/fade-up";
import { motion } from "framer-motion";

const testimonials = [
  {
    quote: "I listed my laptops on Deal Shield and buyers started coming to me. The escrow builds so much trust — I don't even have to convince anyone anymore. Sales doubled in a month.",
    name: "Tobi A.",
    role: "Laptop seller, Lagos",
    tag: "Seller",
  },
  {
    quote: "I found a designer on the marketplace and paid into escrow. She delivered on time knowing the funds were real. This is how freelancing should work.",
    name: "Ngozi M.",
    role: "Business owner, Abuja",
    tag: "Buyer",
  },
  {
    quote: "Bought a phone from someone I'd never met. Paid through Deal Shield, got the item exactly as described, and released the funds. Zero stress. This platform is a game changer.",
    name: "Emmanuel O.",
    role: "Electronics buyer, PH",
    tag: "Buyer",
  },
];

export default function TestimonialsSection() {
  return (
    <section className="py-12 md:py-24 bg-white">
      <div className="w-full mx-auto max-w-6xl px-6">
        <FadeUp className="max-w-xl">
          <span className="text-sm font-semibold text-[#166534] uppercase tracking-widest">
            Testimonials
          </span>
          <h2 className="mt-3 text-3xl md:text-4xl font-bold tracking-tight text-[#111827]">
            Buyers and sellers — both winning.
          </h2>
          <p className="mt-4 text-[#111827]/60">
            8,400+ traders already buying and selling safely on our marketplace every day.
          </p>
        </FadeUp>

        <StaggerGroup className="mt-8 md:mt-14 flex gap-4 overflow-x-auto snap-x snap-mandatory scroll-hide pb-3 -mx-6 px-6 md:grid md:grid-cols-3 md:overflow-visible md:pb-0 md:mx-0 md:px-0 md:gap-6">
          {testimonials.map((t) => (
            <StaggerItem key={t.name} className="snap-start shrink-0 w-[80vw] max-w-[320px] md:w-auto md:max-w-none">
              <motion.div
                whileHover={{ y: -5 }}
                transition={{ duration: 0.25, ease: "easeOut" }}
                className="rounded-2xl border border-[#111827]/10 bg-white p-7 h-full shadow-sm flex flex-col"
              >
                <div className="flex items-center justify-between mb-4">
                  <div className="flex gap-0.5">
                    {[...Array(5)].map((_, i) => (
                      <span key={i} className="text-[#22C55E] text-sm">★</span>
                    ))}
                  </div>
                  <span className={`text-[10px] font-semibold px-2.5 py-1 rounded-full ${
                    t.tag === "Seller"
                      ? "bg-[#14532D]/10 text-[#14532D]"
                      : "bg-[#22C55E]/15 text-[#166534]"
                  }`}>
                    {t.tag}
                  </span>
                </div>
                <p className="text-sm text-[#111827]/70 leading-relaxed flex-1">&ldquo;{t.quote}&rdquo;</p>
                <div className="mt-6 flex items-center gap-3">
                  <span className="h-9 w-9 rounded-full bg-[#22C55E]/15 text-[#14532D] font-semibold text-sm flex items-center justify-center">
                    {t.name.charAt(0)}
                  </span>
                  <div>
                    <div className="text-sm font-semibold text-[#111827]">{t.name}</div>
                    <div className="text-xs text-[#111827]/50">{t.role}</div>
                  </div>
                </div>
              </motion.div>
            </StaggerItem>
          ))}
        </StaggerGroup>
      </div>
    </section>
  );
}
