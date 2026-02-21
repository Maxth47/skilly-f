import Image from "next/image";
import { images } from "@/lib/images";

const benefits = [
  {
    title: "Submit Unlimited Requests",
    description:
      "Submit as many design requests as you like and we'll get to work on them, one by one.",
  },
  {
    title: "Manage with Trello",
    description:
      "Manage your design board using Trello. View active, queued and completed tasks with ease.",
  },
  {
    title: "Pause Anytime",
    description:
      "No more requests for the now? Just hit pause and resume your subscription at a future date.",
  },
];

export function Benefits() {
  return (
    <section id="benefits" className="py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="section-pill mx-auto mb-8 w-fit px-6 py-2">
          <p className="text-center text-sm font-medium tracking-[-0.02em] text-[rgb(var(--text))]">Benefits</p>
        </div>
        <h2 className="mx-auto max-w-2xl text-center text-4xl font-medium tracking-[-0.05em] text-[rgb(var(--text))] sm:text-5xl md:text-6xl">
          Fast, quality <span className="font-serif italic">& limitless.</span>
        </h2>
        <p className="mx-auto mt-4 max-w-2xl text-center text-[rgb(var(--text-muted))]">
          Limitless replaces unreliable freelancers and expensive agencies for one flat monthly fee, with
          highly-converting designs delivered so fast that it will blow your mind.
        </p>

        <div className="mx-auto mt-16 max-w-2xl">
          <p className="text-center text-lg font-medium text-[rgb(var(--text))]">
            Getting design done was such a pain. I am so glad we found Limitless, the work is incredible and the
            process is refreshingly painless.
          </p>
          <div className="mt-6 flex flex-col items-center gap-3 sm:flex-row sm:justify-center sm:gap-4">
            <div className="relative h-14 w-14 shrink-0 overflow-hidden rounded-full bg-[rgb(var(--bg-card))]">
              <Image
                src={images.testimonialJenny}
                alt="Jenny London"
                fill
                className="object-cover"
                sizes="56px"
              />
            </div>
            <div className="text-center sm:text-left">
              <p className="font-medium text-[rgb(var(--text))]">Jenny London</p>
              <p className="text-sm text-[rgb(var(--text-muted))]">Founder of Kinect</p>
            </div>
          </div>
        </div>

        <div className="mt-20 grid gap-8 md:grid-cols-3">
          {benefits.map((benefit, i) => (
            <div
              key={benefit.title}
              className="overflow-hidden rounded-2xl border border-white/10 bg-[rgb(var(--bg-card))]"
            >
              <div className="relative aspect-[16/10] w-full">
                <Image
                  src={images.benefits[i]}
                  alt={benefit.title}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 33vw"
                />
              </div>
              <div className="p-8">
                <h3 className="text-xl font-medium text-[rgb(var(--text))]">{benefit.title}</h3>
                <p className="mt-3 text-[rgb(var(--text-muted))]">{benefit.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
