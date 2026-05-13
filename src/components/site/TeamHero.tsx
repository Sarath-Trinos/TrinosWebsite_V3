import { ArrowRight } from "lucide-react";

const TeamHero = () => {
  return (
    <section className="relative overflow-hidden bg-black">
      <div className="h-[5rem]" aria-hidden="true" />
      <div className="relative pt-16 lg:pt-24 pb-24">
        <video
          className="absolute inset-0 w-full h-full object-cover"
          src="/team/mp_.mp4"
          autoPlay
          muted
          loop
          playsInline
          aria-hidden="true"
        />
        <div className="absolute inset-0 bg-black/60" />

        <div className="container-px max-w-[1400px] mx-auto relative z-10">
          <div className="max-w-3xl animate-fade-up">
            <span className="chip mb-5">Team</span>
            <h1 className="font-display text-4xl sm:text-5xl md:text-6xl leading-[1.05] text-balance text-white">
              The minds behind{" "}
              <span className="text-brand-gradient-reverse">
                Trinos
              </span>
              .
            </h1>
            <p className="mt-6 text-lg md:text-xl text-white/80 max-w-2xl text-balance">
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
                className="inline-flex items-center gap-2 font-semibold px-6 py-3.5 rounded-full border border-white/40 text-white hover:border-white hover:bg-white/10 transition-colors"
              >
                Work with us
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TeamHero;
