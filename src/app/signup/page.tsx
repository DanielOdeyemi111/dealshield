"use client";

import { useState, useEffect, Suspense } from "react";
import Link from "next/link";
import { useRouter, useSearchParams } from "next/navigation";
import { Eye, EyeOff, ArrowRight, Loader2, MessageCircle } from "lucide-react";
import { createClient } from "@/lib/supabase";

const WA_NUMBER = "15551878900";

function SignupForm() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const waNumber = searchParams.get("wa") ?? "";

  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState(false);
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    password: "",
    terms: false,
  });

  useEffect(() => {
    if (waNumber) {
      setForm((f) => ({ ...f, phone: `+${waNumber}` }));
    }
  }, [waNumber]);

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setError("");
    setLoading(true);

    const supabase = createClient();

    const { error: signUpError } = await supabase.auth.signUp({
      email: form.email,
      password: form.password,
      options: {
        data: {
          full_name: form.name,
          phone: form.phone,
          whatsapp_number: waNumber || null,
        },
      },
    });

    if (signUpError) {
      setError(signUpError.message);
      setLoading(false);
      return;
    }

    setSuccess(true);
    setLoading(false);
  }

  if (success) {
    return (
      <section className="min-h-screen py-16 flex items-center justify-center" style={{ background: "#BDEECF" }}>
        <div className="w-full max-w-md mx-auto px-6">
          <div className="rounded-2xl bg-white border border-[#111827]/10 shadow-sm p-8 text-center">
            <div className="text-5xl mb-4">🎉</div>
            <h2 className="text-xl font-bold text-[#111827]">Check your email!</h2>
            <p className="mt-3 text-sm text-[#111827]/60 leading-relaxed">
              We&apos;ve sent a confirmation link to <strong>{form.email}</strong>.
              Click the link to activate your account, then sign in.
            </p>
            <Link
              href="/login"
              className="mt-6 inline-flex items-center gap-2 bg-[#22C55E] text-white font-semibold px-6 py-3 rounded-full hover:bg-[#166534] transition-colors text-sm"
            >
              Go to sign in
              <ArrowRight size={15} />
            </Link>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="min-h-screen py-16 flex items-center justify-center" style={{ background: "#BDEECF" }}>
      <div className="w-full max-w-md mx-auto px-6">
        <div className="rounded-2xl bg-white border border-[#111827]/10 shadow-sm p-8">

          {waNumber && (
            <div className="mb-6 flex items-center gap-3 rounded-xl bg-[#22C55E]/10 border border-[#22C55E]/20 px-4 py-3">
              <MessageCircle size={18} className="shrink-0 text-[#14532D]" />
              <p className="text-sm text-[#14532D] font-medium">
                Signing up via WhatsApp · <span className="font-normal opacity-75">+{waNumber}</span>
              </p>
            </div>
          )}

          <div className="text-center mb-8">
            <h1 className="text-2xl font-bold text-[#111827]">Create your account</h1>
            <p className="mt-1 text-sm text-[#111827]/60">
              Already have an account?{" "}
              <Link href="/login" className="text-[#14532D] font-medium hover:text-[#22C55E] transition-colors">
                Sign in
              </Link>
            </p>
          </div>

          {error && (
            <div className="mb-4 rounded-xl bg-red-50 border border-red-200 px-4 py-3 text-sm text-red-700">
              {error}
            </div>
          )}

          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-[#111827] mb-1.5">Full name</label>
              <input
                type="text"
                required
                value={form.name}
                onChange={(e) => setForm({ ...form, name: e.target.value })}
                placeholder="Amaka Okonkwo"
                className="w-full rounded-xl border border-[#111827]/15 px-4 py-2.5 text-sm text-[#111827] placeholder:text-[#111827]/35 focus:outline-none focus:border-[#22C55E] transition-colors"
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
                className="w-full rounded-xl border border-[#111827]/15 px-4 py-2.5 text-sm text-[#111827] placeholder:text-[#111827]/35 focus:outline-none focus:border-[#22C55E] transition-colors"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-[#111827] mb-1.5">
                Phone number
                {waNumber && <span className="ml-2 text-xs text-[#22C55E] font-normal">✓ From WhatsApp</span>}
              </label>
              <input
                type="tel"
                value={form.phone}
                onChange={(e) => !waNumber && setForm({ ...form, phone: e.target.value })}
                readOnly={!!waNumber}
                placeholder="+234 800 000 0000"
                className={`w-full rounded-xl border px-4 py-2.5 text-sm text-[#111827] placeholder:text-[#111827]/35 focus:outline-none transition-colors ${
                  waNumber
                    ? "border-[#22C55E]/30 bg-[#22C55E]/[0.04] text-[#111827]/70 cursor-default"
                    : "border-[#111827]/15 focus:border-[#22C55E]"
                }`}
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-[#111827] mb-1.5">Password</label>
              <div className="relative">
                <input
                  type={showPassword ? "text" : "password"}
                  required
                  minLength={8}
                  value={form.password}
                  onChange={(e) => setForm({ ...form, password: e.target.value })}
                  placeholder="At least 8 characters"
                  className="w-full rounded-xl border border-[#111827]/15 px-4 py-2.5 pr-11 text-sm text-[#111827] placeholder:text-[#111827]/35 focus:outline-none focus:border-[#22C55E] transition-colors"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword((v) => !v)}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-[#111827]/40 hover:text-[#111827]/70"
                >
                  {showPassword ? <EyeOff size={16} /> : <Eye size={16} />}
                </button>
              </div>
            </div>

            <label className="flex items-start gap-3 cursor-pointer">
              <input
                type="checkbox"
                required
                checked={form.terms}
                onChange={(e) => setForm({ ...form, terms: e.target.checked })}
                className="mt-0.5 accent-[#22C55E]"
              />
              <span className="text-xs text-[#111827]/60 leading-relaxed">
                I agree to the{" "}
                <Link href="/legal/terms" className="text-[#14532D] underline underline-offset-2">Terms of Service</Link>
                {" "}and{" "}
                <Link href="/legal/privacy" className="text-[#14532D] underline underline-offset-2">Privacy Policy</Link>
              </span>
            </label>

            <button
              type="submit"
              disabled={loading}
              className="btn-shimmer group w-full inline-flex items-center justify-center gap-2 bg-[#22C55E] text-white font-semibold px-6 py-3 rounded-full hover:bg-[#166534] transition-colors text-sm disabled:opacity-60 disabled:cursor-not-allowed"
            >
              {loading ? <Loader2 size={16} className="animate-spin" /> : (
                <>Create account <ArrowRight size={15} className="group-hover:translate-x-0.5 transition-transform" /></>
              )}
            </button>
          </form>

          {!waNumber && (
            <>
              <div className="mt-5 relative">
                <div className="absolute inset-0 flex items-center">
                  <div className="w-full border-t border-[#111827]/10" />
                </div>
                <div className="relative flex justify-center text-xs text-[#111827]/40">
                  <span className="bg-white px-3">or</span>
                </div>
              </div>

              <a
                href={`https://wa.me/${WA_NUMBER}?text=Hi`}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-4 flex items-center justify-center gap-2 border border-[#111827]/15 text-[#111827]/75 font-medium px-6 py-3 rounded-full hover:bg-[#111827]/[0.04] transition-all text-sm"
              >
                <MessageCircle size={16} className="text-[#22C55E]" />
                Continue with WhatsApp
              </a>
            </>
          )}
        </div>
      </div>
    </section>
  );
}

export default function SignupPage() {
  return (
    <Suspense fallback={
      <section className="min-h-screen flex items-center justify-center" style={{ background: "#BDEECF" }}>
        <Loader2 size={24} className="animate-spin text-[#22C55E]" />
      </section>
    }>
      <SignupForm />
    </Suspense>
  );
}
