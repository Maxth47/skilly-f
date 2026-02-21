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
      <section id="logos" className="py-12 md:py-16">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <p className="mb-10 text-center text-sm font-medium tracking-[-0.02em] text-[rgb(var(--text-muted))]">
            Our designs are featured on:
          </p>
          <div
            className="flex justify-center overflow-hidden"
            style={{
              maskImage: "linear-gradient(to right, transparent 0%, black 25%, black 75%, transparent 100%)",
              WebkitMaskImage: "linear-gradient(to right, transparent 0%, black 25%, black 75%, transparent 100%)",
            }}
          >
            <ul className="flex items-center gap-16">
              {images.companyLogos.map((src, i) => (
                <li key={i} className="relative h-8 w-24 shrink-0 opacity-80 md:h-9 md:w-28">
                  <Image src={src} alt="" fill className="object-contain object-center" sizes="112px" />
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section id="testimonial-1" className="py-12 md:py-20">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid gap-10 lg:grid-cols-[1fr,auto] lg:items-center">
            <div className="order-2 lg:order-1">
              <div className="flex gap-1">
                {[1, 2, 3, 4, 5].map((i) => (
                  <Star key={i} />
                ))}
              </div>
              <p className="mt-6 text-xl font-medium leading-relaxed text-[rgb(var(--text))] md:text-2xl">
                Hamza delivers beautiful, highly-converting designs in record time. It&apos;s hard to find a designer
                you can trust with your brand but Hamza and Limitless have earned it. Look forward to working in the
                future.
              </p>
              <p className="mt-6 text-base font-medium tracking-[-0.02em] text-[rgb(var(--text))]">Tony Saoprano</p>
              <p className="text-sm font-medium tracking-[-0.02em] text-[rgb(var(--text-muted))]">CEO of Tryal</p>
            </div>
            <div
              className="relative order-1 aspect-[730/634] max-h-[400px] w-full max-w-md overflow-hidden lg:order-2 lg:max-h-none"
              style={{
                maskImage: "linear-gradient(to right, transparent 0%, black 80%)",
                WebkitMaskImage: "linear-gradient(to right, transparent 0%, black 80%)",
              }}
            >
              <Image
                src={images.testimonialTonyCard}
                alt=""
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
