import { ArrowRight } from "lucide-react";

const CTASection = () => (
  <section id="demo" className="py-24">
    <div className="container-px max-w-[1400px] mx-auto">
      <div className="tile bg-gradient-cta text-primary-foreground p-12 md:p-20 text-center relative overflow-hidden">
        <div className="absolute -top-32 -left-32 w-[400px] h-[400px] rounded-full bg-white/10 blur-3xl" />
        <div className="absolute -bottom-32 -right-32 w-[400px] h-[400px] rounded-full bg-white/10 blur-3xl" />
        <div className="relative">
          <h2 className="font-display font-bold text-4xl md:text-6xl text-balance">
            Ready to deploy AI that actually works?
          </h2>
          <p className="mt-5 text-lg md:text-xl text-white/90 max-w-2xl mx-auto text-balance">
            Talk to our team about your first production-ready agent — live in weeks, not years.
          </p>
          <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
            <a href="#" className="inline-flex items-center gap-2 bg-white text-primary font-semibold px-7 py-3.5 rounded-full shadow-card hover:shadow-glow transition-all">
              Experience a demo <ArrowRight className="w-4 h-4" />
            </a>
            <a href="#" className="inline-flex items-center gap-2 border border-white/40 text-white font-semibold px-7 py-3.5 rounded-full hover:bg-white/10 transition-all">
              Talk to an expert
            </a>
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default CTASection;
