import Image from "next/image";
import Link from "next/link";
import { images } from "@/lib/images";

const features = [
  { title: "Design Board", description: "Request as many designs as you like on your own design board." },
  { title: "Lightning Fast Delivery", description: "Receive your designs one at a time in just a few days." },
  { title: "Fixed Monthly Rate", description: "No surprises. Pay the same fixed price every month." },
  { title: "Award-Winning Designs", description: "Leave your customers in awe with award-winning designs." },
  { title: "Unlimited Revisions", description: "Revise your designs until you're 100% satisfied. No limits." },
  { title: "Unique & All Yours", description: "All your designs are crafted especially for you." },
];

export function Features() {
  return (
    <section id="features" className="py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="section-pill mx-auto mb-8 w-fit px-6 py-2">
          <p className="text-center text-sm font-medium tracking-[-0.02em] text-[rgb(var(--text))]">Features</p>
        </div>
        <h2 className="mx-auto max-w-2xl text-center text-4xl font-medium tracking-[-0.05em] text-[rgb(var(--text))] sm:text-5xl md:text-6xl">
          Reasons you will love us.
        </h2>
        <p className="mx-auto mt-4 max-w-xl text-center text-[rgb(var(--text-muted))]">
          Once you try Limitless, you&apos;ll never go anywhere else for design. Seriously.
        </p>

        <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((feature, i) => (
            <div
              key={feature.title}
              className="overflow-hidden rounded-2xl border border-white/10 bg-[rgb(var(--bg-card))]"
            >
              <div className="relative aspect-[16/10] w-full">
                <Image
                  src={images.features[i]}
                  alt={feature.title}
                  fill
                  className="object-cover"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                />
              </div>
              <div className="p-8">
                <h3 className="text-xl font-medium text-[rgb(var(--text))]">{feature.title}</h3>
                <p className="mt-3 text-[rgb(var(--text-muted))]">{feature.description}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-14 text-center">
          <a
            href="https://cal.com"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex rounded-full bg-[rgb(var(--accent))] px-8 py-4 text-base font-medium text-[rgb(var(--text))] shadow-[0_4px_10px_-2px_rgba(0,0,0,0.05),0_2px_2px_-1px_rgba(0,0,0,0.1),0_0_0_1px_rgba(98,20,217,0.12)] transition-opacity hover:opacity-90"
          >
            Book a 15-min call
          </a>
        </div>
      </div>
    </section>
  );
}
