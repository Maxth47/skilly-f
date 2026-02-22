"use client";

import { useEffect, useRef } from "react";

type Animation =
  | "fade-in-up"
  | "fade-in"
  | "scale-in"
  | "slide-in-left"
  | "slide-in-right";

interface AnimateOnScrollProps {
  children: React.ReactNode;
  animation?: Animation;
  duration?: number;
  delay?: number;
  threshold?: number;
  className?: string;
}

export function AnimateOnScroll({
  children,
  animation = "fade-in-up",
  duration = 0.7,
  delay = 0,
  threshold = 0.15,
  className = "",
}: AnimateOnScrollProps) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.classList.add("is-visible", `anim-${animation}`);
          observer.unobserve(el);
        }
      },
      { threshold }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [animation, threshold]);

  return (
    <div
      ref={ref}
      className={`animate-on-scroll ${className}`}
      style={{
        animationDuration: `${duration}s`,
        animationDelay: `${delay}s`,
      }}
    >
      {children}
    </div>
  );
}
