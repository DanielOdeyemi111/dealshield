"use client";

import Link from "next/link";
import { ArrowRight, ShoppingBag, Store } from "lucide-react";
import { FadeUp } from "@/components/ui/fade-up";
import { motion } from "framer-motion";

export default function CtaSection() {
  return (
    <section className="py-16 md:py-24" style={{ background: "#BDEECF" }}>
      <div className="w-full mx-auto max-w-4xl px-6 text-center">
        <FadeUp>
          <span className="text-sm font-semibold text-[#166534] uppercase tracking-widest">
            Get started free
          </span>
          <h2 className="mt-4 text-3xl md:text-4xl font-bold tracking-tight text-[#111827]">
            Are you buying or selling?
          </h2>
          <p className="mt-4 text-[#111827]/55">
            Either way — Deal Shield protects you. No monthly fee. Every deal.
          </p>
        </FadeUp>

        <div className="mt-10 grid sm:grid-cols-2 gap-5 max-w-2xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1, duration: 0.5 }}
            whileHover={{ y: -4, boxShadow: "0 16px 40px rgba(20,83,45,0.15)" }}
            className="rounded-2xl bg-[#14532D] p-8 flex flex-col items-center text-center"
          >
            <div className="h-14 w-14 rounded-2xl bg-white/10 flex items-center justify-center mb-5">
              <Store size={24} className="text-white" />
            </div>
            <h3 className="text-xl font-bold text-white">I want to sell</h3>
            <p className="mt-2 text-sm text-white/60 leading-relaxed">
              Create a free storefront on the Deal Shield marketplace. List your products or services. Every order is automatically escrow-protected.
            </p>
            <Link
              href="/signup"
              className="mt-6 btn-shimmer group inline-flex items-center gap-2 bg-white text-[#14532D] font-semibold px-6 py-3 rounded-full hover:bg-[#22C55E] hover:text-white transition-colors"
            >
              Start selling free
              <ArrowRight size={15} className="transition-transform group-hover:translate-x-0.5" />
            </Link>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.5 }}
            whileHover={{ y: -4, boxShadow: "0 16px 40px rgba(34,197,94,0.12)" }}
            className="rounded-2xl bg-white border border-[#111827]/10 p-8 flex flex-col items-center text-center shadow-sm"
          >
            <div className="h-14 w-14 rounded-2xl bg-[#22C55E]/10 flex items-center justify-center mb-5">
              <ShoppingBag size={24} className="text-[#166534]" />
            </div>
            <h3 className="text-xl font-bold text-[#111827]">I want to buy</h3>
            <p className="mt-2 text-sm text-[#111827]/60 leading-relaxed">
              Browse thousands of verified listings. Pay with escrow protection on every order — funds only release when you confirm you&apos;re happy.
            </p>
            <Link
              href="/signup"
              className="mt-6 group inline-flex items-center gap-2 bg-[#22C55E] text-white font-semibold px-6 py-3 rounded-full hover:bg-[#166534] transition-colors"
            >
              Browse marketplace
              <ArrowRight size={15} className="transition-transform group-hover:translate-x-0.5" />
            </Link>
          </motion.div>
        </div>

        <FadeUp delay={0.3}>
          <p className="mt-8 text-sm text-[#111827]/40">
            Already on WhatsApp?{" "}
            <a href="https://wa.me/" className="text-[#166534] font-medium underline underline-offset-2 hover:text-[#14532D]">
              Trade directly via WhatsApp
            </a>
          </p>
        </FadeUp>
      </div>
    </section>
  );
}
