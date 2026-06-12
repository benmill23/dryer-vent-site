"use client";

import { useState } from "react";
import Icon from "@/components/Icon";
import { faqs as defaultFaqs, site } from "@/lib/site";

type QA = { q: string; a: string };

export default function Faq({
  items = defaultFaqs as readonly QA[],
  intro = `Everything you need to know about dryer vent cleaning in ${site.city}.`,
}: {
  items?: readonly QA[];
  intro?: string;
}) {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section id="faq" className="section bg-white">
      <div className="mx-auto max-w-3xl px-5">
        <div className="mb-10 text-center">
          <span className="text-sm font-bold uppercase tracking-wider text-brand-600">
            Questions
          </span>
          <h2 className="mt-2 text-3xl font-extrabold text-ink-900 sm:text-4xl">
            Frequently Asked Questions
          </h2>
          <p className="mt-3 text-lg text-ink-600">{intro}</p>
        </div>

        <div className="divide-y divide-ink-100 rounded-2xl border border-ink-100">
          {items.map((f, i) => {
            const isOpen = open === i;
            return (
              <div key={f.q}>
                <button
                  type="button"
                  onClick={() => setOpen(isOpen ? null : i)}
                  className="flex w-full items-center justify-between gap-4 px-6 py-5 text-left"
                  aria-expanded={isOpen}
                >
                  <span className="font-bold text-ink-900">{f.q}</span>
                  <Icon
                    name="arrow"
                    className={`h-5 w-5 flex-shrink-0 text-brand-600 transition-transform ${
                      isOpen ? "rotate-90" : ""
                    }`}
                  />
                </button>
                <div
                  className={`grid transition-all duration-200 ${
                    isOpen
                      ? "grid-rows-[1fr] opacity-100"
                      : "grid-rows-[0fr] opacity-0"
                  }`}
                >
                  <div className="overflow-hidden">
                    <p className="px-6 pb-5 leading-relaxed text-ink-600">
                      {f.a}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        <p className="mt-8 text-center text-ink-600">
          Still have questions?{" "}
          <a
            href={`tel:${site.phoneRaw}`}
            className="font-bold text-brand-600 hover:text-brand-800"
          >
            Call us at {site.phone}
          </a>{" "}
          — we&apos;re happy to help.
        </p>
      </div>
    </section>
  );
}
