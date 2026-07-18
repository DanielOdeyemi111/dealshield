import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import "./globals.css";
import Header from "@/components/header";
import Footer from "@/components/footer";

// Montserrat is the closest freely available equivalent to Gotham.
// When a Gotham web license is obtained, replace this with a self-hosted
// @font-face block and rename the CSS variable to --font-gotham throughout.
const gotham = Montserrat({
  variable: "--font-gotham",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
});

export const metadata: Metadata = {
  title: "Deal Shield — Safe Escrow Payments Across Africa",
  description:
    "Deal Shield locks your money in escrow until both sides are happy. Trade goods, digital products, services and milestone projects safely, on web or WhatsApp.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${gotham.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col bg-background text-foreground">
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
