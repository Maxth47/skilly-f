"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { images } from "@/lib/images";

const navLinks: { label: string; href: string; hasDropdown?: boolean }[] = [
  { label: "About", href: "/about" },
  { label: "Blog", href: "/blog" },
  { label: "Features", href: "#benefits" },
  { label: "Pricing", href: "#pricing" },
  { label: "Pages", href: "#pricing", hasDropdown: true },
];

export function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 px-4 pt-4 md:px-6 md:pt-6">
      <div className="mx-auto max-w-7xl">
        <div className="section-pill flex h-14 items-center justify-between px-5 md:px-6">
          <Link href="/" className="relative h-8 w-[120px] md:h-9 md:w-[140px]">
            <Image
              src={images.logoPlaceholder}
              alt="Limitless"
              fill
              className="object-contain object-left"
              priority
            />
          </Link>

          <nav className="hidden items-center gap-8 md:flex">
            {navLinks.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                className="flex items-center gap-1 text-sm font-medium tracking-[-0.02em] text-[rgb(var(--text))] transition-opacity hover:opacity-80"
              >
                {link.label}
                {link.hasDropdown && (
                  <svg className="h-3.5 w-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                )}
              </Link>
            ))}
            <Link
              href="#tutorials"
              className="rounded-full border border-white/10 bg-[rgba(13,13,13,0.5)] px-5 py-2.5 text-sm font-medium tracking-[-0.02em] text-[rgb(var(--text))] shadow-[0_4px_10px_-2px_rgba(0,0,0,0.1),0_2px_2px_-1px_rgba(0,0,0,0.1),0_0_0_1px_rgba(255,255,255,0.08)] transition-opacity hover:opacity-90"
            >
              Tutorials
            </Link>
            <Link
              href="https://cal.com"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full bg-[rgb(var(--accent))] px-5 py-2.5 text-sm font-medium tracking-[-0.02em] text-white shadow-[0_4px_10px_-2px_rgba(0,0,0,0.05),0_2px_2px_-1px_rgba(0,0,0,0.1),0_0_0_1px_rgba(98,20,217,0.12)] transition-opacity hover:opacity-90"
            >
              Book a call
            </Link>
          </nav>

          <div className="flex items-center gap-3 md:hidden">
            <button
              type="button"
              className="rounded p-2 text-[rgb(var(--text))] md:hidden"
              onClick={() => setMobileOpen(!mobileOpen)}
              aria-label="Toggle menu"
            >
              <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                {mobileOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>

        {mobileOpen && (
          <div className="section-pill mt-2 flex flex-col gap-4 p-5 md:hidden">
            {navLinks.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                className="text-sm font-medium text-[rgb(var(--text))]"
                onClick={() => setMobileOpen(false)}
              >
                {link.label}
              </Link>
            ))}
            <Link
              href="#tutorials"
              className="rounded-full border border-white/10 bg-[rgba(13,13,13,0.5)] px-5 py-2.5 text-center text-sm font-medium text-[rgb(var(--text))]"
              onClick={() => setMobileOpen(false)}
            >
              Tutorials
            </Link>
            <Link
              href="https://cal.com"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full bg-[rgb(var(--accent))] px-5 py-2.5 text-center text-sm font-medium text-white"
              onClick={() => setMobileOpen(false)}
            >
              Book a call
            </Link>
          </div>
        )}
      </div>
    </header>
  );
}
