"use client";

import Link from "next/link";
import Image from "next/image";
import { Menu, X } from "lucide-react";
import { useState } from "react";

const links = [
  { href: "/", label: "Home" },
  { href: "/how-it-works", label: "How it works" },
  { href: "/features", label: "Features" },
  { href: "/security", label: "Security" },
  { href: "/pricing", label: "Pricing" },
  { href: "/faq", label: "FAQ" },
];

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-white/90 backdrop-blur border-b border-[#14532D]/10">
      <div className="mx-auto max-w-6xl px-6 h-16 flex items-center justify-between">

        {/* Logo — cropped from the square canvas PNG */}
        <Link href="/" aria-label="Deal Shield home">
          <div
            className="relative overflow-hidden"
            style={{ width: 140, height: 38 }}
          >
            <div
              style={{
                position: "absolute",
                width: 200,
                height: 200,
                top: -84,
                left: -41,
              }}
            >
              <Image
                src="/logo-dark-green.png"
                alt="Deal Shield"
                width={200}
                height={200}
                priority
                style={{ display: "block" }}
              />
            </div>
          </div>
        </Link>

        <nav className="hidden md:flex items-center gap-8">
          {links.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              className="text-sm font-medium text-[#111827]/70 hover:text-[#14532D] transition-colors"
            >
              {l.label}
            </Link>
          ))}
        </nav>

        <div className="hidden md:flex items-center gap-3">
          <Link
            href="/login"
            className="text-sm font-medium text-[#111827]/70 hover:text-[#14532D] transition-colors"
          >
            Sign in
          </Link>
          <Link
            href="/signup"
            className="btn-shimmer text-sm font-semibold bg-[#22C55E] text-white px-4 py-2 rounded-full hover:bg-[#166534] transition-colors"
          >
            Get started free
          </Link>
        </div>

        <button
          className="md:hidden text-[#111827]"
          onClick={() => setOpen((v) => !v)}
          aria-label="Toggle menu"
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {open && (
        <div className="md:hidden border-t border-[#14532D]/10 bg-white px-6 py-4 flex flex-col gap-4">
          {links.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              className="text-sm font-medium text-[#111827]/80"
              onClick={() => setOpen(false)}
            >
              {l.label}
            </Link>
          ))}
          <div className="flex flex-col gap-3 pt-2 border-t border-[#14532D]/10">
            <Link href="/login" className="text-sm font-medium text-[#111827]/80">
              Sign in
            </Link>
            <Link
              href="/signup"
              className="text-sm font-semibold bg-[#22C55E] text-white px-4 py-2 rounded-full text-center"
            >
              Get started free
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
