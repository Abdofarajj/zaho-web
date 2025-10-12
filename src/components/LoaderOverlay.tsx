"use client";
import { useEffect, useRef } from "react";
import gsap from "gsap";

export default function LoaderOverlay() {
  const containerRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    // run the exact animations provided
    gsap.to(".first", {
      duration: 1.5,
      delay: 0.2,
      top: "-100%",
      ease: "expo.inOut",
    });

    gsap.to(".second", {
      duration: 1.5,
      delay: 0.3,
      top: "-100%",
      ease: "expo.inOut",
    });

    gsap.to(".third", {
      duration: 1.5,
      delay: 0.4,
      top: "-100%",
      ease: "expo.inOut",
      onComplete: () => {
        // Hide/remove overlays after animation ends
        if (containerRef.current) {
          containerRef.current.style.display = "none";
        }
      },
    });
  }, []);

  return (
    <div ref={containerRef} aria-hidden="true">
      <div className="overlay first" />
      <div className="overlay second" />
      <div className="overlay third" />
    </div>
  );
}