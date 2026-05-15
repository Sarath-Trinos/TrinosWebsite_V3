import Image from "next/image";

const items = [
  {
    prefix: "Our",
    highlight: "mission",
    text: "To empower organizations with intelligent and secure digital solutions that accelerate transformation and unlock operational excellence.",
    image:
      "/about us /magnific__just-expand-the-background-with-plane-black__85858.jpeg",
    alt: "Our mission",
    imageClassName: "object-cover object-bottom-right",
  },
  {
    prefix: "Our",
    highlight: "vision",
    text: "To be a global leader in AI-driven enterprise transformation by delivering future-ready, scalable, and secure technology platforms.",
    image:
      "/about us /magnific_2982314553.jpeg",
    alt: "Our vision",
    imageClassName: "object-cover",
  },
];

const MissionVision = () => (
  <section className="w-full bg-surface-soft">
    <div className="grid grid-cols-1 md:grid-cols-2">
      {items.map(({ prefix, highlight, text, image, alt, imageClassName }) => (
        <article key={highlight} className="flex flex-col">
          <div className="relative aspect-[1456/816] w-full max-w-[1456px] mx-auto overflow-hidden">
            <Image
              src={image}
              alt={alt}
              fill
              sizes="(min-width: 768px) 50vw, 100vw"
              className={imageClassName}
              priority
            />
          </div>

          <div className="flex flex-col gap-5 p-8 md:p-12 lg:p-16">
            <h3 className="text-xl md:text-2xl font-display font-medium leading-snug text-balance text-black">
              <span>{prefix}</span>{" "}
              <span className="capitalize">{highlight}</span>
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
