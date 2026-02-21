"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { images } from "@/lib/images";

const navLinks = [
  { label: "About", href: "/about" },
  { label: "Blog", href: "/blog" },
  { label: "Features", href: "#features" },
  { label: "Pricing", href: "#pricing" },
  { label: "Legal", href: "/legal" },
  { label: "Tutorials", href: "#tutorials" },
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
                className="text-sm font-medium tracking-[-0.02em] text-[rgb(var(--text))] transition-opacity hover:opacity-80"
              >
                {link.label}
              </Link>
            ))}
          </nav>

          <div className="flex items-center gap-3">
            <Link
              href="#book"
              className="hidden rounded-full bg-[rgb(var(--accent))] px-5 py-2.5 text-sm font-medium tracking-[-0.02em] text-[rgb(var(--text))] shadow-[0_4px_10px_-2px_rgba(0,0,0,0.05),0_2px_2px_-1px_rgba(0,0,0,0.1),0_0_0_1px_rgba(98,20,217,0.12)] transition-opacity hover:opacity-90 md:inline-block"
            >
              Book a call
            </Link>
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
              href="#book"
              className="rounded-full bg-[rgb(var(--accent))] px-5 py-2.5 text-center text-sm font-medium text-[rgb(var(--text))]"
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
