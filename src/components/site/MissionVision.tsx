import { Target, Telescope } from "lucide-react";

const items = [
  {
    icon: Target,
    eyebrow: "Our mission",
    text: "To empower organizations with intelligent and secure digital solutions that accelerate transformation and unlock operational excellence.",
  },
  {
    icon: Telescope,
    eyebrow: "Our vision",
    text: "To be a global leader in AI-driven enterprise transformation by delivering future-ready, scalable, and secure technology platforms.",
  },
];

const MissionVision = () => (
  <section className="py-24 bg-gradient-dark text-on-surface-dark relative overflow-hidden">
    <div className="absolute -top-40 left-1/3 w-[600px] h-[600px] rounded-full bg-primary/20 blur-3xl" />
    <div className="absolute -bottom-32 right-0 w-[420px] h-[420px] rounded-full bg-primary-glow/10 blur-3xl" />

    <div className="container-px max-w-[1400px] mx-auto relative">
      <div className="grid md:grid-cols-2 gap-6">
        {items.map(({ icon: Icon, eyebrow, text }) => (
          <div
            key={eyebrow}
            className="bg-white/5 backdrop-blur border border-white/10 rounded-[28px] p-8 md:p-10 flex flex-col gap-5"
          >
            <div className="w-12 h-12 rounded-2xl bg-gradient-primary grid place-items-center shadow-glow">
              <Icon className="w-6 h-6 text-white" />
            </div>
            <div className="text-xs font-semibold uppercase tracking-[0.18em] text-primary-glow">
              {eyebrow}
            </div>
            <p className="text-xl md:text-2xl font-display leading-snug text-white text-balance">
              {text}
            </p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default MissionVision;
