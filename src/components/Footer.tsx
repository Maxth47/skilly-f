import Link from "next/link";

const footerLinks = [
  { label: "About", href: "/about" },
  { label: "Blog", href: "/blog" },
  { label: "Features", href: "#benefits" },
  { label: "Pricing", href: "#pricing" },
  { label: "Legal", href: "#legal" },
  { label: "Tutorials", href: "#tutorials" },
  { label: "Book a call", href: "#book" },
];

export function Footer() {
  return (
    <footer className="border-t border-white/10 bg-[rgb(var(--bg))] py-14">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="flex flex-col items-center justify-between gap-8 md:flex-row">
          <Link href="/" className="text-xl font-medium tracking-tight text-[rgb(var(--text))]">
            Limitless
          </Link>
          <nav className="flex flex-wrap items-center justify-center gap-6">
            {footerLinks.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                className="text-sm font-medium text-[rgb(var(--text-muted))] transition-colors hover:text-[rgb(var(--text))]"
              >
                {link.label}
              </Link>
            ))}
          </nav>
        </div>
        <p className="mt-12 text-center text-sm text-[rgb(var(--text-muted))]">
          Created by{" "}
          <a
            href="https://x.com/hxmzaehsan"
            target="_blank"
            rel="noopener noreferrer"
            className="font-medium text-[rgb(var(--text))] underline hover:no-underline"
          >
            Hamza Ehsan
          </a>
        </p>
        <div className="mt-8 flex flex-wrap items-center justify-center gap-4 text-center">
          <a
            href="https://framer.link/FUaimTK?utm_source=framer"
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm font-medium text-[rgb(var(--text-muted))] underline hover:text-[rgb(var(--text))]"
          >
            Use for free
          </a>
          <a
            href="https://www.framer.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm text-[rgb(var(--text-muted))] hover:text-[rgb(var(--text))]"
          >
            Create a free website with Framer, the website builder loved by startups, designers and agencies.
          </a>
        </div>
      </div>
    </footer>
  );
}
