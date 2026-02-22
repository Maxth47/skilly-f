"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { images } from "@/lib/images";

const starPath =
  "M240,128a15.79,15.79,0,0,1-10.5,15l-63.44,23.07L143,229.5a16,16,0,0,1-30,0L89.93,166,26.5,143a16,16,0,0,1,0-30L90,89.93,113,26.5a16,16,0,0,1,30,0L166.07,90,229.5,113A15.79,15.79,0,0,1,240,128Z";

const planFeatures = [
  "Unlimited design requests",
  "One request at a time",
  "Average 48 hours delivery",
  "Unlimited revisions",
  "Unlimited brands",
  "Invite unlimited users",
  "Pause or cancel anytime",
  "Pause or cancel anytime",
];

const logoMask =
  "linear-gradient(to right, rgba(0,0,0,0) 0%, rgb(0,0,0) 25%, rgb(0,0,0) 75%, rgba(0,0,0,0) 100%)";

export function Pricing() {
  const [framerDev, setFramerDev] = useState(false);

  return (
    <section className="py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-6 lg:px-8" id="pricing">
        {/* Header */}
        <div className="section-pill mx-auto mb-8 w-fit px-6 py-2">
          <p className="text-center text-sm font-medium tracking-[-0.02em] text-[rgb(var(--text))]">
            Pricing
          </p>
        </div>
        <h2
          className="mx-auto max-w-2xl text-center font-medium tracking-[-0.05em] text-[rgb(var(--text))]"
          style={{ fontSize: "clamp(2.25rem, 5vw, 70px)", lineHeight: "1em" }}
        >
          Pricing that&apos;s so{" "}
          <span
            className="font-serif italic"
            style={{ fontWeight: 400, letterSpacing: 0 }}
          >
            simple.
          </span>
        </h2>
        <p className="mx-auto mt-4 max-w-xl text-center text-[rgb(var(--text-muted))]">
          We like to keep things simple with one, limitless plan.
        </p>

        {/* Pricing Card */}
        <div className="mx-auto mt-14 max-w-[450px]">
          <div className="relative overflow-hidden rounded-3xl border-t border-white/10 bg-[rgb(13,13,13)]">
            {/* Sphere Video – bottom-right decorative overlay */}
            <div
              className="pointer-events-none absolute bottom-0 right-0 hidden h-[65%] w-[50%] md:block"
              style={{
                maskImage:
                  "linear-gradient(to bottom, rgba(0,0,0,0) 10%, rgba(0,0,0,0.2) 30%, rgba(0,0,0,0.7) 70%, rgba(0,0,0,1) 90%)",
                WebkitMaskImage:
                  "linear-gradient(to bottom, rgba(0,0,0,0) 10%, rgba(0,0,0,0.2) 30%, rgba(0,0,0,0.7) 70%, rgba(0,0,0,1) 90%)",
              }}
            >
              <video
                src="https://limitless-framer-template.s3.us-east-005.backblazeb2.com/Sphere.mp4"
                autoPlay
                loop
                muted
                playsInline
                className="h-full w-full object-cover"
              />
            </div>

            {/* Content */}
            <div className="relative z-10 p-8 md:p-10">
              {/* "3 spots left" pill */}
              <div className="section-pill mb-6 inline-flex items-center gap-2 px-4 py-2">
                <span className="green-dot h-2 w-2 rounded-full" />
                <span className="text-sm font-medium tracking-[-0.02em] text-[rgb(var(--text))]">
                  3 spots left
                </span>
              </div>

              {/* Price */}
              <div className="flex items-baseline">
                <span
                  className="font-medium text-[rgb(var(--text))]"
                  style={{
                    fontSize: 48,
                    lineHeight: 1.2,
                    letterSpacing: "-0.2px",
                  }}
                >
                  $2,989
                </span>
                <span
                  className="font-medium text-[rgb(var(--text))]"
                  style={{
                    fontSize: 24,
                    lineHeight: 1.2,
                    letterSpacing: "-0.2px",
                  }}
                >
                  /month
                </span>
              </div>

              <p
                className="mt-3 text-lg font-medium tracking-[-0.02em] text-[rgb(var(--text-muted))]"
                style={{ lineHeight: "1.4em" }}
              >
                One request at a time. Pause or cancel anytime.
              </p>

              {/* Buttons */}
              <div className="mt-8 flex max-w-sm flex-col gap-3 sm:flex-row">
                <Link
                  href="https://stripe.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex flex-1 items-center justify-center rounded-full bg-[rgb(var(--accent))] px-6 py-4 text-[21px] font-medium tracking-[-0.02em] text-[rgb(var(--text))] shadow-[0_4px_10px_-2px_rgba(0,0,0,0.05),0_2px_2px_-1px_rgba(0,0,0,0.1),0_0_0_1px_rgba(98,20,217,0.12)] transition-opacity hover:opacity-90"
                  style={{ lineHeight: "24px" }}
                >
                  Subscribe
                </Link>
                <Link
                  href="/contact"
                  className="flex flex-1 items-center justify-center rounded-full bg-[rgba(13,13,13,0.5)] px-6 py-4 text-[21px] font-medium tracking-[-0.02em] text-[rgb(var(--text))] shadow-[0_4px_10px_-2px_rgba(0,0,0,0.1),0_2px_2px_-1px_rgba(0,0,0,0.1),0_0_0_1px_rgba(255,255,255,0.08)] transition-opacity hover:opacity-90"
                  style={{ lineHeight: "24px" }}
                >
                  Book a call
                </Link>
              </div>

              {/* Framer Development Toggle */}
              <div
                className="mt-6 inline-flex items-center gap-3 rounded-full border border-white/10 bg-[rgba(13,13,13,0.5)] px-4 py-2.5"
                style={{ backdropFilter: "blur(10px)" }}
              >
                <button
                  type="button"
                  role="switch"
                  aria-checked={framerDev}
                  onClick={() => setFramerDev(!framerDev)}
                  className="relative inline-flex h-5 w-9 shrink-0 cursor-pointer items-center rounded-full bg-white/10 transition-colors"
                >
                  <span
                    className={`inline-block h-3.5 w-3.5 rounded-full bg-gradient-to-b from-[#f2f2f2] to-[#e8e8e8] shadow transition-transform ${framerDev ? "translate-x-4" : "translate-x-1"}`}
                  />
                </button>
                <div className="flex items-center gap-2">
                  <svg
                    className="h-3.5 w-3.5 shrink-0"
                    viewBox="0 0 10 14"
                    fill="white"
                  >
                    <path d="M0 0h10v4.67H5zM0 4.67h5v4.66L0 9.33zM5 4.67h5v4.66H5z" />
                    <path d="M0 9.33h2.5L5 14V9.33z" />
                  </svg>
                  <span className="text-lg font-medium tracking-[-0.05em] text-[rgb(var(--text))]">
                    Framer Development
                  </span>
                </div>
                <div className="section-pill px-3 py-1">
                  <span className="text-sm font-medium tracking-[-0.02em] text-[rgb(var(--text))]">
                    + $500
                  </span>
                </div>
              </div>

              {/* Features */}
              <div className="mt-8 space-y-5">
                {planFeatures.map((feature, i) => (
                  <div key={i} className="flex items-center gap-3">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 256 256"
                      className="h-4 w-4 shrink-0 fill-[rgb(var(--text))]"
                    >
                      <path d={starPath} />
                    </svg>
                    <span
                      className="text-lg font-medium tracking-[-0.02em] text-[rgb(var(--text))]"
                      style={{ lineHeight: "1em" }}
                    >
                      {feature}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Trusted logos */}
      <div className="mx-auto mt-16 max-w-7xl px-6 lg:px-8">
        <p
          className="text-center font-medium tracking-[-0.02em] text-[rgb(var(--text-muted))]"
          style={{ lineHeight: "1.4em" }}
        >
          Designs trusted by companies like:
        </p>
        <div className="mt-8">
          <section
            className="flex w-full place-items-center overflow-hidden"
            style={{ maskImage: logoMask, WebkitMaskImage: logoMask }}
          >
            <ul className="animate-logos-marquee flex list-none items-center gap-16 p-0">
              {[
                ...images.companyLogos,
                ...images.companyLogos,
                ...images.companyLogos,
              ].map((logo, i) => (
                <li
                  key={i}
                  className="shrink-0"
                  aria-hidden={i >= images.companyLogos.length}
                >
                  <Image
                    src={logo}
                    alt=""
                    width={140}
                    height={40}
                    className="h-8 w-auto"
                  />
                </li>
              ))}
            </ul>
          </section>
        </div>
      </div>
    </section>
  );
}
