import SectionHeader from "./SectionHeader";

const values = [
  {
    number: "01",
    title: "Innovation",
    description: "We bring cutting-edge AI to real business challenges.",
  },
  {
    number: "02",
    title: "Integrity",
    description: "Security, transparency, and trust define every engagement.",
  },
  {
    number: "03",
    title: "Excellence",
    description: "We deliver engineering precision and world-class quality.",
  },
];

const OurValues = () => (
  <section className="py-24">
    <div className="container-px max-w-[1400px] mx-auto">
      <SectionHeader
        eyebrow="Our values"
        title="What we stand for"
        description="Trinos culture is built on trust, respect, and inclusivity — with Innovation, Integrity, and Excellence as the wellspring of our growth. Everyone is welcome at Trinos regardless of background, age, gender, or experience level."
      />

      <div className="grid md:grid-cols-3 gap-6">
        {values.map(({ number, title, description }) => (
          <div
            key={title}
            className="tile bg-card p-8 md:p-10 flex flex-col gap-6 hover:shadow-glow"
          >
            <div className="font-display font-bold text-5xl bg-gradient-to-br from-primary to-primary-deep bg-clip-text text-transparent">
              {number}
            </div>
            <div className="h-px w-12 bg-gradient-primary" />
            <div>
              <h3 className="font-display font-bold text-2xl text-foreground">{title}</h3>
              <p className="mt-3 text-muted-foreground leading-relaxed">{description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default OurValues;
