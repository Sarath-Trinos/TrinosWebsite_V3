import { ArrowRight } from "lucide-react";

const Hero = () => {
  return (
    <section className="relative pt-28 lg:pt-32 pb-20 min-h-screen flex items-center overflow-hidden bg-black">
      {/* background videos at full opacity */}
      <video
        className="absolute inset-0 w-full h-full object-cover"
        autoPlay
        loop
        muted
        playsInline
        preload="auto"
        aria-hidden="true"
      >
        <source src="/home/May_05_0114_pm_31s_202605061102_hnu9v.mp4" type="video/mp4" />
      </video>
      {/* left-side dark gradient for text readability (Avaamo-style) */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-r from-black/85 via-black/55 to-transparent" />

      <div className="container-px max-w-[1400px] mx-auto relative z-10 w-full">
        <div className="max-w-4xl animate-fade-up text-white">
          <h1 className="font-display text-4xl sm:text-5xl md:text-5xl lg:text-6xl leading-[1.05] whitespace-nowrap">
            Transforming Enterprises with
            <br />
            Intelligent, Secure &amp; Scalable
            <br />
            Technology
          </h1>
          <p className="mt-6 text-lg md:text-xl text-white/85 max-w-xl text-balance">
            We empower organizations to accelerate innovation through advanced AI systems, robust Cyber Security, Cloud Modernization, and Enterprise-grade Software Engineering.
          </p>

          <div className="mt-8 flex flex-wrap items-center gap-4">
            <a href="#agents" className="group inline-flex items-center gap-2 bg-gradient-cta text-primary-foreground font-semibold px-7 py-3.5 rounded-full shadow-glow hover:shadow-card transition-all">
              Start Your AI Project
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </a>
            <a href="#demo" className="inline-flex items-center gap-2 font-semibold px-6 py-3.5 rounded-full border border-white/40 text-white hover:border-white hover:bg-white/10 transition-colors">
              Explore Our Services
            </a>
          </div>

          <div className="mt-10 flex items-center gap-6 text-sm text-white/70">
            <div>
              <div className="font-display text-2xl font-bold text-white">95%</div>
              deployment success
            </div>
            <div className="w-px h-10 bg-white/30" />
            <div>
              <div className="font-display text-2xl font-bold text-white">300M+</div>
              conversations
            </div>
            <div className="w-px h-10 bg-white/30" />
            <div>
              <div className="font-display text-2xl font-bold text-white">114</div>
              languages
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
