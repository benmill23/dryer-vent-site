"use client";

import Icon from "@/components/Icon";
import { site } from "@/lib/site";

// Fixed call/quote bar pinned to the bottom on mobile — keeps the primary
// action one tap away no matter how far the visitor scrolls.
export default function StickyCta() {
  return (
    <div className="fixed inset-x-0 bottom-0 z-50 grid grid-cols-2 gap-px border-t border-ink-200 bg-ink-200 shadow-[0_-4px_20px_rgba(0,0,0,0.08)] lg:hidden">
      <a
        href={`tel:${site.phoneRaw}`}
        className="flex items-center justify-center gap-2 bg-brand-600 py-4 font-bold text-white"
      >
        <Icon name="phone" className="h-5 w-5" />
        Call Now
      </a>
      <a
        href="#contact"
        className="flex items-center justify-center gap-2 bg-white py-4 font-bold text-brand-700"
      >
        <Icon name="email" className="h-5 w-5" />
        Free Quote
      </a>
    </div>
  );
}
