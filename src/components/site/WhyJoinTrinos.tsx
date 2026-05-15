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
    bg: "bg-[#EFE6FF]",
  },
  {
    title: "Work–life balance",
    description:
      "Flexible schedules and remote work options to support your lifestyle.",
    image: "/career/Agentic_AI.jpg",
    bg: "bg-[#FFE9CC]",
  },
  {
    title: "Innovation",
    description:
      "Work on cutting-edge AI projects that shape the future of technology.",
    image: "/career/ai-chatbot.jpg",
    bg: "bg-[#D6F4E4]",
  },
  {
    title: "Global impact",
    description: "Build solutions that transform enterprises worldwide.",
    image:
      "/career/businessman-show-virtual-graphic-global-internet-artificial-intelligence-acquire-knowledge-information.jpg",
    bg: "bg-[#DCEBFF]",
  },
];

const SLIDE_MS = 600;
const AUTOPLAY_MS = 3800;

// Active card: large, with colored background panel and side-by-side image + text.
function ActiveCard({ slide }: { slide: Slide }) {
  return (
    <div
      className={`flex h-full w-full items-stretch gap-6 rounded-3xl p-4 md:gap-8 md:p-5 text-foreground ${slide.bg}`}
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
        <p className="mt-4 max-w-md text-sm leading-relaxed md:mt-6 md:text-base text-foreground/70">
          {slide.description}
        </p>
      </div>
    </div>
  );
}

