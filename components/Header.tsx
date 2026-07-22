"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import Icon from "@/components/Icon";
import { site, showReviews } from "@/lib/site";

const mainLinks = [
  { href: "/#services", label: "Services" },
  { href: "/dryer-vent-cleaning", label: "Service Areas" },
];

const propertyLinks = [
  { href: "/commercial", label: "Commercial & Multi-Unit" },
  { href: "/property-managers", label: "Property Managers" },
  { href: "/short-term-rentals", label: "Short-Term Rentals" },
];

const endLinks = [
  ...(showReviews ? [{ href: "/#reviews", label: "Reviews" }] : []),
  { href: "/#faq", label: "FAQ" },
];

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed top-0 inset-x-0 z-50 bg-white/95 backdrop-blur shadow-[0_1px_3px_rgba(0,0,0,0.08)]">
      <div className="mx-auto max-w-6xl px-5">
        <div className="flex items-center justify-between py-2">
          <Link
            href="/"
            className="flex items-center gap-2.5"
            aria-label={site.name}
          >
            <Image
              src="/logo.png"
              alt={site.name}
              width={55}
              height={81}
              priority
              className="h-16 w-auto"
            />
            <span className="hidden sm:flex flex-col leading-tight">
              <span className="text-xl font-extrabold text-brand-800">
                {site.shortName}
              </span>
              <span className="text-[0.65rem] font-semibold uppercase tracking-[1.5px] text-ink-500">
                {site.tagline}
              </span>
            </span>
          </Link>

          <nav className="hidden lg:flex items-center gap-6">
            {mainLinks.map((l) => (
              <a
                key={l.href}
                href={l.href}
                className="text-sm font-semibold text-ink-700 hover:text-brand-600 transition-colors"
              >
                {l.label}
              </a>
            ))}

            {/* Properties dropdown — groups Commercial / PM / STR */}
            <div className="relative group">
              <button
                type="button"
                className="flex items-center gap-1 text-sm font-semibold text-ink-700 hover:text-brand-600 transition-colors"
              >
                For Properties
                <Icon
                  name="arrow"
                  className="h-4 w-4 rotate-90 text-ink-300 transition-transform group-hover:translate-y-0.5"
                />
              </button>
              <div className="invisible absolute left-1/2 top-full -translate-x-1/2 pt-3 opacity-0 transition-all duration-150 group-hover:visible group-hover:opacity-100 group-focus-within:visible group-focus-within:opacity-100">
                <div className="w-60 rounded-xl border border-ink-100 bg-white p-2 shadow-card">
                  {propertyLinks.map((l) => (
                    <a
                      key={l.href}
                      href={l.href}
                      className="block rounded-lg px-3 py-2 text-sm font-semibold text-ink-700 transition-colors hover:bg-brand-50 hover:text-brand-600"
                    >
                      {l.label}
                    </a>
                  ))}
                </div>
              </div>
            </div>

            {endLinks.map((l) => (
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
            <div className="hidden xl:block text-right">
              <div className="text-[0.7rem] uppercase tracking-wide text-ink-500">
                Call for a free quote
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
              className="cta-glow inline-flex items-center gap-2 rounded-lg bg-brand-600 px-4 py-3 font-bold text-white hover:bg-brand-800 transition-colors"
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
            {[...mainLinks, ...propertyLinks, ...endLinks].map((l) => (
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
