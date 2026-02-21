const steps = [
  { title: "Subscribe", description: "Subscribe to a plan & request as many designs as you'd like.", icon: "subscribe" },
  { title: "Receive", description: "Receive your design as fast as two business days on average.", icon: "receive" },
  { title: "Revise", description: "We'll revise the designs until you're 100% satisfied.", icon: "revise" },
];

function SubscribeIcon() {
  return (
    <svg viewBox="0 0 64 64" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-full w-full p-5 text-white">
      <path d="M32 14a18 18 0 0118 18 18 18 0 01-18 18 18 18 0 01-18-18 18 18 0 0118-18" />
      <path d="M32 50a18 18 0 01-18-18 18 18 0 0118-18 18 18 0 0118 18 18 18 0 01-18 18" />
      <path d="M32 12v5l4 4" />
      <path d="M32 52v-5l-4-4" />
    </svg>
  );
}

function ReceiveIcon() {
  return (
    <svg viewBox="0 0 64 64" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-full w-full p-5 text-white">
      <rect x="16" y="26" width="32" height="24" rx="1" />
      <path d="M16 26l16-14 16 14" />
      <path d="M32 12v14" />
    </svg>
  );
}

function ReviseIcon() {
  const star = (cx: number, cy: number) => (
    <path
      key={`${cx}-${cy}`}
      d={`M${cx} ${cy - 3}l.9 1.8 1.9.3-1.4 1.3.3 1.9L${cx} ${cy + 1.2}l-1.4.8.3-1.9-1.4-1.3 1.9-.3.9-1.8z`}
      fill="currentColor"
      stroke="none"
    />
  );
  return (
    <svg viewBox="0 0 64 64" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-full w-full p-5 text-white">
      <path d="M28 44V26c0-2 2-4 4-4s4 2 4 4v18l-4 3-4-3z" />
      <path d="M32 22v-2a2 2 0 014 0v2" />
      {star(18, 52)}
      {star(32, 52)}
      {star(46, 52)}
    </svg>
  );
}

const stepIcons: Record<string, () => JSX.Element> = {
  subscribe: SubscribeIcon,
  receive: ReceiveIcon,
  revise: ReviseIcon,
};

export function Process() {
  return (
    <section aria-label="Process" className="py-20 md:py-28">
      <div
        id="process"
        className="mx-auto max-w-7xl px-6 lg:px-8"
        data-border="true"
      >
        {/* Text / Header */}
        <div className="section-pill mx-auto mb-8 w-fit px-6 py-2">
          <p className="text-center text-sm font-medium tracking-[-0.02em] text-[rgb(var(--text))]" style={{ lineHeight: "1em" }}>
            Process
          </p>
        </div>
        <div className="mx-auto max-w-2xl text-center">
          <h2
            className="font-medium tracking-[-0.05em] text-[rgb(var(--text))]"
            style={{ fontSize: "clamp(2.25rem, 5vw, 70px)", lineHeight: "1em" }}
          >
            Your designs, <span className="font-serif italic">effortlessly.</span>
          </h2>
          <p className="mt-4 text-[rgb(var(--text-muted))]">
            Begin your design journey in three effortless steps.
          </p>
        </div>

        {/* Boxes */}
        <div className="mt-16 grid gap-12 md:grid-cols-3 md:gap-8">
          {steps.map((step) => {
            const Icon = stepIcons[step.icon];
            return (
              <div key={step.title} className="flex flex-col items-center text-center">
                <div className="relative mx-auto flex aspect-square w-full max-w-sm items-center justify-center overflow-hidden rounded-2xl bg-[rgb(var(--bg-card))]">
                  <Icon />
                </div>
                <div className="mt-6">
                  <h1
                    className="text-[28px] font-medium leading-none tracking-[-0.02em] text-[rgb(var(--text))]"
                  >
                    {step.title}
                  </h1>
                  <p className="mt-3 text-center text-[rgb(var(--text-muted))]">
                    {step.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        {/* CTA */}
        <div className="mt-14 flex justify-center">
          <a
            href="https://cal.com"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center rounded-full bg-[rgb(var(--accent))] px-8 py-4 text-[21px] font-medium leading-6 tracking-[-0.02em] text-[rgb(var(--text))] shadow-[0_4px_10px_-2px_rgba(0,0,0,0.05),0_2px_2px_-1px_rgba(0,0,0,0.1),0_0_0_1px_rgba(98,20,217,0.12)] transition hover:opacity-90"
          >
            Book a 15-min call
          </a>
        </div>
      </div>
    </section>
  );
}
