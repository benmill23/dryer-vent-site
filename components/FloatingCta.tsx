"use client";

import { useState } from "react";
import Icon from "@/components/Icon";
import { site } from "@/lib/site";

/** Persistent call-to-action pill that floats above all page content (desktop). */
export default function FloatingCta() {
  const [closed, setClosed] = useState(false);
  if (closed) return null;

  return (
    <div className="floating-cta" aria-label="Call for dryer vent service">
      <button
        type="button"
        className="fc-close"
        onClick={() => setClosed(true)}
        aria-label="Dismiss"
      >
        <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
          <path d="M19 6.41 17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z" />
        </svg>
      </button>
      <div className="fc-text">
        <span className="t1">Dryer vent clogged?</span>
        <span className="t2">Same-day service</span>
      </div>
      <a className="fc-btn" href={`tel:${site.phoneRaw}`}>
        <Icon name="phone" />
        Call now
      </a>
    </div>
  );
}
