"use client";

import { ArrowRight } from "lucide-react";
import { useEffect, useRef } from "react";

const ProductsHero = () => {
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
          className="absolute inset-0 w-full h-full object-cover object-[center_32%]"
          src="/videos/product_hero.mp4"
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
            <span className="chip mb-5">Products</span>
            <h1 className="font-display text-4xl sm:text-5xl md:text-6xl leading-[1.05] text-balance text-white">
              Intelligent solutions for{" "}
              <span className="text-brand-gradient-reverse">
                modern enterprises
              </span>
              .
            </h1>
            <p className="mt-6 text-lg md:text-xl text-white/80 max-w-2xl text-balance">
              A growing suite of AI-powered products built to accelerate digital transformation
              and drive measurable business outcomes.
            </p>

            <div className="mt-9 flex flex-wrap items-center gap-4">
              <a
                href="#products"
                className="group inline-flex items-center gap-2 bg-gradient-cta text-primary-foreground font-semibold px-7 py-3.5 rounded-full shadow-glow hover:shadow-card transition-all"
              >
                Explore the suite
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </a>
              <a
                href="#demo"
                className="inline-flex items-center gap-2 font-semibold px-6 py-3.5 rounded-full border border-white/40 text-white hover:border-white hover:bg-white/10 transition-colors"
              >
                Request a demo
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductsHero;
