import { ArrowRight, HeartPulse, Stethoscope, Activity } from "lucide-react";
import Image from "next/image";
import SectionHeader from "./SectionHeader";
import daphne from "@/assets/agent-daphne.jpg";

const HealthcareAI = () => (
  <section className="py-24 bg-surface-tint">
    <div className="container-px max-w-[1400px] mx-auto">
      <SectionHeader
        eyebrow="AI for Healthcare"
        title="Meet Gigi, your digital care companion"
        description="Your AI-powered guide to smarter, simpler healthcare — right from your website or MyChart."
        exploreHref="#"
      />

      <div className="grid lg:grid-cols-5 gap-6">
        <div className="lg:col-span-2 tile bg-card overflow-hidden relative">
          <Image src={daphne} alt="Healthcare AI agent" placeholder="blur" className="w-full h-full object-cover aspect-[4/5]" />
          <div className="absolute inset-x-0 bottom-0 p-7 bg-gradient-to-t from-foreground/85 via-foreground/40 to-transparent text-on-surface-dark">
            <span className="chip bg-white/20 text-white border border-white/20 mb-3">Care Companion</span>
            <h3 className="font-display font-bold text-2xl">Smarter, simpler healthcare guidance</h3>
          </div>
        </div>

        <div className="lg:col-span-3 grid gap-6">
          {[
            { icon: HeartPulse, title: "Healthcare Agents", desc: "Adaptive agents that learn from every patient interaction and enhance the entire care journey with 24/7 support." },
            { icon: Stethoscope, title: "Digital Care Agents", desc: "AI-powered guides for smarter healthcare on your website or MyChart portal." },
            { icon: Activity, title: "Ambient AI", desc: "Practice medicine the way it should be — without the burden of documentation or coding." },
          ].map((it) => (
            <article key={it.title} className="tile bg-card border border-border p-6 md:p-7 flex items-start gap-5">
              <div className="w-12 h-12 shrink-0 rounded-2xl bg-gradient-tile grid place-items-center text-primary">
                <it.icon className="w-6 h-6" />
              </div>
              <div className="flex-1">
                <h3 className="font-display font-bold text-xl mb-2">{it.title}</h3>
                <p className="text-muted-foreground">{it.desc}</p>
                <a href="#" className="link-arrow mt-3 text-sm">Learn more <ArrowRight className="w-4 h-4" /></a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </div>
  </section>
);

export default HealthcareAI;
