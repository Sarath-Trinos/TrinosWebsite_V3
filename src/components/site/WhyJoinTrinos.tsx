"use client";

import Image from "next/image";
import { useCallback, useEffect, useRef, useState } from "react";
import { ArrowLeft, ArrowRight } from "lucide-react";
import SectionHeader from "./SectionHeader";

type Slide = {
  title: string;
  description: string;
  image: string;
  bg: string;
};

const slides: Slide[] = [
  {
    title: "Career growth",
    description:
      "Continuous learning opportunities and clear career progression paths.",
    image: "/career/About_US_Our_Value.jpg",
    bg: "bg-[hsl(196_100%_47%)]",
  },
  {
    title: "Work–life balance",
    description:
      "Flexible schedules and remote work options to support your lifestyle.",
    image: "/career/Agentic_AI.jpg",
    bg: "bg-[hsl(24_95%_53%)]",
  },
  {
    title: "Innovation",
    description:
      "Work on cutting-edge AI projects that shape the future of technology.",
    image: "/career/ai-chatbot.jpg",
    bg: "bg-[hsl(var(--surface-dark))]",
  },
  {
    title: "Global impact",
    description: "Build solutions that transform enterprises worldwide.",
    image:
      "/career/businessman-show-virtual-graphic-global-internet-artificial-intelligence-acquire-knowledge-information.jpg",
    bg: "bg-[hsl(262_70%_55%)]",
  },
];

const SLIDE_MS = 550;
const AUTOPLAY_MS = 3800;

type Variant = "active" | "preview";

