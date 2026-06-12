import Icon from "@/components/Icon";
import { packages, addOns, guarantee, site } from "@/lib/site";

export default function Pricing() {
  return (
    <section id="pricing" className="section bg-white">
      <div className="mx-auto max-w-6xl px-5">
        <div className="mx-auto mb-12 max-w-2xl text-center">
          <span className="text-sm font-bold uppercase tracking-wider text-brand-600">
            Simple, Honest Pricing
          </span>
          <h2 className="mt-2 text-3xl font-extrabold text-ink-900 sm:text-4xl">
            Upfront Pricing, No Surprises
          </h2>
          <p className="mt-3 text-lg text-ink-600">
            We quote a flat price before any work begins. No trip fees, no
            inspection fees, no hidden charges — just honest service.
          </p>
        </div>

        <div className="grid items-start gap-6 lg:grid-cols-3">
          {packages.map((p) => (
            <div
              key={p.name}
              className={`relative flex flex-col rounded-2xl p-7 ${
                p.featured
                  ? "border-2 border-brand-600 bg-white shadow-card"
                  : "border border-ink-100 bg-ink-50"
              }`}
            >
              {p.featured && (
                <span className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-brand-600 px-4 py-1 text-xs font-bold uppercase tracking-wide text-white">
                  Most Popular
                </span>
              )}

              <h3 className="text-lg font-bold text-ink-900">{p.name}</h3>
              <p className="text-sm text-ink-500">{p.tagline}</p>

              <div className="mt-4 flex items-baseline gap-1">
                {p.priceFrom === "Custom" ? (
                  <span className="text-3xl font-extrabold text-ink-900">
                    Custom Quote
                  </span>
                ) : (
                  <>
                    <span className="text-sm font-semibold text-ink-500">
                      from
                    </span>
                    <span className="text-4xl font-extrabold text-ink-900">
                      ${p.priceFrom}
                    </span>
                  </>
                )}
              </div>

              <p className="mt-3 text-sm leading-relaxed text-ink-600">
                {p.blurb}
              </p>

              {p.tiers.length > 0 && (
                <div className="mt-4 space-y-1.5 rounded-xl bg-brand-50 p-4">
                  {p.tiers.map((t) => (
                    <div
                      key={t.label}
                      className="flex items-center justify-between text-sm"
                    >
                      <span className="text-ink-600">{t.label}</span>
                      <span className="font-bold text-brand-800">
                        ${t.price}
                      </span>
                    </div>
                  ))}
                </div>
              )}

              <ul className="mt-5 flex-1 space-y-2.5">
                {p.features.map((f) => (
                  <li key={f} className="flex gap-2.5 text-sm text-ink-700">
                    <Icon
                      name="check"
                      className="mt-0.5 h-4 w-4 flex-shrink-0 text-success"
                    />
                    {f}
                  </li>
                ))}
              </ul>

              <a
                href="#contact"
                className={`mt-6 inline-flex items-center justify-center gap-2 rounded-lg px-6 py-3.5 font-bold transition-colors ${
                  p.featured
                    ? "bg-brand-600 text-white hover:bg-brand-800"
                    : "border-2 border-ink-200 text-ink-700 hover:border-brand-600 hover:text-brand-600"
                }`}
              >
                {p.cta}
              </a>
            </div>
          ))}
        </div>

        {/* Add-ons + guarantee */}
        <div className="mt-8 grid gap-5 lg:grid-cols-3">
          <div className="rounded-2xl border border-ink-100 bg-ink-50 p-6 lg:col-span-2">
            <h3 className="text-sm font-bold uppercase tracking-wider text-ink-500">
              Popular Add-Ons
            </h3>
            <div className="mt-3 grid gap-2 sm:grid-cols-3">
              {addOns.map((a) => (
                <div
                  key={a.name}
                  className="rounded-xl bg-white p-4 text-center shadow-soft"
                >
                  <div className="text-lg font-extrabold text-brand-700">
                    ${a.price}
                  </div>
                  <div className="mt-1 text-xs leading-snug text-ink-600">
                    {a.name}
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="flex flex-col justify-center rounded-2xl bg-gradient-to-br from-brand-600 to-brand-900 p-6 text-white">
            <div className="flex items-center gap-2 font-bold">
              <Icon name="shield" className="h-5 w-5" />
              Our Guarantee
            </div>
            <p className="mt-2 text-sm leading-relaxed text-white/90">
              {guarantee}
            </p>
          </div>
        </div>

        <p className="mt-6 text-center text-sm text-ink-500">
          Pricing varies by vent length, condition, and access. Call{" "}
          <a
            href={`tel:${site.phoneRaw}`}
            className="font-semibold text-brand-600"
          >
            {site.phone}
          </a>{" "}
          for an exact, no-obligation quote.
        </p>
      </div>
    </section>
  );
}
