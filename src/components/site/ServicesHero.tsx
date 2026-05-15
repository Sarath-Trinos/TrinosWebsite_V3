"use client";

import { ArrowRight } from "lucide-react";
import { useEffect, useRef } from "react";

const ServicesHero = () => {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          video.play().catch(() => {});
        } else {
          video.pause();
        }
      },
      { threshold: 0.01 }
    );
    observer.observe(video);

    return () => observer.disconnect();
  }, []);

  return (
    <section className="relative overflow-hidden bg-black">
      <div className="h-[5rem]" aria-hidden="true" />
      <div className="relative pt-16 lg:pt-24 pb-24">
        <video
          ref={videoRef}
          className="absolute inset-0 w-full h-full object-cover"
          src="/videos/mp_ (3).mp4"
          autoPlay
          muted
          loop
          playsInline
          preload="auto"
          disableRemotePlayback
          aria-hidden="true"
        />
        <div className="absolute inset-0 bg-black/60" />

        <div className="container-px max-w-[1400px] mx-auto relative z-10">
          <div className="max-w-3xl animate-fade-up">
            <span className="chip mb-5">Services</span>
            <h1 className="font-display text-4xl sm:text-5xl md:text-6xl leading-[1.05] text-balance text-white">
              <span className="text-white">AI &</span>{" "}
              <span className="text-brand-gradient-reverse">
                Intelligent Systems
              </span>
              <span className="text-white">.</span>
            </h1>
            <p className="mt-6 text-lg md:text-xl text-white/80 max-w-2xl text-balance">
              We develop end-to-end AI solutions that help enterprises automate operations,
              enhance decision-making, and unleash the power of data.
            </p>

            <div className="mt-9 flex flex-wrap items-center gap-4">
              <a
                href="#capabilities"
                className="group inline-flex items-center gap-2 bg-gradient-cta text-primary-foreground font-semibold px-7 py-3.5 rounded-full shadow-glow hover:shadow-card transition-all"
              >
                Explore capabilities
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </a>
              <a
                href="#our-services"
                className="inline-flex items-center gap-2 font-semibold px-6 py-3.5 rounded-full border border-white/40 text-white hover:border-white hover:bg-white/10 transition-colors"
              >
                Our services
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesHero;
