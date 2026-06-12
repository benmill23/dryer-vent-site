"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import Icon from "@/components/Icon";
import { site } from "@/lib/site";

const navLinks = [
  { href: "/#services", label: "Services" },
  { href: "/#pricing", label: "Pricing" },
  { href: "/dryer-vent-cleaning", label: "Service Areas" },
  { href: "/commercial", label: "Commercial" },
  { href: "/#reviews", label: "Reviews" },
  { href: "/#faq", label: "FAQ" },
];

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed top-0 inset-x-0 z-50 bg-white/95 backdrop-blur shadow-[0_1px_3px_rgba(0,0,0,0.08)]">
      <div className="mx-auto max-w-6xl px-5">
        <div className="flex items-center justify-between py-2.5">
          <Link href="/" className="flex items-center gap-3" aria-label={site.name}>
            <Image
              src="/logo.png"
              alt={site.name}
              width={44}
              height={65}
              priority
              className="h-14 w-auto"
            />
            <span className="hidden sm:flex flex-col leading-tight">
              <span className="text-xl font-extrabold text-brand-800">
                {site.shortName}
              </span>
              <span className="text-[0.7rem] font-semibold uppercase tracking-[1.5px] text-ink-500">
                {site.tagline}
              </span>
            </span>
          </Link>

          <nav className="hidden lg:flex items-center gap-7">
            {navLinks.map((l) => (
              <a
                key={l.href}
                href={l.href}
                className="text-sm font-semibold text-ink-700 hover:text-brand-600 transition-colors"
              >
                {l.label}
              </a>
            ))}
          </nav>

          <div className="flex items-center gap-3">
            <div className="hidden md:block text-right">
              <div className="text-[0.7rem] uppercase tracking-wide text-ink-500">
                Call for same-day service
              </div>
              <a
                href={`tel:${site.phoneRaw}`}
                className="text-lg font-bold text-brand-800 hover:text-brand-600"
              >
                {site.phone}
              </a>
            </div>
            <a
              href={`tel:${site.phoneRaw}`}
              className="inline-flex items-center gap-2 rounded-lg bg-brand-600 px-4 py-3 font-bold text-white hover:bg-brand-800 transition-colors"
            >
              <Icon name="phone" className="h-[18px] w-[18px]" />
              <span className="hidden sm:inline">Call Now</span>
            </a>
            <button
              type="button"
              onClick={() => setOpen((v) => !v)}
              className="lg:hidden inline-flex items-center justify-center rounded-lg p-2 text-ink-700 hover:bg-ink-100"
              aria-label="Toggle menu"
              aria-expanded={open}
            >
              <Icon name={open ? "close" : "menu"} className="h-6 w-6" />
            </button>
          </div>
        </div>

        {open && (
          <nav className="lg:hidden border-t border-ink-100 py-3">
            {navLinks.map((l) => (
              <a
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                className="block px-2 py-3 text-base font-semibold text-ink-700 hover:text-brand-600"
              >
                {l.label}
              </a>
            ))}
            <a
              href="#contact"
              onClick={() => setOpen(false)}
              className="mt-2 block rounded-lg bg-brand-600 px-4 py-3 text-center font-bold text-white"
            >
              Get a Free Quote
            </a>
          </nav>
        )}
      </div>
    </header>
  );
}
