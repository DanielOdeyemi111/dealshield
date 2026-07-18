"use client";

import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { Eye, EyeOff, ArrowRight, Loader2 } from "lucide-react";
import { createClient } from "@/lib/supabase";

export default function LoginPage() {
  const router = useRouter();
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [form, setForm] = useState({ email: "", password: "" });

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setError("");
    setLoading(true);

    const supabase = createClient();

    const { error: signInError } = await supabase.auth.signInWithPassword({
      email: form.email,
      password: form.password,
    });

    if (signInError) {
      setError(signInError.message);
      setLoading(false);
      return;
    }

    router.push("/dashboard");
    router.refresh();
  }

  return (
    <section className="min-h-screen py-16 flex items-center justify-center" style={{ background: "#BDEECF" }}>
      <div className="w-full max-w-md mx-auto px-6">
        <div className="rounded-2xl bg-white border border-[#111827]/10 shadow-sm p-8">
          <div className="text-center mb-8">
            <h1 className="text-2xl font-bold text-[#111827]">Welcome back</h1>
            <p className="mt-1 text-sm text-[#111827]/60">
              Don&apos;t have an account?{" "}
              <Link href="/signup" className="text-[#14532D] font-medium hover:text-[#22C55E] transition-colors">
                Create one free
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
              <div className="flex items-center justify-between mb-1.5">
                <label className="text-sm font-medium text-[#111827]">Password</label>
                <Link href="/forgot-password" className="text-xs text-[#14532D] hover:text-[#22C55E] transition-colors">
                  Forgot password?
                </Link>
              </div>
              <div className="relative">
                <input
                  type={showPassword ? "text" : "password"}
                  required
                  value={form.password}
                  onChange={(e) => setForm({ ...form, password: e.target.value })}
                  placeholder="Your password"
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

            <button
              type="submit"
              disabled={loading}
              className="btn-shimmer group w-full inline-flex items-center justify-center gap-2 bg-[#22C55E] text-white font-semibold px-6 py-3 rounded-full hover:bg-[#166534] transition-colors text-sm disabled:opacity-60 disabled:cursor-not-allowed"
            >
              {loading ? <Loader2 size={16} className="animate-spin" /> : (
                <>Sign in <ArrowRight size={15} className="group-hover:translate-x-0.5 transition-transform" /></>
              )}
            </button>
          </form>

          <div className="mt-5 relative">
            <div className="absolute inset-0 flex items-center">
              <div className="w-full border-t border-[#111827]/10" />
            </div>
            <div className="relative flex justify-center text-xs text-[#111827]/40">
              <span className="bg-white px-3">or</span>
            </div>
          </div>

          <a
            href="https://wa.me/"
            className="mt-4 flex items-center justify-center border border-[#111827]/15 text-[#111827]/75 font-medium px-6 py-3 rounded-full hover:bg-[#111827]/[0.04] transition-all text-sm"
          >
            Continue with WhatsApp
          </a>
        </div>
      </div>
    </section>
  );
}