function Card({ slide, variant }: { slide: Slide; variant: Variant }) {
  if (variant === "active") {
    return (
      <div
        className={`flex h-full w-full items-stretch gap-6 rounded-3xl p-4 md:gap-8 md:p-5 text-white ${slide.bg}`}
      >
        <div className="relative aspect-[4/3] w-1/2 shrink-0 overflow-hidden rounded-2xl md:w-[44%]">
          <Image
            src={slide.image}
            alt={slide.title}
            fill
            sizes="(max-width: 768px) 50vw, 360px"
            className="object-cover"
            priority
          />
        </div>
        <div className="flex flex-1 flex-col justify-start py-2 pr-2 md:py-3 md:pr-4">
          <h3 className="font-display font-bold text-2xl md:text-4xl leading-tight">
            {slide.title}
          </h3>
          <p className="mt-4 max-w-md text-sm leading-relaxed md:mt-6 md:text-base text-white/90">
            {slide.description}
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="flex h-full w-full items-end gap-5 p-2 md:gap-6 md:p-4">
      <div className="relative aspect-square w-40 shrink-0 overflow-hidden rounded-2xl bg-white md:w-56">
        <Image
          src={slide.image}
          alt={slide.title}
          fill
          sizes="(max-width: 768px) 160px, 224px"
          className="object-cover"
        />
      </div>
      <div className="flex aspect-square flex-1 flex-col justify-center gap-3 pt-8 md:gap-4 md:pt-12">
        <h4 className="font-display font-bold text-xl leading-tight text-foreground md:text-2xl">
          {slide.title}
        </h4>
        <p className="text-sm leading-relaxed text-muted-foreground md:text-base">
          {slide.description}
        </p>
      </div>
    </div>
  );
}

type Phase = "enter" | "rest" | "exit";

function Slot({
  slide,
  variant,
  phase,
}: {
  slide: Slide;
  variant: Variant;
  phase: Phase;
}) {
  const enterFrom =
    variant === "active"
      ? "translate-x-full opacity-0"
      : "translate-x-[120%] opacity-0";
  const exitTo =
    variant === "active"
      ? "-translate-x-[105%] opacity-0"
      : "-translate-x-[30%] opacity-0";
  const rest = "translate-x-0 opacity-100";

  const state = phase === "enter" ? enterFrom : phase === "exit" ? exitTo : rest;

  return (
    <div
      className={`absolute inset-0 transition-all ease-[cubic-bezier(0.22,1,0.36,1)] ${state}`}
      style={{ transitionDuration: `${SLIDE_MS}ms` }}
    >
      <Card slide={slide} variant={variant} />
    </div>
  );
}

const WhyJoinTrinos = () => {
  const total = slides.length;
  const [index, setIndex] = useState(0);
  const [prevIndex, setPrevIndex] = useState<number | null>(null);
  const [enterReady, setEnterReady] = useState(true);
  const indexRef = useRef(0);
  indexRef.current = index;

  const go = useCallback(
    (nextIdx: number) => {
      setPrevIndex(indexRef.current);
      setIndex(nextIdx);
      setEnterReady(false);
      // Next frame: flip the entering slot from `enter` to `rest` so the
      // CSS transition runs.
      requestAnimationFrame(() => {
        requestAnimationFrame(() => setEnterReady(true));
      });
    },
    [],
  );

  const advance = useCallback(() => {
    go((indexRef.current + 1) % total);
  }, [go, total]);

  const retreat = useCallback(() => {
    go((indexRef.current - 1 + total) % total);
  }, [go, total]);

  useEffect(() => {
    const id = setInterval(() => {
      go((indexRef.current + 1) % total);
    }, AUTOPLAY_MS);
    return () => clearInterval(id);
  }, [go, total]);

  // Drop the outgoing frame once the transition completes.
  useEffect(() => {
    if (prevIndex === null) return;
    const t = setTimeout(() => setPrevIndex(null), SLIDE_MS + 30);
    return () => clearTimeout(t);
  }, [prevIndex, index]);

  const active = slides[index];
  const next = slides[(index + 1) % total];
  const outgoingActive = prevIndex !== null ? slides[prevIndex] : null;
  const outgoingPreview =
    prevIndex !== null ? slides[(prevIndex + 1) % total] : null;
  const enterPhase: Phase = enterReady ? "rest" : "enter";

  return (
    <section id="why-join" className="py-24 bg-surface-soft">
      <div className="container-px max-w-[1400px] mx-auto">
        <SectionHeader
          eyebrow="Why join Trinos"
          title="Build a career with meaning"
          description="Join a team of passionate innovators transforming enterprises with AI. You'll work on meaningful projects, grow your tech skills, and make a lasting career impact."
        />

        <div className="relative">
          <div className="relative overflow-hidden">
            <div className="grid h-[360px] grid-cols-1 items-stretch gap-6 md:h-[340px] md:grid-cols-12 md:gap-10">
              {/* Active slot */}
              <div className="relative md:col-span-7">
                {outgoingActive && (
                  <Slot
                    key={`active-out-${prevIndex}`}
                    slide={outgoingActive}
                    variant="active"
                    phase="exit"
                  />
                )}
                <Slot
                  key={`active-${index}`}
                  slide={active}
                  variant="active"
                  phase={enterPhase}
                />
              </div>

              {/* Preview slot */}
              <div className="relative md:col-span-5">
                {outgoingPreview && (
                  <Slot
                    key={`preview-out-${prevIndex}`}
                    slide={outgoingPreview}
                    variant="preview"
                    phase="exit"
                  />
                )}
                <Slot
                  key={`preview-${index}`}
                  slide={next}
                  variant="preview"
                  phase={enterPhase}
                />
              </div>
            </div>
          </div>

          {/* Progress + controls */}
          <div className="mt-10 flex items-center gap-6">
            <div className="relative h-px flex-1 bg-border">
              <div
                className="absolute inset-y-0 left-0 bg-foreground transition-all ease-[cubic-bezier(0.22,1,0.36,1)]"
                style={{
                  width: `${((index + 1) / total) * 100}%`,
                  transitionDuration: `${SLIDE_MS}ms`,
                }}
              />
            </div>
            <div className="flex items-center gap-3">
              <button
                type="button"
                aria-label="Previous"
                onClick={retreat}
                className="flex h-11 w-11 items-center justify-center rounded-full bg-foreground text-background transition hover:opacity-80 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
              >
                <ArrowLeft size={18} />
              </button>
              <button
                type="button"
                aria-label="Next"
                onClick={advance}
                className="flex h-11 w-11 items-center justify-center rounded-full bg-foreground text-background transition hover:opacity-80 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
              >
                <ArrowRight size={18} />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyJoinTrinos;