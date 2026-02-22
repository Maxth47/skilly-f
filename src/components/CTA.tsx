import Link from "next/link";

const footerLinks = [
  { label: "About", href: "#" },
  { label: "Blog", href: "#" },
  { label: "Features", href: "#features" },
  { label: "Pricing", href: "#pricing" },
  { label: "Legal", href: "/legal" },
];

export function CTA() {
  return (
    <footer className="relative overflow-hidden bg-[rgb(var(--bg))]">
      {/* Video background */}
      <div
        className="absolute inset-0"
        style={{
          maskImage:
            "linear-gradient(rgba(0,0,0,0) 0%, rgba(0,0,0,0.5) 30%, rgba(0,0,0,0.5) 60%, rgba(0,0,0,0) 90%)",
          WebkitMaskImage:
            "linear-gradient(rgba(0,0,0,0) 0%, rgba(0,0,0,0.5) 30%, rgba(0,0,0,0.5) 60%, rgba(0,0,0,0) 90%)",
        }}
      >
        <video
          src="https://limitless-framer-template.s3.us-east-005.backblazeb2.com/Displacement.mp4"
          autoPlay
          loop
          muted
          playsInline
          className="h-full w-full object-cover"
        />
      </div>

      {/* Gradient overlay from transparent to black */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(to bottom, rgba(0,0,0,0) 0%, rgba(0,0,0,1) 100%)",
        }}
      />

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center px-6 pt-28 pb-14 md:pt-40 md:pb-20 lg:px-8">
        {/* CTA Section */}
        <div className="flex flex-col items-center text-center">
          <div className="section-pill mb-6 flex items-center gap-2 px-5 py-2">
            <span className="green-dot h-2 w-2 rounded-full" />
            <span className="text-sm font-medium tracking-[-0.02em] text-[rgb(var(--text))]">
              Hurry, only 3 spots left.
            </span>
          </div>

          <h2
            className="max-w-3xl font-medium tracking-[-0.05em] text-[rgb(var(--text))]"
            style={{ fontSize: "clamp(2.25rem, 6vw, 100px)", lineHeight: "0.8em" }}
          >
            Are you <span className="font-serif italic" style={{ fontWeight: 400, letterSpacing: 0 }}>ready?</span>
          </h2>

          <p
            className="mt-8 font-medium tracking-[-0.02em] text-[rgb(var(--text-muted))]"
            style={{ fontSize: "clamp(1.125rem, 2vw, 28px)", lineHeight: "1.4em" }}
          >
            This could be the start of something big.
          </p>

          <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
            <Link
              href="#"
              className="rounded-full bg-[rgb(var(--accent))] px-8 py-4 text-[21px] font-medium tracking-[-0.02em] leading-6 text-[rgb(var(--text))] shadow-[0_4px_10px_-2px_rgba(0,0,0,0.05),0_2px_2px_-1px_rgba(0,0,0,0.1),0_0_0_1px_rgba(98,20,217,0.12)] transition-opacity hover:opacity-90"
            >
              Book a call
            </Link>
            <Link
              href="#pricing"
              className="rounded-full border border-white/10 bg-[rgba(13,13,13,0.5)] px-8 py-4 text-[21px] font-medium tracking-[-0.02em] leading-6 text-[rgb(var(--text))] shadow-[0_4px_10px_-2px_rgba(0,0,0,0.1),0_2px_2px_-1px_rgba(0,0,0,0.1),0_0_0_1px_rgba(255,255,255,0.08)] transition-opacity hover:opacity-90"
            >
              See plans
            </Link>
          </div>
        </div>

        {/* Footer Section */}
        <div className="mt-28 flex w-full max-w-7xl flex-col items-center gap-8 md:mt-40">
          <div className="flex w-full flex-col items-center justify-between gap-6 md:flex-row">
            <nav className="flex flex-wrap items-center justify-center gap-6">
              {footerLinks.map((link) => (
                <Link
                  key={link.label}
                  href={link.href}
                  className="text-sm font-medium tracking-[-0.02em] text-[rgb(var(--text-muted))] transition-colors hover:text-[rgb(var(--text))]"
                >
                  {link.label}
                </Link>
              ))}
            </nav>
            <div className="flex items-center gap-2 text-sm text-[rgb(var(--text-muted))]">
              <span className="font-medium tracking-[-0.02em]">Created by</span>
              <a
                href="#"
                className="font-medium tracking-[-0.02em] text-[rgb(var(--text-muted))] underline hover:text-[rgb(var(--text))]"
              >
                Hamza Ehsan
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
