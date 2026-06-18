import Image from "next/image";
import Icon from "@/components/Icon";
import Wave from "@/components/Wave";
import { site, trustBadges } from "@/lib/site";

// Transitional "palette-cleanser" band between the intro (hero + risks) and the
// main content. The brand emblem floats in the middle of the page over a bright
// blue background, bridging the deep-blue band above and the white below.
export default function FloatingBand() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-brand-600 to-brand-800 pt-16 pb-36 text-center text-white md:pb-44">
      {/* decorative glows */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -left-24 top-10 h-72 w-72 rounded-full bg-white/10 blur-3xl"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-20 bottom-20 h-72 w-72 rounded-full bg-brand-400/20 blur-3xl"
      />

      <div className="relative mx-auto max-w-3xl px-5">
        {/* Floating technician photo */}
        <div className="animate-float mx-auto w-full max-w-md overflow-hidden rounded-3xl shadow-2xl ring-4 ring-white/25">
          <Image
            src="/technician.png"
            alt={`${site.shortName} technician cleaning an exterior dryer vent`}
            width={1713}
            height={918}
            sizes="(max-width: 768px) 100vw, 28rem"
            className="h-full w-full object-cover"
          />
        </div>

        <h2 className="mt-8 text-3xl font-extrabold leading-tight sm:text-4xl">
          Local, Family-Owned &amp; Trusted Since {site.foundedYear}
        </h2>
        <p className="mx-auto mt-3 max-w-xl text-lg leading-relaxed text-white/85">
          One call puts a licensed, insured {site.shortName} technician at your
          door — often the same day — across Metro {site.city}.
        </p>

        <div className="mt-7 flex flex-wrap justify-center gap-x-6 gap-y-3">
          {trustBadges.map((b) => (
            <div
              key={b}
              className="flex items-center gap-2 text-sm font-semibold text-white"
            >
              <span className="flex h-6 w-6 items-center justify-center rounded-full bg-white/15">
                <Icon name="check" className="h-4 w-4 text-success" />
              </span>
              {b}
            </div>
          ))}
        </div>

        <a
          href={`tel:${site.phoneRaw}`}
          className="cta-glow mt-9 inline-flex items-center justify-center gap-2.5 rounded-lg bg-white px-8 py-4 text-lg font-bold text-brand-700 transition-colors hover:bg-brand-50"
        >
          <Icon name="phone" className="h-5 w-5" />
          Call {site.phone}
        </a>
      </div>

      {/* Curve down into the white content below */}
      <Wave fill="#ffffff" layered />
    </section>
  );
}
