import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import Link from "next/link";
import SiteHeader from "./components/site-header";
import { ToastContainer, ScrollToTop, WhatsAppButton } from "./components/ui-utils";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: { default: "Fitness Gym", template: "%s | Fitness Gym" },
  description:
    "Fitness Gym — premium online gym membership, class booking, personal training and 3D gym experience. Join from anywhere.",
  icons: {
    icon: "/icon.svg",
    shortcut: "/icon.svg",
    apple: "/icon.svg",
  },
  openGraph: {
    siteName: "Fitness Gym",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        <SiteHeader />
        {children}

        {/* ─── Footer ─────────────────────────────────────────── */}
        <footer className="border-t border-zinc-800 bg-zinc-950 text-zinc-400">
          <div className="mx-auto grid max-w-7xl gap-12 px-6 py-16 sm:grid-cols-2 lg:grid-cols-4">
            {/* Brand */}
            <div>
              <p className="text-2xl font-extrabold tracking-tight text-white">
                <span className="text-orange-400">FIT</span>NESS
              </p>
              <p className="mt-3 text-sm leading-relaxed">
                Premium gym. Train hard, book online, join from anywhere — no commute required.
              </p>
              <div className="mt-4 flex gap-3 text-zinc-500">
                {["Instagram", "Twitter", "YouTube"].map((s) => (
                  <span key={s} className="cursor-pointer text-xs uppercase hover:text-orange-400 transition-colors">
                    {s}
                  </span>
                ))}
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <p className="mb-4 text-xs font-semibold uppercase tracking-widest text-zinc-500">
                Pages
              </p>
              <ul className="space-y-2 text-sm">
                {[
                  ["Home", "/"],
                  ["Experience", "/experience"],
                  ["Classes", "/classes"],
                  ["Trainers", "/trainers"],
                  ["Gallery", "/gallery"],
                ].map(([label, href]) => (
                  <li key={href}>
                    <Link href={href} className="hover:text-orange-400 transition-colors">
                      {label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Services */}
            <div>
              <p className="mb-4 text-xs font-semibold uppercase tracking-widest text-zinc-500">
                Services
              </p>
              <ul className="space-y-2 text-sm">
                {[
                  ["Book a Slot", "/book"],
                  ["Get Membership", "/membership"],
                  ["Personal Training", "/trainers"],
                  ["FAQ", "/faq"],
                  ["Contact Us", "/contact"],
                ].map(([label, href]) => (
                  <li key={href}>
                    <Link href={href} className="hover:text-orange-400 transition-colors">
                      {label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact */}
            <div>
              <p className="mb-4 text-xs font-semibold uppercase tracking-widest text-zinc-500">
                Contact
              </p>
              <ul className="space-y-2 text-sm leading-relaxed">
                <li>📍 12 Iron Lane, Powai<br />Mumbai 400076</li>
                <li>📞 +91 99999 99999</li>
                <li>✉️ hello@fitnessgym.in</li>
                <li>🕐 Mon–Sat 6 AM – 10 PM<br />Sun 7 AM – 6 PM</li>
              </ul>
            </div>
          </div>

          <div className="border-t border-zinc-800 px-6 py-4 text-center text-xs text-zinc-600">
            © {new Date().getFullYear()} Fitness Gym • All rights reserved
          </div>
        </footer>

        {/* Global UI utilities */}
        <ToastContainer />
        <ScrollToTop />
        <WhatsAppButton />
      </body>
    </html>
  );
}
