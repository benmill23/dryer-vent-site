import { process } from "@/lib/site";

export default function Process() {
  return (
    <section className="section bg-ink-50">
      <div className="mx-auto max-w-6xl px-5">
        <div className="mx-auto mb-12 max-w-2xl text-center">
          <span className="text-sm font-bold uppercase tracking-wider text-brand-600">
            Simple & Stress-Free
          </span>
          <h2 className="mt-2 text-3xl font-extrabold text-ink-900 sm:text-4xl">
            How It Works
          </h2>
          <p className="mt-3 text-lg text-ink-600">
            From your first call to a spotless, safe vent — here&apos;s what to
            expect.
          </p>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {process.map((p, i) => (
            <div key={p.step} className="relative">
              {i < process.length - 1 && (
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
  );
}
