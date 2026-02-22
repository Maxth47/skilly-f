const row1 = [
  { label: "Logos", icon: "M48,64a8,8,0,0,1,8-8H72V40a8,8,0,0,1,16,0V56h16a8,8,0,0,1,0,16H88V88a8,8,0,0,1-16,0V72H56A8,8,0,0,1,48,64ZM184,192h-8v-8a8,8,0,0,0-16,0v8h-8a8,8,0,0,0,0,16h8v8a8,8,0,0,0,16,0v-8h8a8,8,0,0,0,0-16Zm56-48H224V128a8,8,0,0,0-16,0v16H192a8,8,0,0,0,0,16h16v16a8,8,0,0,0,16,0V160h16a8,8,0,0,0,0-16ZM219.31,80,80,219.31a16,16,0,0,1-22.62,0L36.68,198.63a16,16,0,0,1,0-22.63L176,36.69a16,16,0,0,1,22.63,0l20.68,20.68A16,16,0,0,1,219.31,80Zm-54.63,32L144,91.31l-96,96L68.68,208ZM208,68.69,187.31,48l-32,32L176,100.69Z" },
  { label: "Landing Pages", icon: "M208,40H48A24,24,0,0,0,24,64V176a24,24,0,0,0,24,24h72v16H96a8,8,0,0,0,0,16h64a8,8,0,0,0,0-16H136V200h72a24,24,0,0,0,24-24V64A24,24,0,0,0,208,40ZM48,56H208a8,8,0,0,1,8,8v80H40V64A8,8,0,0,1,48,56ZM208,184H48a8,8,0,0,1-8-8V160H216v16A8,8,0,0,1,208,184Z" },
  { label: "Websites", icon: "M232,168h-8V72a24,24,0,0,0-24-24H56A24,24,0,0,0,32,72v96H24a8,8,0,0,0-8,8v16a24,24,0,0,0,24,24H216a24,24,0,0,0,24-24V176A8,8,0,0,0,232,168ZM48,72a8,8,0,0,1,8-8H200a8,8,0,0,1,8,8v96H48ZM224,192a8,8,0,0,1-8,8H40a8,8,0,0,1-8-8v-8H224ZM152,88a8,8,0,0,1-8,8H112a8,8,0,0,1,0-16h32A8,8,0,0,1,152,88Z" },
  { label: "Digital Products", icon: "M216,40H40A16,16,0,0,0,24,56V200a16,16,0,0,0,16,16H216a16,16,0,0,0,16-16V56A16,16,0,0,0,216,40Zm0,160H40V56H216V200ZM176,88a48,48,0,0,1-96,0,8,8,0,0,1,16,0,32,32,0,0,0,64,0,8,8,0,0,1,16,0Z" },
];

