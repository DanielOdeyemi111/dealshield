import Link from "next/link";
import Image from "next/image";

const columns = [
  {
    title: "Product",
    links: [
      { href: "/how-it-works", label: "How it works" },
      { href: "/features", label: "Features" },
      { href: "/pricing", label: "Pricing" },
      { href: "/security", label: "Security" },
    ],
  },
  {
    title: "Company",
    links: [
      { href: "/about", label: "About" },
      { href: "/faq", label: "FAQ" },
      { href: "/contact", label: "Contact" },
    ],
  },
  {
    title: "Legal",
    links: [
      { href: "/legal/terms", label: "Terms" },
      { href: "/legal/privacy", label: "Privacy" },
    ],
  },
];

export default function Footer() {
  return (
    <footer className="bg-[#111827] text-white">
      <div className="mx-auto max-w-6xl px-6 py-16">
        <div className="grid grid-cols-2 md:grid-cols-5 gap-10">
          <div className="col-span-2">
            {/* Bright green logo for dark background */}
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
                    src="/logo-bright-green.png"
                    alt="Deal Shield"
                    width={200}
                    height={200}
                    style={{ display: "block" }}
                  />
                </div>
              </div>
            </Link>
            <p className="mt-4 text-sm text-white/60 max-w-xs">
              Safe escrow payments for African buyers and sellers — on web
              or WhatsApp.
            </p>
          </div>

          {columns.map((col) => (
            <div key={col.title}>
              <h4 className="text-sm font-semibold text-white/90">
                {col.title}
              </h4>
              <ul className="mt-4 space-y-3">
                {col.links.map((l) => (
                  <li key={l.href}>
                    <Link
                      href={l.href}
                      className="text-sm text-white/60 hover:text-white transition-colors"
                    >
                      {l.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-14 pt-8 border-t border-white/10 text-xs text-white/50">
          © {new Date().getFullYear()} Deal Shield. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
