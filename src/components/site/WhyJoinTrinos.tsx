import { TrendingUp, Heart, Zap, Globe, ArrowUpRight } from "lucide-react";
import SectionHeader from "./SectionHeader";

const benefits = [
  {
    icon: TrendingUp,
    title: "Career growth",
    description: "Continuous learning opportunities and clear career progression paths.",
  },
  {
    icon: Heart,
    title: "Work-Life balance",
    description: "Flexible schedules and remote work options to support your lifestyle.",
  },
  {
    icon: Zap,
    title: "Innovation",
    description: "Work on cutting-edge AI projects that shape the future of technology.",
  },
  {
    icon: Globe,
    title: "Global Impact",
    description: "Build solutions that transform enterprises worldwide.",
  },
];

const WhyJoinTrinos = () => (
  <section id="why-join" className="py-24 bg-surface-soft">
    <div className="container-px max-w-[1400px] mx-auto">
      <SectionHeader
        eyebrow="Why join Trinos"
        title="Build a career with meaning"
        description="Join a team of passionate innovators transforming enterprises with AI. You'll work on meaningful projects, grow your tech skills, and make a lasting career impact."
      />

      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {benefits.map(({ icon: Icon, title, description }) => (
          <div
            key={title}
            className="group tile bg-card p-7 flex flex-col gap-5 hover:shadow-glow"
          >
            <div className="flex items-center justify-between">
              <div className="w-12 h-12 rounded-2xl bg-gradient-primary grid place-items-center shadow-soft">
                <Icon className="w-6 h-6 text-white" />
              </div>
              <ArrowUpRight className="w-5 h-5 text-muted-foreground transition-all group-hover:text-primary group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
            </div>
            <div>
              <h3 className="font-display font-bold text-xl text-foreground leading-snug">
                {title}
              </h3>
              <p className="mt-3 text-sm text-muted-foreground leading-relaxed">
                {description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default WhyJoinTrinos;
