import Image from "next/image";
import { images } from "@/lib/images";
import { AnimateOnScroll } from "./AnimateOnScroll";

function Star() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256" className="h-5 w-5 shrink-0 fill-white">
      <path d="M234.5,114.38l-45.1,39.36,13.51,58.6a16,16,0,0,1-23.84,17.34l-51.11-31-51,31a16,16,0,0,1-23.84-17.34L66.61,153.8,21.5,114.38a16,16,0,0,1,9.11-28.06l59.46-5.15,23.21-55.36a15.95,15.95,0,0,1,29.44,0h0L166,81.17l59.44,5.15a16,16,0,0,1,9.11,28.06Z" />
    </svg>
  );
}

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
    <section aria-label="Benefits" className="py-20 md:py-28">
      <div
        id="benefits"
        className="mx-auto max-w-7xl px-6 lg:px-8"
        data-border="true"
      >
        {/* Text / Header */}
        <AnimateOnScroll animation="fade-in-up" duration={0.6}>
          <div className="section-pill mx-auto mb-8 w-fit px-6 py-2">
            <p className="text-center text-sm font-medium tracking-[-0.02em] text-[rgb(var(--text))]" style={{ lineHeight: "1em" }}>
              Benefits
            </p>
          </div>
        </AnimateOnScroll>
        <AnimateOnScroll animation="fade-in-up" duration={0.7} delay={0.1}>
          <div className="mx-auto max-w-2xl text-center">
            <h2
              className="font-medium tracking-[-0.05em] text-[rgb(var(--text))]"
              style={{ fontSize: "clamp(2.25rem, 5vw, 70px)", lineHeight: "1em" }}
            >
              Fast, quality <span className="font-serif italic">&</span> <span className="font-serif italic">skilly.</span>
            </h2>
            <p className="mt-4 text-[rgb(var(--text-muted))]">
              Skilly replaces unreliable freelancers and expensive agencies for one flat monthly fee, with
              highly-converting designs delivered so fast that it will blow your mind.
            </p>
          </div>
        </AnimateOnScroll>

        {/* Testimonial + Features */}
        <div className="mt-16 flex flex-col gap-12 lg:flex-row lg:items-start lg:gap-16">
          {/* Cards/Testimonial - Jenny London */}
          <AnimateOnScroll animation="slide-in-left" duration={0.8} delay={0.2} className="flex-1">
            <div
              className="overflow-hidden rounded-2xl border border-white/10 bg-[rgb(var(--bg-card))]"
              data-border="true"
            >
              <div className="flex flex-col md:flex-row md:items-stretch">
                <div className="flex flex-col justify-center px-6 py-8 md:flex-1 md:px-10 md:py-12">
                  <div className="flex gap-1">
                    {[1, 2, 3, 4, 5].map((i) => (
                      <Star key={i} />
                    ))}
                  </div>
                  <p
                    className="mt-6 text-xl font-medium text-[rgb(var(--text))] md:text-2xl"
                    style={{ lineHeight: "140%" }}
                  >
                    We used to juggle three different agencies for our design work. Skilly replaced all of them and
                    the output quality is on another level. Absolute game changer for our team.
                  </p>
                  <div className="mt-6">
                    <h5
                      className="font-medium tracking-[-0.02em] text-[rgb(var(--text))]"
                      style={{ lineHeight: "140%" }}
                    >
                      Sarah Mitchell
                    </h5>
                    <p
                      className="text-xs font-medium tracking-[-0.02em] text-[rgb(var(--text-muted))]"
                      style={{ lineHeight: "140%" }}
                    >
                      Founder of Novala
                    </p>
                  </div>
                </div>
                <div
                  className="relative min-h-[280px] w-full md:w-[45%] md:min-h-[320px]"
                  style={{
                    maskImage: "linear-gradient(to right, rgba(0,0,0,0) 0%, rgba(0,0,0,1) 80%)",
                    WebkitMaskImage: "linear-gradient(to right, rgba(0,0,0,0) 0%, rgba(0,0,0,1) 80%)",
                  }}
                >
                  <Image
                    src={images.testimonialJenny}
                    alt=""
                    fill
                    className="object-cover"
                    sizes="(max-width: 1024px) 100vw, 40vw"
                  />
                </div>
              </div>
            </div>
          </AnimateOnScroll>

          {/* Benefits - 3 features (text only) */}
          <div className="flex flex-col gap-10 lg:w-[320px] lg:shrink-0 lg:gap-8">
            {benefits.map((benefit, i) => (
              <AnimateOnScroll key={benefit.title} animation="slide-in-right" duration={0.6} delay={0.2 + i * 0.12}>
                <div>
                  <h1 className="text-[28px] font-medium leading-none tracking-[-0.02em] text-[rgb(var(--text))]">
                    {benefit.title}
                  </h1>
                  <p className="mt-3 text-[rgb(var(--text-muted))]">
                    {benefit.description}
                  </p>
                </div>
              </AnimateOnScroll>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
