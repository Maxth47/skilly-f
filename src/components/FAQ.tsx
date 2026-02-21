"use client";

import { useState } from "react";

const faqs = [
  {
    question: "Why wouldn't I just hire a full-time designer?",
    answer:
      "A full-time designer can cost $60k–$100k+ per year. With Limitless you get the same quality and speed for a flat monthly fee, with no long-term commitment. Pause or cancel anytime.",
  },
  {
    question: "Is there a limit to how many requests I can have?",
    answer: "No. You can submit unlimited design requests. We work on them one at a time to ensure quality and fast turnaround.",
  },
  {
    question: "How fast will I receive my designs?",
    answer: "On average, designs are delivered within 48 hours (two business days). Complex projects may take slightly longer.",
  },
  {
    question: "Who are the designers?",
    answer: "Our team consists of experienced, vetted designers who specialize in high-converting design. You'll work with professionals who understand brand and conversion.",
  },
  {
    question: "What if I don't like the design?",
    answer: "Unlimited revisions are included. We'll keep refining until you're 100% satisfied.",
  },
  {
    question: "Are there any refunds if I don't like the service?",
    answer: "You can pause or cancel anytime. We're confident you'll love the quality and process—our testimonials speak for themselves.",
  },
];

export function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section className="py-20 md:py-28">
      <div className="mx-auto max-w-3xl px-6 lg:px-8">
        <h2 className="text-center text-4xl font-medium tracking-[-0.05em] text-[rgb(var(--text))] sm:text-5xl">
          Frequently asked questions
        </h2>
        <div className="mt-12 space-y-4">
          {faqs.map((faq, i) => (
            <div
              key={faq.question}
              className="overflow-hidden rounded-2xl border border-white/10 bg-[rgb(var(--bg-card))]"
            >
              <button
                type="button"
                className="flex w-full items-center justify-between px-6 py-5 text-left text-base font-medium text-[rgb(var(--text))] hover:bg-white/5"
                onClick={() => setOpenIndex(openIndex === i ? null : i)}
                aria-expanded={openIndex === i}
              >
                {faq.question}
                <span className="shrink-0 pl-4">
                  <svg
                    className={`h-5 w-5 transition-transform ${openIndex === i ? "rotate-180" : ""}`}
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </span>
              </button>
              {openIndex === i && (
                <div className="border-t border-white/10 px-6 py-4 text-[rgb(var(--text-muted))]">
                  {faq.answer}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
