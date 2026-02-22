import Link from "next/link";

function DesignBoardIcon() {
  return (
    <svg viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="h-12 w-12 text-white">
      <rect x="6" y="6" width="36" height="36" rx="2" />
      <rect x="12" y="12" width="10" height="10" rx="1" />
      <rect x="26" y="12" width="10" height="10" rx="1" />
      <line x1="12" y1="28" x2="22" y2="28" />
      <line x1="12" y1="32" x2="18" y2="32" />
      <circle cx="31" cy="30" r="4" />
    </svg>
  );
}

function LightningDeliveryIcon() {
  return (
    <svg viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="h-12 w-12 text-white">
      <circle cx="24" cy="24" r="18" />
      <polygon points="22 12 16 26 22 26 20 36 32 22 26 22 28 12" fill="currentColor" stroke="currentColor" />
    </svg>
  );
}

function FixedRateIcon() {
  return (
    <svg viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="h-12 w-12 text-white">
      <circle cx="24" cy="24" r="18" />
      <path d="M24 14v2" />
      <path d="M24 32v2" />
      <path d="M20 20a4 4 0 014-4h1a4 4 0 010 8h-2a4 4 0 000 8h1a4 4 0 004-4" />
    </svg>
  );
}

function AwardIcon() {
  return (
    <svg viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="h-12 w-12 text-white">
      <polygon points="24 4 28 16 40 16 30 24 34 36 24 28 14 36 18 24 8 16 20 16" />
      <path d="M16 34l-2 10 10-6 10 6-2-10" />
    </svg>
  );
}

function RevisionsIcon() {
  return (
    <svg viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="h-12 w-12 text-white">
      <path d="M38 10L16 32" />
      <path d="M38 10l-4 18-14-14z" />
      <path d="M16 32l-4 6 6-4" />
      <line x1="8" y1="42" x2="40" y2="42" />
    </svg>
  );
}

function UniqueIcon() {
  return (
    <svg viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="h-12 w-12 text-white">
      <circle cx="24" cy="24" r="18" />
      <circle cx="24" cy="24" r="8" />
      <circle cx="24" cy="24" r="2" fill="currentColor" />
    </svg>
  );
}

const features = [
  { title: "Design Board", description: "Request as many designs as you like on your own design board.", Icon: DesignBoardIcon },
  { title: "Lightning Fast Delivery", description: "Receive your designs one at a time in just a few days.", Icon: LightningDeliveryIcon },
  { title: "Fixed Monthly Rate", description: "No surprises. Pay the same fixed price every month.", Icon: FixedRateIcon },
  { title: "Award-Winning Designs", description: "Leave your customers in awe with award-winning designs.", Icon: AwardIcon },
  { title: "Unlimited Revisions", description: "Revise your designs until you're 100% satisfied. No limits.", Icon: RevisionsIcon },
  { title: "Unique & All Yours", description: "All your designs are crafted especially for you.", Icon: UniqueIcon },
];

export function Features() {
  return (
    <section id="features" className="py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="section-pill mx-auto mb-8 w-fit px-6 py-2">
          <p className="text-center text-sm font-medium tracking-[-0.02em] text-[rgb(var(--text))]">Features</p>
        </div>
        <h2
          className="mx-auto max-w-2xl text-center font-medium tracking-[-0.05em] text-[rgb(var(--text))]"
          style={{ fontSize: "clamp(2.25rem, 5vw, 70px)", lineHeight: "1em" }}
        >
          Reasons you will <span className="font-serif italic">love</span> us.
        </h2>
        <p className="mx-auto mt-4 max-w-xl text-center text-[rgb(var(--text-muted))]">
          Once you try Limitless, you&apos;ll never go anywhere else for design. Seriously.
        </p>

        <div className="mt-16 grid gap-12 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((feature) => (
            <div
              key={feature.title}
              className="flex flex-col items-center text-center"
            >
              <div className="mb-6">
                <feature.Icon />
              </div>
              <h3 className="text-xl font-medium text-[rgb(var(--text))]">{feature.title}</h3>
              <p className="mt-3 text-[rgb(var(--text-muted))]">{feature.description}</p>
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
