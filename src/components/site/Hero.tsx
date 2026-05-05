import { ArrowRight, Sparkles } from "lucide-react";
import Image from "next/image";
import heroAgent from "@/assets/hero-agent.jpg";

const Hero = () => {
  return (
    <section className="relative pt-28 lg:pt-32 pb-20 bg-gradient-hero overflow-hidden">
      {/* decorative blobs */}
      <div className="pointer-events-none absolute -top-32 -right-32 w-[520px] h-[520px] rounded-full bg-primary/10 blur-3xl" />
      <div className="pointer-events-none absolute top-1/2 -left-40 w-[420px] h-[420px] rounded-full bg-primary-glow/10 blur-3xl" />

      <div className="container-px max-w-[1400px] mx-auto relative">
        <div className="grid lg:grid-cols-2 gap-10 lg:gap-14 items-center">
          <div className="animate-fade-up">
            <h1 className="mt-6 font-display font-bold text-5xl md:text-6xl lg:text-7xl leading-[1.02] text-balance">
              Transforming Enterprises with Intelligent, Secure &amp; Scalable Technology
            </h1>
            <p className="mt-6 text-lg md:text-xl text-muted-foreground max-w-xl text-balance">
            We empower organizations to accelerate innovation through advanced AI systems, robust Cyber Security, Cloud Modernization, and Enterprise-grade Software Engineering. 
            </p>

            <div className="mt-8 flex flex-wrap items-center gap-4">
              <a href="#agents" className="group inline-flex items-center gap-2 bg-gradient-cta text-primary-foreground font-semibold px-7 py-3.5 rounded-full shadow-glow hover:shadow-card transition-all">
                Start Your AI Project
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </a>
              <a href="#demo" className="inline-flex items-center gap-2 font-semibold px-6 py-3.5 rounded-full border border-border hover:border-primary hover:text-primary transition-colors">
                Explore Our Services
              </a>
            </div>

            <div className="mt-10 flex items-center gap-6 text-sm text-muted-foreground">
              <div>
                <div className="font-display text-2xl font-bold text-foreground">95%</div>
                deployment success
              </div>
              <div className="w-px h-10 bg-border" />
              <div>
                <div className="font-display text-2xl font-bold text-foreground">300M+</div>
                conversations
              </div>
              <div className="w-px h-10 bg-border" />
              <div>
                <div className="font-display text-2xl font-bold text-foreground">114</div>
                languages
              </div>
            </div>
          </div>

          {/* Hero image */}
          <div className="relative animate-fade-up [animation-delay:200ms]">
            <div className="relative tile">
              <Image
                src={heroAgent}
                alt="Avaamo AI agent representative wearing a headset"
                className="w-full h-auto object-cover"
                placeholder="blur"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-tr from-primary/20 via-transparent to-transparent" />
            </div>

            {/* Floating chat bubble */}
            <div className="absolute -left-4 md:-left-10 bottom-10 bg-card rounded-2xl shadow-card p-4 max-w-[260px] animate-float-slow">
              <div className="flex items-center gap-2 text-xs font-semibold text-primary mb-1">
                <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
                Ava · live now
              </div>
              <p className="text-sm text-foreground">
                "Hi! I can resolve your order, billing, or account questions in seconds."
              </p>
            </div>

            {/* Floating stat card */}
            <div className="absolute -right-4 md:-right-8 top-10 bg-card rounded-2xl shadow-card px-5 py-4 animate-float-slow [animation-delay:1.5s]">
              <div className="text-xs text-muted-foreground">Avg. resolution</div>
              <div className="font-display text-2xl font-bold text-primary">28s</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
