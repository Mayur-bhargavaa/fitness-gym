"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

const links = [
  { href: "/", label: "Home" },
  { href: "/experience", label: "Experience" },
  { href: "/classes", label: "Classes" },
  { href: "/book", label: "Book" },
  { href: "/membership", label: "Membership" },
  { href: "/trainers", label: "Trainers" },
  { href: "/gallery", label: "Gallery" },
  { href: "/contact", label: "Contact" },
];

export default function SiteHeader() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-zinc-800/80 bg-zinc-950/90 backdrop-blur-xl">
      <div className="mx-auto flex w-full max-w-6xl items-center justify-between px-6 py-4">
        <Link href="/" className="text-lg font-extrabold tracking-[0.2em] text-orange-300">
          FITNESS
        </Link>

        {/* Desktop nav */}
        <nav className="hidden flex-wrap items-center justify-end gap-2 text-sm lg:flex">
          {links.map((item) => {
            const active = pathname === item.href;
            return (
              <Link
                key={item.href}
                href={item.href}
                className={`interactive-button rounded-full px-4 py-2 text-sm transition ${
                  active
                    ? "border border-orange-400 bg-orange-500/15 font-semibold text-orange-300"
                    : "border border-zinc-700 text-zinc-200 hover:border-orange-400 hover:text-orange-200"
                }`}
              >
                {item.label}
              </Link>
            );
          })}
        </nav>

        {/* Mobile hamburger */}
        <button
          onClick={() => setOpen((v) => !v)}
          aria-label="Toggle menu"
          className="flex h-10 w-10 flex-col items-center justify-center gap-1.5 rounded-xl border border-zinc-700 lg:hidden"
        >
          <span className={`block h-0.5 w-5 bg-zinc-200 transition-all duration-300 ${open ? "translate-y-2 rotate-45" : ""}`} />
          <span className={`block h-0.5 w-5 bg-zinc-200 transition-all duration-300 ${open ? "opacity-0" : ""}`} />
          <span className={`block h-0.5 w-5 bg-zinc-200 transition-all duration-300 ${open ? "-translate-y-2 -rotate-45" : ""}`} />
        </button>
      </div>

      {/* Mobile drawer */}
      {open && (
        <nav className="border-t border-zinc-800 bg-zinc-950/98 px-6 pb-5 pt-3 lg:hidden">
          <div className="flex flex-col gap-2">
            {links.map((item) => {
              const active = pathname === item.href;
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={() => setOpen(false)}
                  className={`rounded-xl px-4 py-3 text-sm font-medium transition ${
                    active
                      ? "border border-orange-400 bg-orange-500/15 text-orange-300"
                      : "border border-zinc-800 text-zinc-200 hover:border-zinc-600"
                  }`}
                >
                  {item.label}
                </Link>
              );
            })}
          </div>
        </nav>
      )}
    </header>
  );
}
