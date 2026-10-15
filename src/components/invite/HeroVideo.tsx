"use client";

import { useEffect, useState } from "react";
import { ChevronDown } from "lucide-react";
import poster from "@/assets/hero-poster.jpg";
import heroLoop from "@/assets/hero-loop.mp4.asset.json";
import { invite } from "@/data/invite";

const posterSrc = typeof poster === "string" ? poster : poster.src;

export function HeroVideo() {
  const [offset, setOffset] = useState(0);

  useEffect(() => {
    let raf = 0;

    const onScroll = () => {
      cancelAnimationFrame(raf);

      raf = requestAnimationFrame(() => {
        setOffset(window.scrollY);
      });
    };

    window.addEventListener("scroll", onScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", onScroll);
      cancelAnimationFrame(raf);
    };
  }, []);

  return (
    <section className="relative h-[100svh] overflow-hidden">
      <video
        className="absolute inset-0 h-full w-full object-cover"
        src={heroLoop.url}
        poster={posterSrc}
        autoPlay
        muted
        loop
        playsInline
      />

      <div
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(180deg, oklch(0.3 0.05 300 / 0.35) 0%, transparent 35%, oklch(0.3 0.05 300 / 0.25) 70%, var(--background) 100%)",
        }}
      />

      {/* Main Hero Content */}
      <div
        className="relative z-10 flex h-full flex-col items-center justify-center gap-1 px-6 text-center"
        style={{
          transform: `translateY(calc(-8vh + ${offset * 0.22}px))`,
          opacity: Math.max(0, 1 - offset / 620),
        }}
      >
        {/* Top Tagline */}
        <p className="font-display text-xs uppercase tracking-[0.35em] text-ivory/90 drop-shadow-md sm:text-sm">
          Together for 25 years... and forever to go...
        </p>

        {/* Decorative Divider */}
        <div className="my-1.5 flex items-center justify-center gap-3">
          <span className="h-px w-8 bg-gradient-to-r from-transparent to-amber-200/80" />
          <span className="text-amber-200 text-sm">&#10084;</span>
          <span className="h-px w-8 bg-gradient-to-l from-transparent to-amber-200/80" />
        </div>

        {/* Subtitle */}
        <p className="font-display text-xs uppercase tracking-[0.25em] text-ivory/85 drop-shadow sm:text-sm">
          You are cordially invited to the
        </p>

        {/* 25th Anniversary Celebration */}
        <div className="my-1">
          <p className="font-display text-4xl sm:text-6xl font-bold tracking-tight gold-text drop-shadow-[0_4px_24px_rgba(0,0,0,0.4)]">
            25<span className="text-2xl sm:text-3xl align-super font-light">th</span>
          </p>
          <p className="font-display text-lg uppercase tracking-[0.35em] text-ivory/95 font-medium sm:text-2xl">
            Anniversary Celebration
          </p>
        </div>

        <p className="font-script text-xl sm:text-2xl text-amber-200/90 my-0.5">of</p>

        {/* Couple Names */}
        <div>
          <h1 className="font-script gold-text text-5xl leading-[1.25] py-1 drop-shadow-[0_2px_22px_rgba(0,0,0,0.5)] sm:text-8xl">
            Praveen &amp; Kajal
          </h1>
        </div>

        {/* Tagline */}
        <p className="font-display mt-2 max-w-md text-xs sm:text-sm tracking-widest text-ivory/90">
          Two hearts ♥ One journey
        </p>
        <p className="font-display text-[0.72rem] sm:text-xs text-ivory/75 tracking-wider">
          25 years of love, trust and togetherness
        </p>

        {/* Date & Venue Chip */}
        <div className="mt-3 inline-flex items-center gap-2 rounded-full border border-white/20 bg-black/35 px-4 py-1.5 backdrop-blur-md">
          <span className="font-display text-xs tracking-[0.2em] uppercase text-ivory/90 font-medium">
            10 DEC 2026 • Haridwar
          </span>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-4 left-0 right-0 z-10 flex flex-col items-center text-ivory/85">
        <span className="font-display text-[0.65rem] uppercase tracking-[0.5em]">Scroll</span>

        <ChevronDown
          className="mt-1 h-5 w-5"
          style={{
            animation: "soft-float 2s ease-in-out infinite",
          }}
        />
      </div>
    </section>
  );
}
