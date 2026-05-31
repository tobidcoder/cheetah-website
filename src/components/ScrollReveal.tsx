"use client";

import React, { useEffect, useRef } from "react";

interface ScrollRevealProps {
  children: React.ReactNode;
  delay?: number; // Delay in milliseconds for staggered animation
  className?: string;
  style?: React.CSSProperties;
}

export function ScrollReveal({ children, delay = 0, className = "", style = {} }: ScrollRevealProps) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (typeof window === "undefined" || !("IntersectionObserver" in window)) {
      if (ref.current) {
        ref.current.classList.add("revealed");
      }
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("revealed");
          observer.unobserve(entry.target);
        }
      },
      {
        threshold: 0.05,
        rootMargin: "0px 0px -40px 0px", // Trigger when 40px from viewport bottom
      }
    );

    const el = ref.current;
    if (el) {
      observer.observe(el);
    }

    return () => {
      if (el) {
        observer.unobserve(el);
      }
      observer.disconnect();
    };
  }, []);

  return (
    <div
      ref={ref}
      className={`reveal-on-scroll ${className}`}
      style={{
        ...style,
        transitionDelay: `${delay}ms`,
      }}
    >
      {children}
    </div>
  );
}
