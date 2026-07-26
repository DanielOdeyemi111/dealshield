"use client";

import { useState } from "react";
import { MessageSquare, Mail, Clock } from "lucide-react";
import { FadeUp } from "@/components/ui/fade-up";

export default function ContactPage() {
  const [sent, setSent] = useState(false);
  const [form, setForm] = useState({ name: "", email: "", subject: "", message: "" });

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setSent(true);
  }

  return (
    <>
      {/* Hero */}
      <section className="bg-white py-20 border-b border-[#111827]/[0.07]">
        <div className="mx-auto max-w-3xl px-6 text-center">
          <FadeUp>
            <span className="text-sm font-semibold text-[#166534] uppercase tracking-widest">
              Contact
            </span>
            <h1 className="mt-3 text-4xl md:text-5xl font-bold tracking-tight text-[#111827]">
              We&apos;re here to help.
            </h1>
            <p className="mt-5 text-lg text-[#111827]/60">
              Questions, feedback, or a deal that needs urgent attention — reach us any way you prefer.
            </p>
          </FadeUp>
        </div>
      </section>

      <section className="py-10 md:py-20" style={{ background: "#BDEECF" }}>
        <div className="mx-auto max-w-5xl px-6 grid md:grid-cols-5 gap-12">
          {/* Contact options */}
          <div className="md:col-span-2 space-y-5">
            <FadeUp>
              <h2 className="text-xl font-bold text-[#111827] mb-6">Get in touch</h2>
              <div className="rounded-2xl bg-white border border-[#111827]/10 p-5 flex gap-4 shadow-sm">
                <span className="h-10 w-10 shrink-0 rounded-xl bg-[#22C55E]/10 text-[#14532D] flex items-center justify-center">
                  <MessageSquare size={18} />
                </span>
                <div>
                  <div className="font-semibold text-[#111827] text-sm">WhatsApp</div>
                  <div className="text-sm text-[#111827]/60 mt-0.5">Fastest response — typically under 30 minutes</div>
                  <a
                    href="https://wa.me/15551878900?text=Hi"
                    className="mt-2 inline-block text-sm text-[#14532D] font-medium hover:text-[#22C55E] transition-colors"
                  >
                    Message us on WhatsApp →
                  </a>
                </div>
              </div>
              <div className="rounded-2xl bg-white border border-[#111827]/10 p-5 flex gap-4 shadow-sm">
                <span className="h-10 w-10 shrink-0 rounded-xl bg-[#22C55E]/10 text-[#14532D] flex items-center justify-center">
                  <Mail size={18} />
                </span>
                <div>
                  <div className="font-semibold text-[#111827] text-sm">Email</div>
                  <div className="text-sm text-[#111827]/60 mt-0.5">For non-urgent queries and partnership enquiries</div>
                  <a
                    href="mailto:hello@dealshield.co"
                    className="mt-2 inline-block text-sm text-[#14532D] font-medium hover:text-[#22C55E] transition-colors"
                  >
                    hello@dealshield.co →
                  </a>
                </div>
              </div>
              <div className="rounded-2xl bg-white border border-[#111827]/10 p-5 flex gap-4 shadow-sm">
                <span className="h-10 w-10 shrink-0 rounded-xl bg-[#22C55E]/10 text-[#14532D] flex items-center justify-center">
                  <Clock size={18} />
                </span>
                <div>
                  <div className="font-semibold text-[#111827] text-sm">Response times</div>
                  <div className="text-sm text-[#111827]/60 mt-1 space-y-0.5">
                    <div>WhatsApp: &lt;30 minutes</div>
                    <div>Email: &lt;4 hours</div>
                    <div>Disputes: &lt;24 hours</div>
                  </div>
                </div>
              </div>
            </FadeUp>
          </div>

          {/* Form */}
          <div className="md:col-span-3">
            <FadeUp delay={0.08}>
              <div className="rounded-2xl bg-white border border-[#111827]/10 p-8 shadow-sm">
                {sent ? (
                  <div className="text-center py-8">
                    <div className="text-4xl mb-4">✅</div>
                    <h3 className="text-xl font-bold text-[#111827]">Message sent!</h3>
                    <p className="mt-2 text-[#111827]/60 text-sm">
                      We&apos;ll get back to you within a few hours.
                    </p>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-5">
                    <h2 className="text-xl font-bold text-[#111827] mb-6">Send a message</h2>
                    <div className="grid sm:grid-cols-2 gap-5">
                      <div>
                        <label className="block text-sm font-medium text-[#111827] mb-1.5">Full name</label>
                        <input
                          type="text"
                          required
                          value={form.name}
                          onChange={(e) => setForm({ ...form, name: e.target.value })}
                          placeholder="Amaka Okonkwo"
                          className="w-full rounded-xl border border-[#111827]/15 bg-white px-4 py-2.5 text-sm text-[#111827] placeholder:text-[#111827]/35 focus:outline-none focus:border-[#22C55E] transition-colors"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-[#111827] mb-1.5">Email address</label>
                        <input
                          type="email"
                          required
                          value={form.email}
                          onChange={(e) => setForm({ ...form, email: e.target.value })}
                          placeholder="amaka@example.com"
                          className="w-full rounded-xl border border-[#111827]/15 bg-white px-4 py-2.5 text-sm text-[#111827] placeholder:text-[#111827]/35 focus:outline-none focus:border-[#22C55E] transition-colors"
                        />
                      </div>
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-[#111827] mb-1.5">Subject</label>
                      <input
                        type="text"
                        required
                        value={form.subject}
                        onChange={(e) => setForm({ ...form, subject: e.target.value })}
                        placeholder="e.g. Question about my deal"
                        className="w-full rounded-xl border border-[#111827]/15 bg-white px-4 py-2.5 text-sm text-[#111827] placeholder:text-[#111827]/35 focus:outline-none focus:border-[#22C55E] transition-colors"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-[#111827] mb-1.5">Message</label>
                      <textarea
                        required
                        rows={5}
                        value={form.message}
                        onChange={(e) => setForm({ ...form, message: e.target.value })}
                        placeholder="Tell us what's on your mind..."
                        className="w-full rounded-xl border border-[#111827]/15 bg-white px-4 py-2.5 text-sm text-[#111827] placeholder:text-[#111827]/35 focus:outline-none focus:border-[#22C55E] transition-colors resize-none"
                      />
                    </div>
                    <button
                      type="submit"
                      className="w-full bg-[#22C55E] text-white font-semibold px-6 py-3 rounded-full hover:bg-[#166534] transition-colors text-sm"
                    >
                      Send message
                    </button>
                  </form>
                )}
              </div>
            </FadeUp>
          </div>
        </div>
      </section>
    </>
  );
}
