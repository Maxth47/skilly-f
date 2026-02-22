import Image from "next/image";
import Link from "next/link";
import { images } from "@/lib/images";
import { AnimateOnScroll } from "./AnimateOnScroll";

export function Tutorials() {
  return (
    <section id="tutorials" className="py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <AnimateOnScroll animation="fade-in-up" duration={0.8}>
          <div className="rounded-3xl border border-white/10 bg-[rgb(var(--bg-card))] p-8 md:p-12 lg:p-16">
            <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
              <div>
                <h2 className="text-4xl font-medium tracking-[-0.05em] text-[rgb(var(--text))] sm:text-5xl md:text-6xl">
                  <span className="font-serif italic">Skilly</span> Tutorials
                </h2>
                <p className="mt-6 text-lg text-[rgb(var(--text-muted))]">
                  Skilly comes with a complimentary 8-part video tutorial series to help you get set up and customise
                  your template.
                </p>
                <div className="mt-8 flex flex-wrap gap-4">
                  <Link
                    href="#"
                    className="inline-flex rounded-full bg-[rgb(var(--accent))] px-8 py-4 text-base font-medium text-[rgb(var(--text))] shadow-[0_4px_10px_-2px_rgba(0,0,0,0.05),0_2px_2px_-1px_rgba(0,0,0,0.1),0_0_0_1px_rgba(98,20,217,0.12)] transition-opacity hover:opacity-90"
                  >
                    Buy template
                  </Link>
                  <Link
                    href="#tutorials"
                    className="inline-flex rounded-full border border-white/10 bg-[rgba(13,13,13,0.5)] px-8 py-4 text-base font-medium text-[rgb(var(--text))] transition-opacity hover:opacity-90"
                  >
                    See tutorials
                  </Link>
                </div>
              </div>
              <div className="relative aspect-video w-full overflow-hidden rounded-2xl bg-[rgb(var(--bg))]">
                <Image
                  src={images.tutorialsThumb}
                  alt="Skilly Tutorials"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
              </div>
            </div>
          </div>
        </AnimateOnScroll>

        <AnimateOnScroll animation="fade-in" duration={0.8} delay={0.2}>
          <p className="mt-12 text-center text-sm font-medium text-[rgb(var(--text-muted))]">
            Designs trusted by companies like:
          </p>
          <div
            className="mt-6 flex justify-center overflow-hidden"
            style={{
              maskImage: "linear-gradient(to right, transparent 0%, black 25%, black 75%, transparent 100%)",
              WebkitMaskImage: "linear-gradient(to right, transparent 0%, black 25%, black 75%, transparent 100%)",
            }}
          >
            <div className="flex items-center gap-16">
              {images.companyLogos.map((src, i) => (
                <div key={i} className="relative h-8 w-24 shrink-0 opacity-60 md:h-9 md:w-28">
                  <Image src={src} alt="" fill className="object-contain" sizes="112px" />
                </div>
              ))}
            </div>
          </div>
        </AnimateOnScroll>
      </div>
    </section>
  );
}
