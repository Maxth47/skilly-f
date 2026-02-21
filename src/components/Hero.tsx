import Link from "next/link";

export function Hero() {
  return (
    <section className="relative overflow-hidden pt-28 pb-24 md:pt-36 md:pb-32">
      <div className="mx-auto max-w-7xl px-6 text-center lg:px-8">
        <p className="mb-6 inline-block rounded-full border border-[var(--border)] bg-[var(--background)] px-4 py-1.5 text-sm font-medium text-[var(--muted)]">
          Hurry, only 3 spots left.
        </p>
        <h1 className="mx-auto max-w-4xl text-4xl font-semibold leading-[1.1] tracking-tight text-[var(--foreground)] sm:text-5xl md:text-6xl lg:text-7xl">
          The truly Limitless design subscription.
        </h1>
        <p className="mx-auto mt-6 max-w-2xl text-lg text-[var(--muted)] md:text-xl">
          Say goodbye to expensive freelancers, and hello to limitless, lightning fast design.
        </p>
        <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
          <Link
            href="#book"
            className="inline-flex items-center justify-center rounded-full bg-[var(--foreground)] px-8 py-4 text-base font-medium text-white transition-opacity hover:opacity-90"
          >
            Book a call
          </Link>
          <Link
            href="#pricing"
            className="inline-flex items-center justify-center rounded-full border border-[var(--border)] bg-white px-8 py-4 text-base font-medium text-[var(--foreground)] transition-colors hover:bg-neutral-50"
          >
            See plans
          </Link>
        </div>
      </div>
    </section>
  );
}
