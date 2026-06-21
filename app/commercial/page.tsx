import type { Metadata } from "next";
import Link from "next/link";
import Icon, { type IconName } from "@/components/Icon";
import CommercialSchema from "@/components/CommercialSchema";
import Placeholder from "@/components/Placeholder";
import Faq from "@/components/sections/Faq";
import Contact from "@/components/sections/Contact";
import { site } from "@/lib/site";
import {
  commercialPropertyTypes,
  commercialBenefits,
  commercialProcess,
  commercialPricing,
  commercialBidIncludes,
  commercialFaqs,
} from "@/lib/commercial";

export const metadata: Metadata = {
  title: `Commercial & Multi-Unit Dryer Vent Cleaning | Metro ${site.city}`,
  description: `Commercial dryer vent cleaning for apartments, HOAs, condos, and laundromats across Metro ${site.city}, TN. Free property bids, flexible scheduling, and documented compliance reports. Call ${site.phone}.`,
  alternates: { canonical: "/commercial" },
  openGraph: {
    title: `Commercial Dryer Vent Cleaning | ${site.name}`,
    description: `Multi-unit and commercial dryer vent cleaning across Metro ${site.city}. Volume pricing and compliance documentation.`,
    url: `${site.url}/commercial`,
    images: ["/logo.png"],
  },
};

