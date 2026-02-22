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
    <header className="fixed top-0 left-0 right-0 z-50 flex justify-center px-4 pt-4 md:px-6 md:pt-6">
      <nav>
        <div
          className="flex h-12 items-center gap-6 px-4 md:px-5"
          style={{
            border: "1px solid rgba(255,255,255,0.1)",
            borderRadius: 999,
            backdropFilter: "blur(10px)",
            WebkitBackdropFilter: "blur(10px)",
            backgroundColor: "rgba(13,13,13,0.5)",
          }}
        >
          {/* Logo */}
          <Link href="/" className="relative h-6 w-[90px] shrink-0">
            <Image
              src={images.logoPlaceholder}
              alt="Limitless"
              fill
              className="object-contain object-left"
              priority
            />
          </Link>

          {/* Desktop nav */}
          <div className="hidden items-center md:flex">
            {navLinks.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                className="flex items-center gap-1 rounded-lg px-3 py-2 text-sm font-medium tracking-[-0.02em] text-[rgb(var(--text))] transition-colors hover:bg-white/5"
              >
                {link.label}
                {link.hasDropdown && (
                  <svg
                    className="h-3 w-3 opacity-60"
                    viewBox="0 0 32 32"
                    fill="currentColor"
                  >
                    <path d="M26.7 12.3a1 1 0 00-1.4 0L16 21.6l-9.3-9.3a1 1 0 00-1.4 1.4l10 10a1 1 0 001.4 0l10-10a1 1 0 000-1.4z" />
                  </svg>
                )}
              </Link>
            ))}
          </div>

          {/* Desktop buttons */}
          <div className="hidden items-center gap-2 md:flex">
            <Link
              href="/tutorials"
              className="rounded-full px-4 py-1.5 text-sm font-medium tracking-[-0.02em] text-[rgb(var(--text))] transition-opacity hover:opacity-90"
              style={{
                backdropFilter: "blur(10px)",
                backgroundColor: "rgba(13,13,13,0.5)",
                boxShadow:
                  "rgba(0,0,0,0.1) 0px 4px 10px -2px, rgba(0,0,0,0.1) 0px 2px 2px -1px, rgba(255,255,255,0.08) 0px 0px 0px 1px",
                lineHeight: "24px",
              }}
            >
              Tutorials
            </Link>
            <Link
              href="/contact"
              className="rounded-full px-4 py-1.5 text-sm font-medium tracking-[-0.02em] text-[rgb(249,250,251)] transition-opacity hover:opacity-90"
              style={{
                backdropFilter: "blur(10px)",
                backgroundColor: "rgb(98,20,217)",
                boxShadow:
                  "rgba(0,0,0,0.05) 0px 4px 10px -2px, rgba(0,0,0,0.1) 0px 2px 2px -1px, rgba(98,20,217,0.12) 0px 0px 0px 1px",
                lineHeight: "24px",
              }}
            >
              Book a call
            </Link>
          </div>

          {/* Mobile hamburger */}
          <button
            type="button"
            className="rounded p-2 text-[rgb(var(--text))] md:hidden"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle menu"
          >
            <svg
              className="h-6 w-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              {mobileOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile menu */}
        {mobileOpen && (
          <div
            className="mt-2 flex flex-col gap-4 p-5 md:hidden"
            style={{
              border: "1px solid rgba(255,255,255,0.1)",
              borderRadius: 24,
              backdropFilter: "blur(10px)",
              WebkitBackdropFilter: "blur(10px)",
              backgroundColor: "rgba(13,13,13,0.5)",
            }}
          >
            {navLinks.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                className="text-sm font-medium tracking-[-0.02em] text-[rgb(var(--text))]"
                onClick={() => setMobileOpen(false)}
              >
                {link.label}
              </Link>
            ))}
            <Link
              href="/tutorials"
              className="rounded-full bg-[rgba(13,13,13,0.5)] px-5 py-2.5 text-center text-sm font-medium tracking-[-0.02em] text-[rgb(var(--text))] shadow-[0_4px_10px_-2px_rgba(0,0,0,0.1),0_2px_2px_-1px_rgba(0,0,0,0.1),0_0_0_1px_rgba(255,255,255,0.08)]"
              onClick={() => setMobileOpen(false)}
            >
              Tutorials
            </Link>
            <Link
              href="/contact"
              className="rounded-full bg-[rgb(98,20,217)] px-5 py-2.5 text-center text-sm font-medium tracking-[-0.02em] text-white shadow-[0_4px_10px_-2px_rgba(0,0,0,0.05),0_2px_2px_-1px_rgba(0,0,0,0.1),0_0_0_1px_rgba(98,20,217,0.12)]"
              onClick={() => setMobileOpen(false)}
            >
              Book a call
            </Link>
          </div>
        )}
      </nav>
    </header>
  );
}
