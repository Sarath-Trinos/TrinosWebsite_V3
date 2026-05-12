"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import { Bot, Database, Rocket, MessagesSquare, Eye, Workflow } from "lucide-react";
import Image from "next/image";
import type { StaticImageData } from "next/image";
import SectionHeader from "./SectionHeader";
import grace from "@/assets/agent-grace.jpg";
import daphne from "@/assets/agent-daphne.jpg";
import johnny from "@/assets/agent-johnny.jpg";
import manish from "@/assets/agent-manish.jpg";
import heroAgent from "@/assets/hero-agent.jpg";

type Tile = {
  icon: typeof Bot;
  title: string;
  headline: string;
  description: string;
  image: StaticImageData;
  video?: string;
};

const tiles: Tile[] = [
  {
    icon: Bot,
    title: "Agentic AI",
    headline: "Agentic AI",
    description:
      "Multi-step autonomous agents that plan, call tools, and take action. Safeguards and human-in-the-loop baked in.",
    image: grace,
  },
  {
    icon: Database,
    title: "Retrieval-Augmented Generation",
    headline: "Retrieval-Augmented Generation",
    description:
      "Build intelligent systems that combine the power of large language models with your proprietary data.",
    image: daphne,
    video: "/videos/rag.mp4",
  },
  {
    icon: Rocket,
    title: "MVP Development",
    headline: "MVP Development",
    description:
      "Design and ship a production-ready Minimum Viable Product fast—clean UX, reliable backend, and AI features where they matter most.",
    image: johnny,
  },
  {
    icon: MessagesSquare,
    title: "Voice Assistants & Chatbots",
    headline: "Voice Assistants & Chatbots",
    description:
      "Real-time natural conversations with speech-to-text and TTS. Domain-aware assistants for support, sales, and internal ops.",
    image: manish,
  },
  {
    icon: Eye,
    title: "NLP, Computer Vision",
    headline: "NLP, Computer Vision",
    description:
      "Leverage natural language processing and computer vision technologies.",
    image: heroAgent,
  },
  {
    icon: Workflow,
    title: "Robotic Process Automation (RPA)",
    headline: "Robotic Process Automation (RPA)",
    description:
      "Automate repetitive business processes and workflows to improve efficiency and reduce errors.",
    image: grace,
    video: "/videos/Robotic automation section.mp4",
  },
];

const AgentPlatform = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [imageVisible, setImageVisible] = useState(false);
  const imageWrapperRef = useRef<HTMLDivElement | null>(null);
  const isScrollingRef = useRef(false);
  const scrollTimeoutRef = useRef<number | null>(null);

  useEffect(() => {
    const el = imageWrapperRef.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setImageVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.15, rootMargin: "0px 0px -10% 0px" }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const onScroll = () => {
      isScrollingRef.current = true;
      if (scrollTimeoutRef.current) window.clearTimeout(scrollTimeoutRef.current);
      scrollTimeoutRef.current = window.setTimeout(() => {
        isScrollingRef.current = false;
      }, 150);
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", onScroll);
      if (scrollTimeoutRef.current) window.clearTimeout(scrollTimeoutRef.current);
    };
  }, []);

  const handleActivate = useCallback((i: number) => {
    if (isScrollingRef.current) return;
    setActiveIndex((prev) => (prev === i ? prev : i));
  }, []);

  return (
    <section id="agents" className="py-24">
      <div className="container-px max-w-[1400px] mx-auto">
        <SectionHeader
          headlineWeight="normal"
          title={
            <>
              AI & Intelligent{" "}
              <span className="text-brand-gradient">Systems</span>
            </>
          }
          description="Specialized AI agents and enterprise platforms that transform support, workforce operations, and healthcare—with human-like intelligence you can deploy at scale."
        />
        <div className="grid lg:grid-cols-12 lg:gap-4 xl:gap-5">
          {/* Left: media + overlay — slow horizontal slide into view */}
          <div
            ref={imageWrapperRef}
            className="lg:col-span-4 flex items-center justify-start"
          >
            <div className="relative w-full max-w-[350px] sm:max-w-sm lg:max-w-full aspect-[4/5] overflow-hidden rounded-3xl">
              {tiles.map((tile, i) => {
                const isActive = i === activeIndex;
                return (
                  <div
                    key={tile.title}
                    aria-hidden={!isActive}
                    className="absolute inset-0 transition-opacity duration-300 ease-out"
                    style={{
                      opacity: isActive ? 1 : 0,
                      pointerEvents: isActive ? "auto" : "none",
                    }}
                  >
                    <div
                      className={`absolute inset-0 transition-transform duration-[2800ms] [transition-timing-function:cubic-bezier(0.22,1,0.36,1)] will-change-transform ${
                        imageVisible ? "translate-x-0" : "translate-x-full"
                      }`}
                    >
                      {isActive && tile.video ? (
                        <video
                          src={tile.video}
                          autoPlay
                          loop
                          muted
                          playsInline
                          className="absolute inset-0 w-full h-full object-cover object-center"
                        />
                      ) : (
                        <Image
                          src={tile.image}
                          alt={tile.headline}
                          fill
                          placeholder="blur"
                          sizes="(min-width: 1024px) 26vw, 90vw"
                          className="object-cover"
                          priority={i === 0}
                        />
                      )}
                      <div className="absolute inset-x-0 bottom-0 z-10 bg-gradient-to-t from-black/85 via-black/55 to-transparent p-5 md:p-6">
                        <h3 className="font-display font-bold text-xl md:text-2xl text-white">
                          {tile.headline}
                        </h3>
                        <p className="mt-2 text-sm md:text-[15px] text-white/85 leading-snug">
                          {tile.description}
                        </p>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Right: Platform overview */}
          <div className="lg:col-span-8 tile py-6 md:py-8 px-5 md:px-7 lg:px-8 relative overflow-hidden bg-[radial-gradient(ellipse_at_top_right,_#1a3556_0%,_#0f1e35_45%,_#0a1628_100%)] flex items-center justify-center">
            <div className="w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 md:gap-3.5">
              {tiles.map(({ icon: Icon, title }, i) => {
                const isActive = i === activeIndex;
                return (
                  <div
                    key={title}
                    onMouseEnter={() => handleActivate(i)}
                    onFocus={() => handleActivate(i)}
                    onClick={() => handleActivate(i)}
                    tabIndex={0}
                    role="button"
                    aria-pressed={isActive}
                    className={`group rounded-2xl border border-white/10 bg-white/5 p-3 md:p-3.5 flex items-center gap-3 min-h-[82px] md:min-h-[86px] cursor-pointer shadow-none outline-none transition-[background-color,box-shadow,border-color] duration-200 hover:border-transparent hover:bg-card hover:shadow-glow focus-visible:border-transparent focus-visible:bg-card focus-visible:shadow-glow ${
                      isActive ? "ring-2 ring-primary/40" : ""
                    }`}
                  >
                    <div className="w-8 h-8 shrink-0 rounded-full bg-gradient-primary grid place-items-center">
                      <Icon className="w-3.5 h-3.5 text-white" />
                    </div>
                    <div className="flex-1 min-w-0 font-semibold text-[13px] md:text-sm text-white/95 leading-snug group-hover:text-foreground group-focus-visible:text-foreground">
                      {title}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AgentPlatform;