export default function CommercialPage() {
  return (
    <>
      <CommercialSchema />

      {/* Hero */}
      <section className="bg-gradient-to-b from-brand-50 to-white pt-28 pb-14 md:pt-32">
        <div className="mx-auto max-w-6xl px-5">
          <nav className="mb-5 text-sm text-ink-500" aria-label="Breadcrumb">
            <Link href="/" className="hover:text-brand-600">
              Home
            </Link>
            <span className="mx-2">/</span>
            <span className="text-ink-700">Commercial</span>
          </nav>

          <div className="grid items-center gap-10 lg:grid-cols-[1.3fr_1fr]">
            <div>
              <span className="inline-flex items-center gap-2 rounded-full bg-brand-100 px-4 py-1.5 text-sm font-semibold text-brand-700">
                <Icon name="building" className="h-4 w-4" />
                For Property Managers, HOAs & Facilities
              </span>
              <h1 className="mt-4 text-4xl font-extrabold leading-[1.12] text-ink-900 sm:text-5xl">
                Commercial &amp; Multi-Unit{" "}
                <span className="text-brand-600">Dryer Vent Cleaning</span>
              </h1>
              <p className="mt-5 text-lg leading-relaxed text-ink-600">
                Protect your property, your residents, and your bottom line.
                We clean dryer vents for apartment communities, condos, HOAs,
                laundromats, and care facilities across Metro {site.city} — with
                volume pricing, flexible scheduling, and the documentation your
                records require.
              </p>

              <div className="mt-7 flex flex-wrap gap-x-5 gap-y-2">
                {[
                  "Volume & contract pricing",
                  "Documented compliance reports",
                  "Minimal resident downtime",
                  "Licensed & insured",
                ].map((b) => (
                  <div
                    key={b}
                    className="flex items-center gap-2 text-sm font-semibold text-ink-700"
                  >
                    <Icon name="check" className="h-5 w-5 text-success" />
                    {b}
                  </div>
                ))}
              </div>

              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <a
                  href={`tel:${site.phoneRaw}`}
                  className="inline-flex items-center justify-center gap-2.5 rounded-lg bg-brand-600 px-8 py-4 text-lg font-bold text-white shadow-lg shadow-brand-600/20 transition-colors hover:bg-brand-800"
                >
                  <Icon name="phone" className="h-5 w-5" />
                  Call {site.phone}
                </a>
                <a
                  href="#contact"
                  className="inline-flex items-center justify-center rounded-lg border-2 border-ink-200 bg-white px-8 py-4 text-lg font-semibold text-ink-700 transition-colors hover:border-brand-600 hover:text-brand-600"
                >
                  Request a Property Bid
                </a>
              </div>
            </div>

            {/* Right column: property photo + pricing model card */}
            <div className="space-y-5">
            <Placeholder
              label="Multi-unit property laundry facility"
              aspect="4 / 3"
              src="/multi-unit-laundry-facility.jpg"
              className="shadow-card"
            />
            <div className="rounded-2xl border border-ink-100 bg-white p-6 shadow-card">
              <h2 className="text-sm font-bold uppercase tracking-wider text-ink-500">
                What Your Free Bid Includes
              </h2>
              <ul className="mt-4 space-y-3">
                {commercialBidIncludes.map((item) => (
                  <li
                    key={item}
                    className="flex items-start gap-2.5 text-sm text-ink-600"
                  >
                    <Icon
                      name="check"
                      className="mt-0.5 h-4 w-4 flex-shrink-0 text-success"
                    />
                    {item}
                  </li>
                ))}
              </ul>
              <a
                href="#contact"
                className="mt-5 flex items-center justify-center gap-2 rounded-lg bg-brand-600 px-5 py-3 font-bold text-white transition-colors hover:bg-brand-800"
              >
                Request a Free Bid
              </a>
              <p className="mt-3 text-center text-xs leading-relaxed text-ink-500">
                {commercialPricing.note}
              </p>
            </div>
            </div>
          </div>
        </div>
      </section>

      {/* Property types */}
      <section className="section bg-white">
        <div className="mx-auto max-w-6xl px-5">
          <div className="mx-auto mb-12 max-w-2xl text-center">
            <span className="text-sm font-bold uppercase tracking-wider text-brand-600">
              Who We Serve
            </span>
            <h2 className="mt-2 text-3xl font-extrabold text-ink-900 sm:text-4xl">
              Built for Multi-Unit Properties
            </h2>
            <p className="mt-3 text-lg text-ink-600">
              From a 20-unit building to a 500-unit community, we scale to your
              property.
            </p>
          </div>

          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {commercialPropertyTypes.map((p) => (
              <div
                key={p.title}
                className="rounded-2xl border border-ink-100 bg-ink-50 p-7"
              >
                <div className="mb-5 flex h-13 w-13 items-center justify-center rounded-xl bg-brand-100 p-3 text-brand-600">
                  <Icon name={p.icon as IconName} className="h-7 w-7" />
                </div>
                <h3 className="text-lg font-bold text-ink-900">{p.title}</h3>
                <p className="mt-2 text-[0.95rem] leading-relaxed text-ink-600">
                  {p.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="section bg-brand-900 text-white">
        <div className="mx-auto max-w-6xl px-5">
          <div className="mx-auto mb-12 max-w-2xl text-center">
            <h2 className="text-3xl font-extrabold sm:text-4xl">
              Why Property Managers Choose Us
            </h2>
            <p className="mt-3 text-lg text-white/75">
              Vent maintenance isn&apos;t just upkeep — it&apos;s risk
              management for your property.
            </p>
          </div>

          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {commercialBenefits.map((b) => (
              <div
                key={b.title}
                className="rounded-2xl border border-white/10 bg-white/[0.07] p-6"
              >
                <div className="flex items-center gap-2.5">
                  <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-success/20">
                    <Icon name="check" className="h-5 w-5 text-success" />
                  </span>
                  <h3 className="font-bold">{b.title}</h3>
                </div>
                <p className="mt-3 text-sm leading-relaxed text-white/70">
                  {b.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="section bg-ink-50">
        <div className="mx-auto max-w-6xl px-5">
          <div className="mx-auto mb-12 max-w-2xl text-center">
            <span className="text-sm font-bold uppercase tracking-wider text-brand-600">
              How It Works
            </span>
            <h2 className="mt-2 text-3xl font-extrabold text-ink-900 sm:text-4xl">
              A Process Designed for Properties
            </h2>
          </div>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {commercialProcess.map((p, i) => (
              <div key={p.step} className="relative">
                {i < commercialProcess.length - 1 && (
                  <div className="absolute left-[calc(50%+2rem)] top-7 hidden h-px w-[calc(100%-4rem)] bg-brand-200 lg:block" />
                )}
                <div className="relative flex flex-col items-center text-center">
                  <div className="flex h-14 w-14 items-center justify-center rounded-full bg-brand-600 text-xl font-extrabold text-white shadow-lg shadow-brand-600/25">
                    {p.step}
                  </div>
                  <h3 className="mt-4 text-lg font-bold text-ink-900">
                    {p.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-ink-600">
                    {p.text}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Faq
        items={commercialFaqs}
        intro="Common questions from property managers, HOA boards, and facility owners."
      />

      <Contact />
    </>
  );
}
