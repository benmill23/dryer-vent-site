import Icon, { type IconName } from "@/components/Icon";
import Wave from "@/components/Wave";
import { risks } from "@/lib/site";

export default function Risks() {
  return (
    <section className="relative overflow-hidden bg-brand-900 pt-12 pb-36 text-white md:pb-44">
      <div className="relative mx-auto max-w-6xl px-5">
        <div className="mx-auto mb-12 max-w-2xl text-center">
          <h2 className="text-3xl font-extrabold sm:text-4xl">
            The Risks of a Neglected Dryer Vent
          </h2>
          <p className="mt-3 text-lg text-white/75">
            A clogged dryer vent is more than an inconvenience — it&apos;s a
            serious safety hazard that affects your home, health, and wallet.
          </p>
        </div>

        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {risks.map((r) => (
            <div
              key={r.title}
              className="rounded-2xl border border-white/10 bg-white/[0.07] p-7 text-center"
            >
              <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-xl bg-white/10">
                <Icon
                  name={r.icon as IconName}
                  className="h-7 w-7"
                  style={{ color: r.color }}
                />
              </div>
              <h3 className="text-lg font-bold">{r.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-white/70">
                {r.text}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-12 rounded-2xl border border-red-400/30 bg-red-500/15 p-6 text-center">
          <p className="text-base leading-relaxed sm:text-lg">
            According to the National Fire Protection Association, clothes dryers
            cause an average of{" "}
            <strong className="text-red-300">
              ~16,000 home fires every year
            </strong>
            , and <strong className="text-red-300">failure to clean</strong>{" "}
            is the leading factor. Don&apos;t wait until it&apos;s too late.
          </p>
        </div>
      </div>

      {/* Curve down into the white content below */}
      <Wave fill="#ffffff" />
    </section>
  );
}
