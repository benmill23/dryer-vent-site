"use client";

import { useState, type FormEvent } from "react";
import { site } from "@/lib/site";

type Status = "idle" | "submitting" | "success" | "error";

// Leads are delivered by FormSubmit.co (free, no account, no server needed).
// Leads go to the email below. By default that's `site.email` from lib/site.ts
// — change it there, or override with NEXT_PUBLIC_FORMSUBMIT_EMAIL in .env.local.
//
// ⚠️ One-time activation: the FIRST time the form is submitted, FormSubmit emails
// that address a "Confirm your email" link. Click it once and the form is live;
// every submission after that lands straight in the inbox.
const LEAD_EMAIL =
  process.env.NEXT_PUBLIC_FORMSUBMIT_EMAIL || site.email;

export default function ContactForm() {
  const [status, setStatus] = useState<Status>("idle");
  const [error, setError] = useState("");

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("submitting");
    setError("");

    const form = e.currentTarget;
    const data = Object.fromEntries(new FormData(form));

    try {
      const res = await fetch(`https://formsubmit.co/ajax/${LEAD_EMAIL}`, {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify({
          _subject: `New Lead from ${site.name} Website`,
          _template: "table", // clean, readable email layout
          _captcha: "false", // we use our own honeypot below
          ...data,
        }),
      });
      const json = await res.json();
      // FormSubmit returns success as the string "true".
      if (json.success === "true" || json.success === true) {
        setStatus("success");
        form.reset();
      } else {
        throw new Error(json.message || "Submission failed");
      }
    } catch {
      setStatus("error");
      setError(
        "Something went wrong. Please call us at " + site.phone + " instead.",
      );
    }
  }

  if (status === "success") {
    return (
      <div className="rounded-2xl border border-success/30 bg-success/10 p-8 text-center">
        <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-success text-white">
          <svg viewBox="0 0 24 24" fill="currentColor" className="h-8 w-8">
            <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z" />
          </svg>
        </div>
        <h3 className="mt-4 text-xl font-bold text-ink-900">Request Received!</h3>
        <p className="mt-2 text-ink-600">
          Thanks for reaching out. We&apos;ll contact you shortly to confirm your
          appointment. Need service right now?
        </p>
        <a
          href={`tel:${site.phoneRaw}`}
          className="mt-4 inline-block font-bold text-brand-600 hover:text-brand-800"
        >
          Call {site.phone}
        </a>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="rounded-2xl border border-ink-100 bg-ink-50 p-7 sm:p-8"
    >
      <h3 className="text-xl font-bold text-ink-900">Schedule Your Service</h3>
      <p className="mt-1 text-ink-600">
        Fill out the form and we&apos;ll contact you to confirm your appointment.
      </p>

      {/* Honeypot — FormSubmit silently drops any submission where _honey is filled */}
      <input
        type="text"
        name="_honey"
        tabIndex={-1}
        autoComplete="off"
        className="hidden"
        aria-hidden="true"
      />

      <div className="mt-6 space-y-4">
        <Field label="Name" name="name" type="text" required placeholder="Your name" />
        <Field
          label="Phone Number"
          name="phone"
          type="tel"
          required
          placeholder="(615) 000-0000"
        />
        <Field
          label="Email (optional)"
          name="email"
          type="email"
          placeholder="you@example.com"
        />
        <div>
          <label
            htmlFor="message"
            className="mb-1.5 block text-sm font-semibold text-ink-700"
          >
            How can we help?
          </label>
          <textarea
            id="message"
            name="message"
            rows={4}
            placeholder="Describe your dryer vent issue or the service you need…"
            className="w-full resize-y rounded-lg border border-ink-200 bg-white px-3.5 py-3 text-base outline-none transition-colors focus:border-brand-500"
          />
        </div>
      </div>

      {status === "error" && (
        <p className="mt-4 rounded-lg bg-red-50 px-4 py-3 text-sm font-medium text-red-700">
          {error}
        </p>
      )}

      <button
        type="submit"
        disabled={status === "submitting"}
        className="mt-6 w-full rounded-lg bg-brand-600 px-6 py-3.5 text-base font-bold text-white transition-colors hover:bg-brand-800 disabled:cursor-not-allowed disabled:opacity-70"
      >
        {status === "submitting" ? "Sending…" : "Request My Appointment"}
      </button>
      <p className="mt-3 text-center text-xs text-ink-500">
        We respect your privacy. Your info is only used to contact you about
        service.
      </p>
    </form>
  );
}

function Field({
  label,
  name,
  type,
  required,
  placeholder,
}: {
  label: string;
  name: string;
  type: string;
  required?: boolean;
  placeholder?: string;
}) {
  return (
    <div>
      <label
        htmlFor={name}
        className="mb-1.5 block text-sm font-semibold text-ink-700"
      >
        {label}
      </label>
      <input
        id={name}
        name={name}
        type={type}
        required={required}
        placeholder={placeholder}
        className="w-full rounded-lg border border-ink-200 bg-white px-3.5 py-3 text-base outline-none transition-colors focus:border-brand-500"
      />
    </div>
  );
}
