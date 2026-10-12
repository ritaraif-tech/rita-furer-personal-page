"use client";

import { useEffect } from "react";

// Fade sections in as they enter the viewport.
export default function RevealOnScroll() {
  useEffect(() => {
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add("in");
            io.unobserve(e.target);
          }
        });
      },
      { threshold: 0.15 },
    );
    document.querySelectorAll(".reveal, .ending").forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, []);

  return null;
}
