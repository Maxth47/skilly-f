import Link from "next/link";
import { images } from "@/lib/images";

export function Hero() {
  return (
    <section id="hero" className="relative pt-24 pb-12 md:pt-32 md:pb-20">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="flex flex-col items-center text-center">
          <div className="section-pill mb-6 flex items-center gap-2 px-5 py-2">
            <span className="green-dot h-2 w-2 rounded-full" />
            <span className="text-sm font-medium tracking-[-0.02em] text-[rgb(var(--text))]">
              Hurry, only 3 spots left.
            </span>
          </div>

          <h1 className="max-w-5xl text-5xl font-medium leading-[1.1] tracking-[-0.05em] text-[rgb(var(--text))] sm:text-7xl md:text-8xl lg:text-[110px]">
            The truly{" "}
            <span className="font-serif">
              L<span className="italic">i</span>mit
              <span className="opacity-50">less</span>
            </span>{" "}
            design subscription.
          </h1>

          <p className="mt-6 max-w-xl text-xl font-medium tracking-[-0.02em] text-[rgb(var(--text-muted))] md:text-2xl">
            Say goodbye to expensive freelancers, and hello to limitless, lightning fast design.
          </p>

          <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
            <Link
              href="#"
              className="rounded-full bg-[rgb(var(--accent))] px-8 py-4 text-lg font-medium tracking-[-0.02em] text-[rgb(var(--text))] shadow-[0_4px_10px_-2px_rgba(0,0,0,0.05),0_2px_2px_-1px_rgba(0,0,0,0.1),0_0_0_1px_rgba(98,20,217,0.12)] transition-opacity hover:opacity-90"
            >
              Book a call
            </Link>
            <Link
              href="#pricing"
              className="rounded-full border border-white/10 bg-[rgba(13,13,13,0.5)] px-8 py-4 text-lg font-medium tracking-[-0.02em] text-[rgb(var(--text))] shadow-[0_4px_10px_-2px_rgba(0,0,0,0.1),0_2px_2px_-1px_rgba(0,0,0,0.1),0_0_0_1px_rgba(255,255,255,0.08)] transition-opacity hover:opacity-90"
            >
              See plans
            </Link>
          </div>
        </div>

        <div className="relative mx-auto mt-16 aspect-video max-w-5xl overflow-hidden rounded-[48px] bg-[rgb(var(--bg-card))]">
          <video
            src="https://limitless-framer-template.s3.us-east-005.backblazeb2.com/Abstract+Objects.mp4"
            autoPlay
            loop
            muted
            playsInline
            poster={images.hero}
            className="h-full w-full object-cover"
          />
        </div>

      </div>
    </section>
  );
}
