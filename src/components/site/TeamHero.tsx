import { ArrowRight } from "lucide-react";

const TeamHero = () => {
  return (
    <section className="relative pt-36 lg:pt-44 pb-24 overflow-hidden bg-gradient-hero">
      <div className="absolute -top-40 -right-32 w-[560px] h-[560px] rounded-full bg-primary/15 blur-3xl" />
      <div className="absolute -bottom-32 -left-32 w-[420px] h-[420px] rounded-full bg-primary-glow/10 blur-3xl" />

      <div className="container-px max-w-[1400px] mx-auto relative z-10">
        <div className="max-w-3xl animate-fade-up">
          <span className="chip mb-5">Team</span>
          <h1 className="font-display text-4xl sm:text-5xl md:text-6xl leading-[1.05] text-balance">
            The minds behind{" "}
            <span className="text-brand-gradient-reverse">
              Trinos
            </span>
            .
          </h1>
          <p className="mt-6 text-lg md:text-xl text-muted-foreground max-w-2xl text-balance">
            Three co-founders. Five decades of combined experience building intelligent,
            secure, and scalable technology for the modern enterprise.
          </p>

          <div className="mt-9 flex flex-wrap items-center gap-4">
            <a
              href="#leadership"
              className="group inline-flex items-center gap-2 bg-gradient-cta text-primary-foreground font-semibold px-7 py-3.5 rounded-full shadow-glow hover:shadow-card transition-all"
            >
              Meet the founders
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </a>
            <a
              href="#demo"
              className="inline-flex items-center gap-2 font-semibold px-6 py-3.5 rounded-full border border-border text-foreground hover:border-primary hover:text-primary transition-colors"
            >
              Work with us
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TeamHero;
