import Link from "next/link";
import { FadeUp } from "@/components/ui/fade-up";

const sections = [
  {
    title: "1. What information we collect",
    body: "We collect information you provide directly: name, email address, phone number, and payment details when creating an account or deal. We also collect transaction data (deal amounts, timelines, outcomes) and, where relevant, evidence submitted during disputes (messages, photos, receipts).",
  },
  {
    title: "2. How we use your information",
    body: "Your information is used to operate escrow transactions, verify payments, resolve disputes, build reputation scores, send transactional notifications (deal updates, payment confirmations), and improve the Platform. We do not sell your personal data to third parties.",
  },
  {
    title: "3. Payment data",
    body: "Payment processing is handled by Paystack. Deal Shield does not store your card numbers or bank account details. We receive only payment confirmation data (amount, status, timestamp) needed to manage escrow releases.",
  },
  {
    title: "4. WhatsApp data",
    body: "If you use Deal Shield via WhatsApp, deal messages and confirmations are processed through our bot. We store the structured deal data but do not retain the full conversation history beyond what is necessary for dispute resolution.",
  },
  {
    title: "5. Data sharing",
    body: "We share data with Paystack (payment processing) and with the counterparty in your deal (name, deal terms, and confirmed delivery status). We may share data with law enforcement if required by applicable law or a valid court order.",
  },
  {
    title: "6. Data retention",
    body: "Transaction records are retained for 7 years in compliance with applicable financial regulations. Account data is retained for as long as your account is active and for 2 years after closure. Dispute evidence is retained for 3 years.",
  },
  {
    title: "7. Your rights",
    body: "You may request access to your personal data, correction of inaccurate data, deletion of your account (subject to transaction record retention requirements), and a copy of your deal history. Contact us at privacy@dealshield.co to make a request.",
  },
  {
    title: "8. Security",
    body: "All data is encrypted in transit using TLS 1.3 and at rest using AES-256. Access to personal data is restricted to Deal Shield staff who require it for their role. We conduct regular security reviews and maintain incident response procedures.",
  },
  {
    title: "9. Cookies",
    body: "We use strictly necessary cookies to maintain your session and preferences. We do not use advertising or tracking cookies. You can clear cookies at any time through your browser settings.",
  },
  {
    title: "10. Changes to this policy",
    body: "We may update this Privacy Policy to reflect changes in our practices or legal requirements. Material changes will be communicated by email. Continued use of the Platform after notification constitutes acceptance of the updated policy.",
  },
  {
    title: "11. Contact",
    body: "For privacy-related questions or data requests, contact us at privacy@dealshield.co. We aim to respond within 5 business days.",
  },
];

export default function PrivacyPage() {
  return (
    <>
      <section className="bg-white py-16 border-b border-[#111827]/[0.07]">
        <div className="mx-auto max-w-3xl px-6">
          <FadeUp>
            <span className="text-sm font-semibold text-[#166534] uppercase tracking-widest">Legal</span>
            <h1 className="mt-3 text-3xl md:text-4xl font-bold text-[#111827]">Privacy Policy</h1>
            <p className="mt-3 text-sm text-[#111827]/50">Last updated: July 2026</p>
            <p className="mt-4 text-[#111827]/60 leading-relaxed">
              Your privacy matters to us. This policy explains what data we collect, how we use it, and your rights as a Deal Shield user.
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
          <p className="text-sm text-[#111827]/60">Privacy questions or data requests?</p>
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
