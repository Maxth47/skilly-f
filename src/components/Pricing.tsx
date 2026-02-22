"use client";

import Link from "next/link";
import { useState } from "react";

const planFeatures = [
  "Unlimited design requests",
  "One request at a time",
  "Average 48 hours delivery",
  "Unlimited revisions",
  "Unlimited brands",
  "Invite unlimited users",
  "Pause or cancel anytime",
];

export function Pricing() {
  const [framerDev, setFramerDev] = useState(false);

  return (
    <section id="pricing" className="py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="section-pill mx-auto mb-8 w-fit px-6 py-2">
          <p className="text-center text-sm font-medium tracking-[-0.02em] text-[rgb(var(--text))]">Pricing</p>
        </div>
        <h2
          className="mx-auto max-w-2xl text-center font-medium tracking-[-0.05em] text-[rgb(var(--text))]"
          style={{ fontSize: "clamp(2.25rem, 5vw, 70px)", lineHeight: "1em" }}
        >
          Pricing that&apos;s so <span className="font-serif italic">simple.</span>
        </h2>
        <p className="mx-auto mt-4 max-w-xl text-center text-[rgb(var(--text-muted))]">
          We like to keep things simple with one, limitless plan.
        </p>

        <div className="mx-auto mt-14 max-w-lg">
          <div className="rounded-3xl border-t border-white/10 bg-[rgb(var(--bg-card))] p-8 md:p-10">
            <div className="section-pill mb-4 inline-flex items-center gap-2 px-4 py-2">
              <span className="green-dot h-2 w-2 rounded-full" />
              <span className="text-sm font-medium text-[rgb(var(--text))]">3 spots left</span>
            </div>
            <p className="text-4xl font-medium tracking-tight text-[rgb(var(--text))] md:text-5xl">
              $2,989<span className="text-2xl font-normal text-[rgb(var(--text-muted))]">/month</span>
            </p>
            <p className="mt-2 text-[rgb(var(--text-muted))]">One request at a time. Pause or cancel anytime.</p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Link
                href="https://stripe.com"
                target="_blank"
                rel="noopener noreferrer"
                className="flex flex-1 items-center justify-center rounded-full bg-[rgb(var(--accent))] py-4 text-lg font-medium tracking-[-0.02em] text-[rgb(var(--text))] shadow-[0_4px_10px_-2px_rgba(0,0,0,0.05),0_2px_2px_-1px_rgba(0,0,0,0.1),0_0_0_1px_rgba(98,20,217,0.12)] transition-opacity hover:opacity-90"
              >
                Subscribe
              </Link>
              <Link
                href="https://cal.com"
                target="_blank"
                rel="noopener noreferrer"
                className="flex flex-1 items-center justify-center rounded-full border border-white/10 bg-[rgba(13,13,13,0.5)] py-4 text-lg font-medium tracking-[-0.02em] text-[rgb(var(--text))] transition-opacity hover:opacity-90"
              >
                Book a call
              </Link>
            </div>

            {/* Framer Development Toggle */}
            <div className="mt-6 flex items-center gap-3 rounded-full border border-white/10 bg-[rgba(13,13,13,0.5)] px-4 py-2.5">
              <button
                type="button"
                role="switch"
                aria-checked={framerDev}
                onClick={() => setFramerDev(!framerDev)}
                className={`relative inline-flex h-5 w-9 shrink-0 cursor-pointer rounded-full transition-colors ${framerDev ? "bg-[rgb(var(--accent))]" : "bg-white/20"}`}
              >
                <span
                  className={`pointer-events-none inline-block h-4 w-4 translate-y-0.5 rounded-full bg-white shadow transition-transform ${framerDev ? "translate-x-4.5 ml-0.5" : "translate-x-0.5"}`}
                />
              </button>
              <span className="flex items-center gap-2 text-sm text-[rgb(var(--text-muted))]">
                <svg className="h-3.5 w-3.5" viewBox="0 0 14 14" fill="currentColor">
                  <path d="M0 0h14v4.67H7zM0 4.67h7v4.66L0 9.33zM7 4.67h7v4.66H7z" />
                  <path d="M0 9.33h3.5L7 14V9.33z" />
                </svg>
                <span className="font-medium text-[rgb(var(--text))]">Framer Development</span>
              </span>
              <span className="ml-auto text-sm font-medium text-[rgb(var(--text-muted))]">+ $500</span>
            </div>

            <ul className="mt-8 space-y-4 border-t border-white/10 pt-8">
              {planFeatures.map((feature) => (
                <li key={feature} className="flex items-center gap-3 text-[rgb(var(--text))]">
                  <svg className="h-4 w-4 shrink-0 text-[rgb(var(--text))]" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2">
                    <path d="M12 4l2.5 5 5.5.8-4 3.8 1 5.4-5-2.6-5 2.6 1-5.4-4-3.8 5.5-.8z" fill="currentColor" />
                  </svg>
                  <span>{feature}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
