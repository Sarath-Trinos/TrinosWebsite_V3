import { ArrowRight } from "lucide-react";

const stats = [
  { value: "50+", label: "Years of combined leadership" },
  { value: "5", label: "Continents served" },
  { value: "3", label: "Co-founders, one mission" },
];

const CombinedLeadership = () => (
  <section className="py-24 bg-surface-soft">
    <div className="container-px max-w-[1400px] mx-auto">
      <div className="text-center max-w-3xl mx-auto">
        <span className="chip mb-5">Combined leadership</span>
        <h2 className="font-display font-normal text-4xl md:text-5xl text-balance leading-tight">
          Over 50 years of{" "}
          <span className="text-brand-gradient-reverse">
            transformative expertise
          </span>
          .
        </h2>
        <p className="mt-6 text-lg text-muted-foreground text-balance">
          We bring over 50 years of combined leadership experience in AI-first enterprise
          technology. Built on proven delivery and trusted client partnerships, we offer deep
          expertise in advanced AI systems, platform modernization, and secure cloud
          architectures across multiple industries.
        </p>
      </div>

      <div className="mt-14 grid sm:grid-cols-3 gap-5 max-w-4xl mx-auto">
        {stats.map(({ value, label }) => (
          <div
            key={label}
            className="tile bg-card p-8 text-center"
          >
            <div className="font-display font-bold text-5xl text-brand-gradient-reverse">
              {value}
            </div>
            <p className="mt-3 text-sm text-muted-foreground">{label}</p>
          </div>
        ))}
      </div>

      <div className="mt-12 flex justify-center">
        <a
          href="/careers"
          className="group inline-flex items-center gap-2 bg-gradient-cta text-primary-foreground font-semibold px-7 py-3.5 rounded-full shadow-glow hover:shadow-card transition-all"
        >
          Work with us
          <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
        </a>
      </div>
    </div>
  </section>
);

export default CombinedLeadership;
