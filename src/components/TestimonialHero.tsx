import Image from "next/image";
import { images } from "@/lib/images";

function Star() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256" className="h-5 w-5 shrink-0 fill-white">
      <path d="M234.5,114.38l-45.1,39.36,13.51,58.6a16,16,0,0,1-23.84,17.34l-51.11-31-51,31a16,16,0,0,1-23.84-17.34L66.61,153.8,21.5,114.38a16,16,0,0,1,9.11-28.06l59.46-5.15,23.21-55.36a15.95,15.95,0,0,1,29.44,0h0L166,81.17l59.44,5.15a16,16,0,0,1,9.11,28.06Z" />
    </svg>
  );
}

export function TestimonialHero() {
  return (
    <>
      <section className="py-12 md:py-16" aria-label="Logos">
        <div id="logos" className="mx-auto max-w-7xl px-6 lg:px-8">
          <p
            className="mb-10 text-center text-sm font-medium tracking-[-0.02em] text-[rgb(var(--text-muted))]"
            style={{ lineHeight: "1.4em" }}
          >
            Our designs are featured on:
          </p>
          <div
            className="flex w-full place-items-center overflow-hidden"
            style={{
              maskImage: "linear-gradient(to right, rgba(0, 0, 0, 0) 0%, rgb(0, 0, 0) 25%, rgb(0, 0, 0) 75%, rgba(0, 0, 0, 0) 100%)",
              WebkitMaskImage: "linear-gradient(to right, rgba(0, 0, 0, 0) 0%, rgb(0, 0, 0) 25%, rgb(0, 0, 0) 75%, rgba(0, 0, 0, 0) 100%)",
            }}
          >
            <ul className="flex w-max list-none flex-row items-center gap-16 p-0 animate-logos-marquee">
              {[...images.companyLogos, ...images.companyLogos].map((src, i) => (
                <li key={i} className="relative h-8 w-24 shrink-0 md:h-9 md:w-28" aria-hidden>
                  <Image src={src} alt="" fill className="object-contain object-center" sizes="112px" />
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section aria-label="Testimonial" className="py-12 md:py-20">
        <div
          id="testimonial-1"
          className="mx-auto max-w-7xl overflow-hidden rounded-2xl border border-white/10 bg-[rgb(var(--bg-card))]"
          data-border="true"
        >
          <div className="grid gap-0 lg:grid-cols-2 lg:items-stretch">
            {/* Content / Information - left half */}
            <div className="order-2 px-6 py-8 lg:order-1 lg:flex lg:flex-col lg:justify-center lg:px-10 lg:py-12">
              <div className="flex gap-1">
                {[1, 2, 3, 4, 5].map((i) => (
                  <Star key={i} />
                ))}
              </div>
              <p
                className="mt-6 text-xl font-medium text-[rgb(var(--text))] md:text-2xl"
                style={{ lineHeight: "140%" }}
              >
                The quality and speed of delivery completely exceeded our expectations. Skilly transformed our brand
                identity and the results speak for themselves. Couldn&apos;t recommend them enough.
              </p>
              <div className="mt-6">
                <h5
                  className="font-medium tracking-[-0.02em] text-[rgb(var(--text))]"
                  style={{ lineHeight: "140%" }}
                >
                  Marcus Chen
                </h5>
                <p
                  className="text-xs font-medium tracking-[-0.02em] text-[rgb(var(--text-muted))]"
                  style={{ lineHeight: "140%" }}
                >
                  CTO of Vantage
                </p>
              </div>
            </div>
            {/* Image - right half, soft fade into card */}
            <div className="relative order-1 min-h-[280px] w-full overflow-hidden lg:order-2 lg:min-h-[320px]">
              <div
                className="absolute inset-0"
                style={{
                  maskImage: "linear-gradient(to right, rgba(0,0,0,0) 0%, rgba(0,0,0,1) 80%)",
                  WebkitMaskImage: "linear-gradient(to right, rgba(0,0,0,0) 0%, rgba(0,0,0,1) 80%)",
                }}
              >
                <Image
                  src={images.testimonialTonyCard}
                  alt=""
                  fill
                  className="object-cover object-right"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
