const steps = [
  {
    title: "Subscribe",
    description: "Subscribe to a plan & request as many designs as you'd like.",
    icon: "subscribe",
  },
  {
    title: "Receive",
    description: "Receive your design as fast as two business days on average.",
    icon: "receive",
  },
  {
    title: "Revise",
    description: "We'll revise the designs until you're 100% satisfied.",
    icon: "revise",
  },
];

function SubscribeIcon() {
  return (
    <svg
      viewBox="0 0 64 64"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="h-16 w-16 text-white"
    >
      {/* Circular refresh arrows */}
      <path d="M44 24a14 14 0 01-1.5 18.5A14 14 0 0120 36" />
      <path d="M20 40a14 14 0 011.5-18.5A14 14 0 0144 28" />
      <polyline points="44 20 44 28 36 28" />
      <polyline points="20 44 20 36 28 36" />
    </svg>
  );
}

function ReceiveIcon() {
  return (
    <svg
      viewBox="0 0 64 64"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="h-16 w-16 text-white"
    >
      {/* Lightning bolt */}
      <polygon
        points="34 8 18 36 30 36 28 56 46 28 34 28"
        fill="currentColor"
        stroke="currentColor"
      />
    </svg>
  );
}

function ReviseIcon() {
  return (
    <svg
      viewBox="0 0 64 64"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="h-16 w-16 text-white"
    >
      {/* Thumbs up with sparkles */}
      <path d="M22 30h-4a2 2 0 00-2 2v16a2 2 0 002 2h4a2 2 0 002-2V32a2 2 0 00-2-2z" />
      <path d="M24 30l4-12a4 4 0 014-2h2a2 2 0 012 2v8h10a2 2 0 012 2.2l-2.5 16a2 2 0 01-2 1.8H24" />
      {/* Sparkle stars */}
      <path
        d="M38 10l1 2 2 1-2 1-1 2-1-2-2-1 2-1z"
        fill="currentColor"
        stroke="none"
      />
      <path
        d="M48 16l1 2 2 1-2 1-1 2-1-2-2-1 2-1z"
        fill="currentColor"
        stroke="none"
      />
      <path
        d="M42 6l.5 1 1 .5-1 .5-.5 1-.5-1-1-.5 1-.5z"
        fill="currentColor"
        stroke="none"
      />
    </svg>
  );
}

const stepIcons: Record<string, () => React.JSX.Element> = {
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
          <p
            className="text-center text-sm font-medium tracking-[-0.02em] text-[rgb(var(--text))]"
            style={{ lineHeight: "1em" }}
          >
            Process
          </p>
        </div>
        <div className="mx-auto max-w-2xl text-center">
          <h2
            className="font-medium tracking-[-0.05em] text-[rgb(var(--text))]"
            style={{ fontSize: "clamp(2.25rem, 5vw, 70px)", lineHeight: "1em" }}
          >
            Your designs,{" "}
            <span className="font-serif italic">effortlessly.</span>
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
              <div
                key={step.title}
                className="flex flex-col items-center text-center"
              >
                <div className="mb-2 flex items-center justify-center">
                  <Icon />
                </div>
                <div className="mt-6">
                  <h1 className="text-[28px] font-medium leading-none tracking-[-0.02em] text-[rgb(var(--text))]">
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
            href="#"
            className="inline-flex items-center justify-center rounded-full bg-[rgb(var(--accent))] px-8 py-4 text-[21px] font-medium leading-6 tracking-[-0.02em] text-[rgb(var(--text))] shadow-[0_4px_10px_-2px_rgba(0,0,0,0.05),0_2px_2px_-1px_rgba(0,0,0,0.1),0_0_0_1px_rgba(98,20,217,0.12)] transition hover:opacity-90"
          >
            Book a 15-min call
          </a>
        </div>
      </div>
    </section>
  );
}
