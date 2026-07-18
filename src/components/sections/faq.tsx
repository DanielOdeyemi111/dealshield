"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus } from "lucide-react";
import { FadeUp, StaggerGroup, StaggerItem } from "@/components/ui/fade-up";

const faqs = [
  {
    q: "Where is my money held?",
    a: "Your funds are held in a Paystack-secured escrow account and released to the seller only after you confirm delivery, or automatically after the agreed deadline.",
  },
  {
    q: "What if the seller doesn't deliver?",
    a: "You can raise a dispute within the deal window. Our AI and team review evidence from both sides and issue a binding decision — funds can be fully refunded.",
  },
  {
    q: "Do I need to create an account?",
    a: "No — you can create and join deals entirely through WhatsApp with no signup. Create a web account if you want a dashboard to manage multiple deals.",
  },
  {
    q: "What payment methods are accepted?",
    a: "We accept bank transfers and debit/credit cards via Paystack, which eliminates fake payment screenshots common in WhatsApp-only trades.",
  },
  {
    q: "Is there a transaction size limit?",
    a: "Minimum deal size is ₦1,000. There's no maximum — contact us for deals above ₦10M and we'll handle it personally.",
  },
];

function FaqItem({ q, a }: { q: string; a: string }) {
  const [open, setOpen] = useState(false);

  return (
    <div className="border-b border-[#111827]/10">
      <button
        onClick={() => setOpen((v) => !v)}
        className="w-full flex items-center justify-between gap-4 py-6 text-left"
      >
        <span className="font-medium text-[#111827]">{q}</span>
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
            transition={{ duration: 0.28, ease: "easeInOut" }}
            className="overflow-hidden"
          >
            <p className="pb-6 text-sm text-[#111827]/60 leading-relaxed">{a}</p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default function FaqSection() {
  return (
    <section className="py-12 md:py-24 bg-white">
      <div className="w-full mx-auto max-w-3xl px-6">
        <FadeUp className="text-center">
          <span className="text-sm font-semibold text-[#166534] uppercase tracking-widest">
            Got questions?
          </span>
          <h2 className="mt-3 text-3xl md:text-4xl font-bold tracking-tight text-[#111827]">
            Frequently asked questions
          </h2>
        </FadeUp>

        <StaggerGroup className="mt-12">
          {faqs.map((f) => (
            <StaggerItem key={f.q}>
              <FaqItem q={f.q} a={f.a} />
            </StaggerItem>
          ))}
        </StaggerGroup>
      </div>
    </section>
  );
}
