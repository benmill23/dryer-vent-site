import Icon from "@/components/Icon";
import Placeholder from "@/components/Placeholder";
import { whyUs, showReviews, site } from "@/lib/site";

export default function WhyUs() {
  return (
    <section id="why" className="section bg-white">
      <div className="mx-auto max-w-6xl px-5">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          <div className="order-2 lg:order-1">
            <span className="text-sm font-bold uppercase tracking-wider text-brand-600">
              Why Choose Us
            </span>
            <h2 className="mt-2 text-3xl font-extrabold text-ink-900 sm:text-4xl">
              {site.city}&apos;s Trusted Dryer Vent Experts
            </h2>
            <p className="mt-4 text-lg leading-relaxed text-ink-600">
              For over {site.yearsExperience.replace("+", "")} years, we&apos;ve
              been the name homeowners trust for honest, professional service.
              When you choose {site.shortName}, you get a local family-owned team
              that treats your home like our own.
            </p>

            <ul className="mt-8 grid gap-5 sm:grid-cols-2">
              {whyUs.map((w) => (
                <li key={w.title} className="flex gap-4">
                  <span className="mt-0.5 flex h-7 w-7 flex-shrink-0 items-center justify-center rounded-full bg-brand-600">
                    <Icon name="check" className="h-4 w-4 text-white" />
                  </span>
                  <div>
                    <h4 className="font-bold text-ink-900">{w.title}</h4>
                    <p className="mt-1 text-sm text-ink-600">{w.text}</p>
                  </div>
                </li>
              ))}
            </ul>
          </div>

          <div className="order-1 flex justify-center lg:order-2">
            <div className="relative w-full max-w-md">
              <div className="rounded-3xl bg-gradient-to-br from-brand-600 to-brand-900 p-6 text-center text-white shadow-2xl">
                <Placeholder
                  label="Dryer vent duct being professionally cleaned"
                  aspect="4 / 3"
                  src="/industrial-dryer-vent-cleaning.jpg"
                  className="ring-1 ring-white/20"
                />
                <div className="mt-5 grid grid-cols-2 gap-4">
                  <div className="rounded-xl bg-white/10 p-4">
                    <div className="text-3xl font-extrabold">
                      {site.yearsExperience}
                    </div>
                    <div className="text-xs uppercase tracking-wide text-white/70">
                      Years Experience
                    </div>
                  </div>
                  <div className="rounded-xl bg-white/10 p-4">
                    <div className="text-3xl font-extrabold">Same</div>
                    <div className="text-xs uppercase tracking-wide text-white/70">
                      Day Service
                    </div>
                  </div>
                  <div className="rounded-xl bg-white/10 p-4">
                    <div className="text-3xl font-extrabold">100%</div>
                    <div className="text-xs uppercase tracking-wide text-white/70">
                      Licensed &amp; Insured
                    </div>
                  </div>
                  <div className="rounded-xl bg-white/10 p-4">
                    <div className="text-3xl font-extrabold">Local</div>
                    <div className="text-xs uppercase tracking-wide text-white/70">
                      Family Owned
                    </div>
                  </div>
                </div>
              </div>

              {/* Trust badge attached to the photo */}
              <div className="absolute -bottom-6 left-2 flex items-center gap-3 rounded-2xl border border-ink-100 bg-white p-4 shadow-xl ring-1 ring-black/5 sm:-left-6">
                <span className="flex h-11 w-11 items-center justify-center rounded-full bg-brand-100 text-base font-extrabold text-brand-700">
                  {site.yearsExperience}
                </span>
                <span className="text-left">
                  {showReviews && (
                    <span className="block text-sm text-amber-400">★★★★★</span>
                  )}
                  <span className="block text-xs font-semibold text-ink-600">
                    Trusted across Metro {site.city}
                  </span>
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