const row2 = [
  { label: "Pitch Decks", icon: "M216,40H136V24a8,8,0,0,0-16,0V40H40A16,16,0,0,0,24,56V176a16,16,0,0,0,16,16H79.36L57.75,219a8,8,0,0,0,12.5,10l29.59-37h56.32l29.59,37a8,8,0,1,0,12.5-10l-21.61-27H216a16,16,0,0,0,16-16V56A16,16,0,0,0,216,40Zm0,136H40V56H216V176Z" },
  { label: "Mobile Apps", icon: "M176,16H80A24,24,0,0,0,56,40V216a24,24,0,0,0,24,24h96a24,24,0,0,0,24-24V40A24,24,0,0,0,176,16ZM72,64H184V192H72Zm8-32h96a8,8,0,0,1,8,8v8H72V40A8,8,0,0,1,80,32Zm96,192H80a8,8,0,0,1-8-8v-8H184v8A8,8,0,0,1,176,224Z" },
  { label: "Email Design", icon: "M224,48H32a8,8,0,0,0-8,8V192a16,16,0,0,0,16,16H216a16,16,0,0,0,16-16V56A8,8,0,0,0,224,48Zm-96,85.15L52.57,64H203.43ZM98.71,128,40,181.81V74.19Zm11.84,10.85,12,11.05a8,8,0,0,0,10.82,0l12-11.05,58,53.15H52.57ZM157.29,128,216,74.18V181.82Z" },
  { label: "Product Design", icon: "M232,208a8,8,0,0,1-8,8H32a8,8,0,0,1-8-8V48a8,8,0,0,1,16,0v94.37L90.73,98a8,8,0,0,1,10.07-.38l58.81,44.11L218.73,90a8,8,0,1,1,10.54,12l-64,56a8,8,0,0,1-10.07.38L96.39,114.29,40,163.63V200H224A8,8,0,0,1,232,208Z" },
  { label: "Social Media", icon: "M128,80a48,48,0,1,0,48,48A48.05,48.05,0,0,0,128,80Zm0,80a32,32,0,1,1,32-32A32,32,0,0,1,128,160ZM176,24H80A56.06,56.06,0,0,0,24,80v96a56.06,56.06,0,0,0,56,56h96a56.06,56.06,0,0,0,56-56V80A56.06,56.06,0,0,0,176,24Zm40,152a40,40,0,0,1-40,40H80a40,40,0,0,1-40-40V80A40,40,0,0,1,80,40h96a40,40,0,0,1,40,40ZM192,76a12,12,0,1,1-12-12A12,12,0,0,1,192,76Z" },
];

const mask = "linear-gradient(to right, rgba(0,0,0,0) 0%, rgb(0,0,0) 10%, rgb(0,0,0) 90%, rgba(0,0,0,0) 100%)";

function CategoryPill({ label, icon }: { label: string; icon: string }) {
  return (
    <div
      className="flex h-[78px] shrink-0 items-center gap-4 rounded-3xl border-t border-white/10 bg-[rgb(var(--bg-card))] px-6"
    >
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256" className="h-7 w-7 shrink-0 fill-[rgb(var(--text))]">
        <path d={icon} />
      </svg>
      <span className="whitespace-nowrap text-[28px] font-medium tracking-[-0.02em] text-[rgb(var(--text))]" style={{ lineHeight: "1em" }}>
        {label}
      </span>
    </div>
  );
}

function MarqueeTrack({
  items,
  reverse = false,
}: {
  items: { label: string; icon: string }[];
  reverse?: boolean;
}) {
  const repeated = [...items, ...items, ...items, ...items];
  return (
    <section
      className="flex w-full place-items-center overflow-hidden"
      style={{ maskImage: mask, WebkitMaskImage: mask }}
    >
      <ul className={`flex list-none items-center gap-6 p-0 ${reverse ? "animate-solution-marquee-reverse" : "animate-solution-marquee"}`}>
        {repeated.map((item, i) => (
          <li key={i} className="shrink-0" aria-hidden={i >= items.length}>
            <CategoryPill label={item.label} icon={item.icon} />
          </li>
        ))}
      </ul>
    </section>
  );
}

export function Solution() {
  return (
    <section id="solution" className="py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="section-pill mx-auto mb-8 w-fit px-6 py-2">
          <p className="text-center text-sm font-medium tracking-[-0.02em] text-[rgb(var(--text))]">Solution</p>
        </div>
        <h2
          className="mx-auto max-w-2xl text-center font-medium tracking-[-0.05em] text-[rgb(var(--text))]"
          style={{ fontSize: "clamp(2.25rem, 5vw, 70px)", lineHeight: "1em" }}
        >
          All your <span className="font-serif italic" style={{ fontWeight: 400, letterSpacing: 0 }}>design </span>needs.
        </h2>
        <p className="mx-auto mt-4 max-w-2xl text-center text-[rgb(var(--text-muted))]">
          Running a successful business means more than just a website. That&apos;s why we cover all your design
          needs, so you don&apos;t have to go anywhere else.
        </p>
      </div>

      <div className="mt-14 flex flex-col gap-6">
        <MarqueeTrack items={row1} />
        <MarqueeTrack items={row2} reverse />
      </div>
    </section>
  );
}
