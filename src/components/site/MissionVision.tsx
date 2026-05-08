import Image from "next/image";

const items = [
  {
    title: "Our mission",
    text: "To empower organizations with intelligent and secure digital solutions that accelerate transformation and unlock operational excellence.",
    image: "/about us /CareersPage_Hero.jpg",
    alt: "Our mission",
  },
  {
    title: "Our vision",
    text: "To be a global leader in AI-driven enterprise transformation by delivering future-ready, scalable, and secure technology platforms.",
    image:
      "/about us /business-ecosystems-partnerships-concept-business-collaboration-strategies-value-network-solution-creating-new-opportunities-task-relations-collaboration-team-building.jpg",
    alt: "Our vision",
  },
];

const MissionVision = () => (
  <section className="w-full bg-surface-soft">
    <div className="grid grid-cols-1 md:grid-cols-2">
      {items.map(({ title, text, image, alt }) => (
        <article key={title} className="flex flex-col">
          <div className="relative aspect-[16/10] md:aspect-[16/9] overflow-hidden">
            <Image
              src={image}
              alt={alt}
              fill
              sizes="(min-width: 768px) 50vw, 100vw"
              className="object-cover"
              priority
            />
          </div>

          <div className="flex flex-col gap-5 p-8 md:p-12 lg:p-16">
            <h3 className="text-4xl md:text-5xl lg:text-6xl font-display font-semibold leading-tight text-foreground text-balance">
              {title}
            </h3>
            <p className="text-base md:text-lg leading-relaxed text-muted-foreground max-w-xl">
              {text}
            </p>
          </div>
        </article>
      ))}
    </div>
  </section>
);

export default MissionVision;
