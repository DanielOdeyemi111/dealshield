import Link from "next/link";
import { FadeUp } from "@/components/ui/fade-up";

const sections = [
  {
    title: "1. Acceptance of terms",
    body: "By accessing or using Deal Shield (the 'Platform'), you agree to be bound by these Terms of Service. If you do not agree to these terms, you may not use the Platform. These terms apply to all users, including buyers, sellers, and guests.",
  },
  {
    title: "2. What Deal Shield does",
    body: "Deal Shield provides an escrow service that holds funds on behalf of buyers and releases them to sellers upon confirmed delivery or agreed conditions. Deal Shield is not a party to the underlying transaction and does not guarantee the quality, legality, or delivery of goods or services traded on the Platform.",
  },
  {
    title: "3. User accounts",
    body: "You must provide accurate and complete information when creating an account. You are responsible for maintaining the confidentiality of your login credentials and for all activity under your account. You must be at least 18 years old to use the Platform.",
  },
  {
    title: "4. Escrow and payments",
    body: "All payments are processed through Paystack, a CBN-regulated payment processor. Funds are held in Paystack-secured escrow until release conditions are met. Deal Shield charges a 5% fee on completed deals, deducted from the seller's payout. Buyers are charged the exact deal amount with no additional platform fee.",
  },
  {
    title: "5. Deal creation and terms",
    body: "Users are responsible for the accuracy of deal descriptions and agreed terms. Vague or misleading deal terms may result in disputes being resolved against you. Deal Shield's AI will flag potentially ambiguous terms before a deal is funded.",
  },
  {
    title: "6. Disputes",
    body: "If a dispute arises, both parties must submit evidence within the specified window. Deal Shield's team will review evidence and issue a binding decision. Deal Shield's dispute decisions are final, though secondary reviews may be requested within 48 hours. Repeated bad-faith disputes may result in account suspension.",
  },
  {
    title: "7. Prohibited conduct",
    body: "You may not use Deal Shield to trade illegal goods or services, engage in money laundering, submit fraudulent evidence in a dispute, create fake payment alerts, impersonate another user, or attempt to circumvent the escrow process.",
  },
  {
    title: "8. Limitation of liability",
    body: "Deal Shield's liability is limited to the amount held in escrow for the specific deal in question. Deal Shield is not liable for losses arising from user misconduct, third-party services, force majeure events, or consequential damages of any kind.",
  },
  {
    title: "9. Termination",
    body: "Deal Shield reserves the right to suspend or terminate any account that violates these terms, engages in fraud, or poses a risk to other users — with or without prior notice. Active escrow funds will be handled in accordance with applicable law.",
  },
  {
    title: "10. Changes to these terms",
    body: "Deal Shield may update these Terms of Service from time to time. Continued use of the Platform after changes are posted constitutes acceptance of the updated terms. Material changes will be communicated via email or in-app notification.",
  },
  {
    title: "11. Governing law",
    body: "These terms are governed by the applicable laws of the jurisdiction in which Deal Shield operates. Any disputes arising from these terms shall be subject to the exclusive jurisdiction of applicable courts.",
  },
  {
    title: "12. Contact",
    body: "Questions about these terms? Contact us at legal@dealshield.co or via WhatsApp. We aim to respond within 24 hours.",
  },
];

export default function TermsPage() {
  return (
    <>
      <section className="bg-white py-16 border-b border-[#111827]/[0.07]">
        <div className="mx-auto max-w-3xl px-6">
          <FadeUp>
            <span className="text-sm font-semibold text-[#166534] uppercase tracking-widest">Legal</span>
            <h1 className="mt-3 text-3xl md:text-4xl font-bold text-[#111827]">Terms of Service</h1>
            <p className="mt-3 text-sm text-[#111827]/50">Last updated: July 2026</p>
            <p className="mt-4 text-[#111827]/60 leading-relaxed">
              Please read these terms carefully before using Deal Shield. By creating an account or completing a deal, you agree to the terms below.
            </p>
          </FadeUp>
        </div>
      </section>

      <section className="bg-white py-12">
        <div className="mx-auto max-w-3xl px-6 space-y-8">
          {sections.map((s) => (
            <FadeUp key={s.title}>
              <div>
                <h2 className="text-base font-semibold text-[#111827] mb-2">{s.title}</h2>
                <p className="text-sm text-[#111827]/60 leading-relaxed">{s.body}</p>
              </div>
            </FadeUp>
          ))}
        </div>
      </section>

      <section className="py-12" style={{ background: "#BDEECF" }}>
        <div className="mx-auto max-w-3xl px-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-sm text-[#111827]/60">Questions about these terms?</p>
          <Link
            href="/contact"
            className="text-sm font-semibold text-[#14532D] hover:text-[#22C55E] transition-colors"
          >
            Contact us →
          </Link>
        </div>
      </section>
    </>
  );
}
