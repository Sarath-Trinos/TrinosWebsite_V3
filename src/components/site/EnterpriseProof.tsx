import { ArrowRight, ShieldCheck } from "lucide-react";

const EnterpriseProof = () => (
  <section className="py-24 bg-gradient-dark text-on-surface-dark relative overflow-hidden">
    <div className="absolute -top-40 left-1/3 w-[600px] h-[600px] rounded-full bg-primary/20 blur-3xl" />
    <div className="container-px max-w-[1400px] mx-auto relative">
      <div className="grid lg:grid-cols-2 gap-14 items-center">
        <div>
          <span className="chip bg-white/10 text-white border border-white/10">The last mile</span>
          <h2 className="mt-5 font-display font-bold text-4xl md:text-5xl leading-tight text-balance">
            While 95% of enterprise AI projects fail,{" "}
            <span className="bg-gradient-to-r from-primary-glow to-white bg-clip-text text-transparent">we succeed.</span>
          </h2>
          <p className="mt-5 text-lg text-white/70 text-balance">
            Enterprise AI pilots are failing at an unprecedented rate — not because the technology
            doesn't work, but because they fail at deployment. We've cracked the code by mastering
            the messy reality of enterprise infrastructure, legacy systems, and security compliance.
          </p>
          <a href="#" className="inline-flex items-center gap-2 mt-8 bg-gradient-cta text-primary-foreground font-semibold px-7 py-3.5 rounded-full shadow-glow">
            Read the manifesto <ArrowRight className="w-4 h-4" />
          </a>
        </div>

        <div className="grid gap-5">
          {[
            { stat: "95%", label: "of enterprise AI pilots fail at the last mile" },
            { stat: "10x", label: "faster time to production with Trinos" },
            { stat: "100%", label: "compliance with SOC 2, HIPAA, and GDPR" },
          ].map((s) => (
            <div key={s.stat} className="bg-white/5 backdrop-blur border border-white/10 rounded-2xl p-6 flex items-center gap-5">
              <div className="font-display font-bold text-5xl bg-gradient-to-br from-primary-glow to-white bg-clip-text text-transparent">
                {s.stat}
              </div>
              <p className="text-white/80">{s.label}</p>
            </div>
          ))}
          <div className="flex items-center gap-3 mt-2 text-white/70 text-sm">
            <ShieldCheck className="w-5 h-5 text-primary-glow" />
            Native Trust Layer for security, compliance & data integrity.
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default EnterpriseProof;
