import { Lightbulb, Users, BookOpen } from "lucide-react";

const pillars = [
  {
    icon: Lightbulb,
    title: "Innovation first",
    description:
      "We empower team members to think creatively and challenge the status quo.",
  },
  {
    icon: Users,
    title: "Collaboration",
    description:
      "We win together — sharing knowledge, supporting each other, and building as one team.",
  },
  {
    icon: BookOpen,
    title: "Continuous learning",
    description:
      "Curiosity is core. We invest in growth so everyone keeps levelling up.",
  },
];

const OurCulture = () => (
  <section id="culture" className="py-24 bg-surface-soft">
    <div className="container-px max-w-[1400px] mx-auto">
      <div className="grid lg:grid-cols-2 gap-14 items-start">
        <div className="lg:sticky lg:top-28">
          <span className="chip mb-5">Our culture</span>
          <h2 className="font-display font-bold text-4xl md:text-5xl text-balance leading-tight">
            A culture built on{" "}
            <span className="bg-gradient-to-r from-primary to-primary-deep bg-clip-text text-transparent">
              ownership
            </span>
            .
          </h2>
          <p className="mt-6 text-lg text-muted-foreground text-balance">
            At Trinos, we foster a culture of innovation, collaboration, and continuous
            learning. We believe in empowering our team members to take ownership, think
            creatively, and make a meaningful impact.
          </p>
          <p className="mt-4 text-lg text-muted-foreground text-balance">
            Join us in building the future of enterprise technology.
          </p>
        </div>

        <div className="grid sm:grid-cols-1 gap-5">
          {pillars.map(({ icon: Icon, title, description }) => (
            <div
              key={title}
              className="tile bg-card p-7 flex items-start gap-5 hover:shadow-glow"
            >
              <div className="w-12 h-12 shrink-0 rounded-2xl bg-gradient-primary grid place-items-center shadow-soft">
                <Icon className="w-6 h-6 text-white" />
              </div>
              <div>
                <h3 className="font-display font-bold text-xl text-foreground leading-snug">
                  {title}
                </h3>
                <p className="mt-2 text-sm text-muted-foreground leading-relaxed">
                  {description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  </section>
);

export default OurCulture;
