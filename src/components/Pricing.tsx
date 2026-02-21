import Link from "next/link";

const planFeatures = [
  "Unlimited design requests",
  "One request at a time",
  "Average 48 hours delivery",
  "Unlimited revisions",
  "Unlimited brands",
  "Invite unlimited users",
  "Pause or cancel anytime",
];

export function Pricing() {
  return (
    <section id="pricing" className="py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="section-pill mx-auto mb-8 w-fit px-6 py-2">
          <p className="text-center text-sm font-medium tracking-[-0.02em] text-[rgb(var(--text))]">Pricing</p>
        </div>
        <h2 className="mx-auto max-w-2xl text-center text-4xl font-medium tracking-[-0.05em] text-[rgb(var(--text))] sm:text-5xl md:text-6xl lg:text-7xl">
          Pricing that&apos;s so <span className="font-serif italic">simple.</span>
        </h2>
        <p className="mx-auto mt-4 max-w-xl text-center text-[rgb(var(--text-muted))]">
          We like to keep things simple with one, limitless plan.
        </p>

        <div className="mx-auto mt-14 max-w-lg">
          <div className="rounded-3xl border-t border-white/10 bg-[rgb(var(--bg-card))] p-8 md:p-10">
            <div className="section-pill mb-4 inline-flex items-center gap-2 px-4 py-2">
              <span className="green-dot h-2 w-2 rounded-full" />
              <span className="text-sm font-medium text-[rgb(var(--text))]">3 spots left</span>
            </div>
            <p className="text-4xl font-medium tracking-tight text-[rgb(var(--text))] md:text-5xl">
              $2,989<span className="text-2xl font-normal text-[rgb(var(--text-muted))]">/month</span>
            </p>
            <p className="mt-2 text-[rgb(var(--text-muted))]">One request at a time. Pause or cancel anytime.</p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Link
                href="#subscribe"
                className="flex flex-1 items-center justify-center rounded-full bg-[rgb(var(--accent))] py-4 text-base font-medium text-[rgb(var(--text))] shadow-[0_4px_10px_-2px_rgba(0,0,0,0.05),0_2px_2px_-1px_rgba(0,0,0,0.1),0_0_0_1px_rgba(98,20,217,0.12)] transition-opacity hover:opacity-90"
              >
                Subscribe
              </Link>
              <Link
                href="#book"
                className="flex flex-1 items-center justify-center rounded-full border border-white/10 bg-[rgba(13,13,13,0.5)] py-4 text-base font-medium text-[rgb(var(--text))] transition-opacity hover:opacity-90"
              >
                Book a call
              </Link>
            </div>
            <p className="mt-6 flex items-center gap-2 text-sm text-[rgb(var(--text-muted))]">
              <span>Framer Development</span>
              <span className="font-medium text-[rgb(var(--text))]">+ $500</span>
            </p>
            <ul className="mt-8 space-y-4 border-t border-white/10 pt-8">
              {planFeatures.map((feature) => (
                <li key={feature} className="flex items-center gap-3 text-[rgb(var(--text))]">
                  <svg className="h-5 w-5 shrink-0 text-[rgb(var(--text))]" fill="currentColor" viewBox="0 0 20 20">
                    <path
                      fillRule="evenodd"
                      d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                      clipRule="evenodd"
                    />
                  </svg>
                  <span className="capitalize">{feature}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
