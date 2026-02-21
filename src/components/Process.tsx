import Image from "next/image";
import Link from "next/link";
import { images } from "@/lib/images";

const steps = [
  { title: "Subscribe", description: "Subscribe to a plan & request as many designs as you'd like." },
  { title: "Receive", description: "Receive your design as fast as two business days on average." },
  { title: "Revise", description: "We'll revise the designs until you're 100% satisfied." },
];

export function Process() {
  return (
    <section id="process" className="py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="section-pill mx-auto mb-8 w-fit px-6 py-2">
          <p className="text-center text-sm font-medium tracking-[-0.02em] text-[rgb(var(--text))]">Process</p>
        </div>
        <h2 className="mx-auto max-w-2xl text-center text-4xl font-medium tracking-[-0.05em] text-[rgb(var(--text))] sm:text-5xl md:text-6xl">
          Your designs, <span className="font-serif italic">effortlessly.</span>
        </h2>
        <p className="mx-auto mt-4 max-w-xl text-center text-[rgb(var(--text-muted))]">
          Begin your design journey in three effortless steps.
        </p>

        <div className="mt-16 grid gap-12 md:grid-cols-3 md:gap-8">
          {steps.map((step, i) => (
            <div key={step.title} className="text-center">
              <div className="relative mx-auto aspect-video max-w-sm overflow-hidden rounded-2xl bg-[rgb(var(--bg-card))]">
                <Image
                  src={images.process[i]}
                  alt={step.title}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 33vw"
                />
              </div>
              <h3 className="mt-6 text-2xl font-medium tracking-[-0.02em] text-[rgb(var(--text))]">{step.title}</h3>
              <p className="mt-3 text-[rgb(var(--text-muted))]">{step.description}</p>
              <Link
                href="#book"
                className="mt-6 inline-block text-sm font-medium text-[rgb(var(--text))] underline underline-offset-4 hover:no-underline"
              >
                Book a 15-min call
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
