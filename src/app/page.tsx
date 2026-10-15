"use client";

import { useState } from "react";
import { Clock, MapPin } from "lucide-react";
import { EnvelopeGate } from "@/components/invite/EnvelopeGate";
import { HeroVideo } from "@/components/invite/HeroVideo";
import { MusicToggle } from "@/components/invite/MusicToggle";
import { PetalField } from "@/components/invite/PetalField";
import { ScratchReveal } from "@/components/invite/ScratchReveal";
import { Gallery } from "@/components/invite/Gallery";
import { Countdown } from "@/components/invite/Countdown";
import { Timeline } from "@/components/invite/Timeline";
import { Venue } from "@/components/invite/Venue";
import { Divider, Reveal, SectionTitle } from "@/components/invite/Reveal";
import { invite } from "@/data/invite";
import Image from "next/image";

export default function Home() {
  const [opened, setOpened] = useState(false);

  return (
    <main className="relative overflow-x-hidden">
      <EnvelopeGate onOpen={() => setOpened(true)} />
      {opened && <PetalField />}
      <MusicToggle started={opened} />

      <HeroVideo />

      <section className="relative px-6 py-6 text-center">
        <Reveal>
          <Divider />
          <p className="font-display text-xs uppercase tracking-[0.3em] text-muted-foreground font-medium">
            Two Hearts ♥ One Journey
          </p>
          <p className="font-display mx-auto max-w-2xl text-center text-2xl leading-relaxed text-primary/90 sm:text-3xl mt-3">
            Together for 25 years... and forever to go. We cordially invite you to celebrate the{" "}
            <b>25th Anniversary</b> of <b>Praveen &amp; Kajal</b>.{" "}
            <span className="text-blush">&#10084;</span>
          </p>
          <p className="font-display mx-auto max-w-xl text-center text-base sm:text-lg text-muted-foreground mt-3 italic">
            &ldquo;25 years of love, trust and togetherness&rdquo;
          </p>
          <Divider />
        </Reveal>
      </section>

      <section className="px-6 pb-24">
        <Reveal>
          <SectionTitle>Scratch to Reveal</SectionTitle>
          <Divider />
          <ScratchReveal />
        </Reveal>
      </section>

      <section className="bg-[var(--gradient-blush)] py-20">
        <Reveal>
          <SectionTitle>Moments of Togetherness</SectionTitle>
          <Divider />
          <Gallery />
        </Reveal>
      </section>

      <section className="px-6 py-20">
        <Reveal>
          <SectionTitle>Counting Down to the Silver Jubilee</SectionTitle>
          <Divider />
          <Countdown />
        </Reveal>
      </section>

      {/* Program Timeline - Commented out for Anniversary celebration as requested */}
      {/*
      <section className="bg-[var(--gradient-blush)] px-6 py-20">
        <Reveal>
          <Clock className="mx-auto h-6 w-6 text-primary" />
          <SectionTitle>Program Timeline</SectionTitle>
          <Divider />
        </Reveal>
        <Timeline />
      </section>
      */}

      <section className="px-6 py-10">
        <Reveal>
          <MapPin className="mx-auto h-6 w-6 text-primary" />
          <SectionTitle>Celebration Venue</SectionTitle>
          <Divider />
          <Venue />
        </Reveal>
      </section>

      <footer className="bg-[var(--gradient-blush)] px-6 py-12 text-center">
        <Reveal>
          {/* Couple Name in Footer */}
          <div className="py-2">
            <h2 className="font-script gold-text text-4xl sm:text-6xl drop-shadow-sm">
              Praveen &amp; Kajal
            </h2>
            <p className="font-display text-xs uppercase tracking-[0.35em] text-muted-foreground mt-1">
              25th Anniversary Celebration
            </p>
          </div>

          <Divider />

          <p className="font-display mx-auto max-w-md text-lg text-foreground/90 font-medium">
            {invite.closing}
          </p>

          {invite.slogan && (
            <p className="font-script mt-4 text-2xl sm:text-3xl text-primary drop-shadow-sm">
              &ldquo;{invite.slogan}&rdquo;
            </p>
          )}

          <p className="font-display mt-8 text-[1rem] uppercase tracking-[0.4em] text-primary/70 font-semibold">
            10 . 12 . 2026
          </p>
        </Reveal>
      </footer>
    </main>
  );
}
