"use client";

import { useEffect } from "react";

const WA_LINK = "https://wa.me/2347026714452?text=Hi%20Dealshield";

export default function SignupPage() {
  useEffect(() => {
    window.location.href = WA_LINK;
  }, []);

  return (
    <section className="min-h-screen flex items-center justify-center" style={{ background: "#BDEECF" }}>
      <div className="text-center px-6">
        <div className="text-6xl mb-5">💬</div>
        <h1 className="text-2xl font-bold text-[#111827]">Sign up on WhatsApp</h1>
        <p className="mt-3 text-sm text-[#111827]/60 max-w-xs mx-auto">
          Deal Shield accounts are created directly on WhatsApp. Taking you there now...
        </p>
        <a
          href={WA_LINK}
          className="mt-6 inline-flex items-center gap-2 bg-[#22C55E] text-white font-semibold px-6 py-3 rounded-full hover:bg-[#166534] transition-colors text-sm"
        >
          Open WhatsApp
        </a>
      </div>
    </section>
  );
}
