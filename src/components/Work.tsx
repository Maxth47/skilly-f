"use client";

import Image from "next/image";
import { images } from "@/lib/images";

const track1 = [
  { src: images.hero, position: "center top" as const },
  { src: images.process[2], position: "center bottom" as const },
  { src: images.process[0], position: "center top" as const },
  { src: images.process[1], position: "center top" as const },
];

const track2 = [
  { src: images.features[2], position: "center top" as const },
  { src: images.features[3], position: "center" as const },
  { src: images.benefits[0], position: "center" as const },
  { src: images.testimonialJenny, position: "center" as const },
];

const track3 = [
  { src: images.features[1], position: "50% 38%" as const },
  { src: images.features[0], position: "50% 78%" as const },
  { src: images.benefits[1], position: "center top" as const },
  { src: images.benefits[2], position: "center top" as const },
];

const maskTrack12 = "linear-gradient(to right, rgba(0, 0, 0, 0) 0%, rgb(0, 0, 0) 12.5%, rgb(0, 0, 0) 87.5%, rgba(0, 0, 0, 0) 100%)";
const maskTrack3 = "linear-gradient(to right, rgba(0, 0, 0, 0) 0%, rgb(0, 0, 0) 25%, rgb(0, 0, 0) 75%, rgba(0, 0, 0, 0) 100%)";

function WorkTrack({
  items,
  mask,
  reverse = false,
}: {
  items: { src: string; position: string }[];
  mask: string;
  reverse?: boolean;
}) {
  return (
    <div
      className="w-full"
      style={{ transform: "perspective(1200px) skewX(4deg) skewY(4deg)" }}
    >
      <section
        className="flex place-items-center overflow-hidden"
        style={{
          maskImage: mask,
          WebkitMaskImage: mask,
        }}
      >
        <ul className={`flex w-max list-none flex-row items-center gap-6 p-0 ${reverse ? "animate-work-marquee-reverse" : "animate-work-marquee"}`}>
          {[...items, ...items].map((item, i) => (
            <li key={i} className="shrink-0" aria-hidden={i >= items.length}>
              <div
                className="relative h-[200px] w-[320px] overflow-hidden rounded-lg border border-white/10 md:h-[240px] md:w-[380px]"
                data-border="true"
              >
                <Image
                  src={item.src}
                  alt=""
                  fill
                  className="object-cover"
                  style={{ objectPosition: item.position }}
                  sizes="(max-width: 768px) 320px, 380px"
                />
              </div>
            </li>
          ))}
        </ul>
      </section>
    </div>
  );
}

export function Work() {
  return (
    <section id="work" aria-label="Work" className="overflow-hidden py-16 md:py-24">
      <div className="flex flex-col gap-8">
        <WorkTrack items={track1} mask={maskTrack12} />
        <WorkTrack items={track2} mask={maskTrack12} reverse />
        <WorkTrack items={track3} mask={maskTrack3} />
      </div>
    </section>
  );
}