// Preview card: compact, no background panel, image-left text-right.
function PreviewCard({ slide }: { slide: Slide }) {
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

const WhyJoinTrinos = () => {
  const total = slides.length;
  const [index, setIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  const indexRef = useRef(0);
  indexRef.current = index;
  const autoplayIdRef = useRef<number | null>(null);

  const startAutoplay = useCallback(() => {
    if (autoplayIdRef.current !== null) {
      window.clearInterval(autoplayIdRef.current);
    }
    autoplayIdRef.current = window.setInterval(() => {
      setIsAnimating((animating) => {
        if (animating) return animating;
        setIndex((i) => (i + 1) % total);
        window.setTimeout(() => setIsAnimating(false), SLIDE_MS + 50);
        return true;
      });
    }, AUTOPLAY_MS);
  }, [total]);

  const go = useCallback(
    (nextIdx: number) => {
      if (isAnimating) return;
      setIsAnimating(true);
      setIndex(nextIdx);
      window.setTimeout(() => setIsAnimating(false), SLIDE_MS + 50);
      // Reset the autoplay timer so it doesn't fire immediately after a manual click.
      startAutoplay();
    },
    [isAnimating, startAutoplay],
  );

  const advance = useCallback(() => {
    go((indexRef.current + 1) % total);
  }, [go, total]);

  const retreat = useCallback(() => {
    go((indexRef.current - 1 + total) % total);
  }, [go, total]);

  useEffect(() => {
    startAutoplay();
    return () => {
      if (autoplayIdRef.current !== null) {
        window.clearInterval(autoplayIdRef.current);
        autoplayIdRef.current = null;
      }
    };
  }, [startAutoplay]);

  // The active card at the active slot is the current index.
  // The preview card at the preview slot is the next slide.
  // During a transition, the OUTGOING active card slides off to the left,
  // and the OUTGOING preview slides left into the active slot — at the same
  // moment the new active and new preview render in their final positions,
  // hidden behind the sliding outgoing cards. When the slide ends, the
  // outgoing cards are removed and the new ones become visible.

  const activeSlide = slides[index];
  const previewSlide = slides[(index + 1) % total];

  return (
    <section id="why-join" className="py-24 bg-surface-soft">
      <div className="container-px max-w-[1400px] mx-auto">
        <SectionHeader
          headlineWeight="normal"
          title="Why join Trinos"
          titleClassName="font-display font-normal text-4xl md:text-5xl text-balance text-brand-gradient-reverse"
          subtitle="Build a career with meaning"
          description="Join a team of passionate innovators transforming enterprises with AI. You'll work on meaningful projects, grow your tech skills, and make a lasting career impact."
        />

        <div className="relative">
          <div className="relative overflow-hidden">
            <div className="grid h-[320px] grid-cols-1 items-stretch gap-6 sm:h-[360px] md:h-[340px] md:grid-cols-12 md:gap-10">
              {/* Active slot */}
              <div className="relative overflow-hidden md:col-span-7">
                <SlotContent index={index} variant="active">
                  <ActiveCard slide={activeSlide} />
                </SlotContent>
              </div>

              {/* Preview slot — hidden on mobile, the active card carries the story alone */}
              <div className="relative hidden overflow-hidden md:col-span-5 md:block">
                <SlotContent index={index} variant="preview">
                  <PreviewCard slide={previewSlide} />
                </SlotContent>
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

// SlotContent animates its children sliding in from the right whenever `index` changes.
// The previous children slide off to the left over the same duration. Children are keyed
// by `index` so React mounts/unmounts as needed.
function SlotContent({
  index,
  variant,
  children,
}: {
  index: number;
  variant: "active" | "preview";
  children: React.ReactNode;
}) {
  const [prevChildren, setPrevChildren] = useState<React.ReactNode | null>(
    null,
  );
  const [prevIndex, setPrevIndex] = useState<number | null>(null);
  const [phase, setPhase] = useState<"idle" | "animating">("idle");
  const lastIndexRef = useRef(index);
  const lastChildrenRef = useRef(children);

  useEffect(() => {
    if (index === lastIndexRef.current) {
      lastChildrenRef.current = children;
      return;
    }
    // Capture the previous frame for the outgoing animation.
    setPrevChildren(lastChildrenRef.current);
    setPrevIndex(lastIndexRef.current);
    setPhase("animating");
    lastIndexRef.current = index;
    lastChildrenRef.current = children;

    const t = window.setTimeout(() => {
      setPrevChildren(null);
      setPrevIndex(null);
      setPhase("idle");
    }, SLIDE_MS + 30);
    return () => window.clearTimeout(t);
  }, [index, children]);

  const enterFromX = variant === "active" ? "100%" : "130%";
  const exitToX = variant === "active" ? "-110%" : "-130%";

  // In the preview slot, the outgoing slide is the same as the incoming active
  // (both represent the slide that just became active). Rendering both would
  // show the same card twice during the transition — so the preview slot skips
  // its outgoing layer entirely.
  const renderOutgoing = variant === "active" && prevChildren;

  return (
    <>
      {/* Outgoing frame: starts at rest (translateX 0), animates to exitToX. */}
      {renderOutgoing && (
        <OutgoingLayer key={`out-${prevIndex}`} exitToX={exitToX}>
          {prevChildren}
        </OutgoingLayer>
      )}
      {/* Incoming frame: starts at enterFromX, animates to translateX 0.
          When phase is "idle" (no transition active), it stays at rest. */}
      <IncomingLayer
        key={`in-${index}`}
        enterFromX={enterFromX}
        active={phase === "animating"}
      >
        {children}
      </IncomingLayer>
    </>
  );
}

const EASE = "cubic-bezier(0.22, 1, 0.36, 1)";

function OutgoingLayer({
  exitToX,
  children,
}: {
  exitToX: string;
  children: React.ReactNode;
}) {
  const [transform, setTransform] = useState("translateX(0)");

  useEffect(() => {
    // Trigger the slide on the next frame so the transition runs.
    const r1 = requestAnimationFrame(() => {
      requestAnimationFrame(() => {
        setTransform(`translateX(${exitToX})`);
      });
    });
    return () => cancelAnimationFrame(r1);
  }, [exitToX]);

  return (
    <div
      className="absolute inset-0"
      style={{
        transform,
        transition: `transform ${SLIDE_MS}ms ${EASE}`,
        zIndex: 2,
      }}
    >
      {children}
    </div>
  );
}

function IncomingLayer({
  enterFromX,
  active,
  children,
}: {
  enterFromX: string;
  active: boolean;
  children: React.ReactNode;
}) {
  const [transform, setTransform] = useState(
    active ? `translateX(${enterFromX})` : "translateX(0)",
  );

  useEffect(() => {
    if (!active) return;
    // Start at enterFromX, then on next frame transition to 0.
    setTransform(`translateX(${enterFromX})`);
    const r1 = requestAnimationFrame(() => {
      requestAnimationFrame(() => {
        setTransform("translateX(0)");
      });
    });
    return () => cancelAnimationFrame(r1);
  }, [active, enterFromX]);

  return (
    <div
      className="absolute inset-0"
      style={{
        transform,
        transition: active ? `transform ${SLIDE_MS}ms ${EASE}` : "none",
        zIndex: 1,
      }}
    >
      {children}
    </div>
  );
}

export default WhyJoinTrinos;
