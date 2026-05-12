import Image from "next/image";

const services: {
  title: string;
  description: string;
  imageSrc: string;
}[] = [
  {
    title: "VULNERABILITY ASSESSMENT",
    description:
      "Comprehensive security audits to identify and address potential vulnerabilities before they become threats.",
    imageSrc: "/home/VULNERABILITY%20ASSESSMENT.jpeg",
  },
  {
    title: "THREAT DETECTION",
    description:
      "Real-time monitoring and advanced threat detection systems to protect your digital infrastructure 24/7.",
    imageSrc: "/home/THREAT%20DETECTION.jpeg",
  },
  {
    title: "SECURE INFRASTRUCTURE",
    description:
      "Architect secure, scalable systems from the ground up with security-first design principles.",
    imageSrc: "/home/SECURE%20INFRASTRUCTURE.jpeg",
  },
  {
    title: "COMPLIANCE FRAMEWORKS",
    description:
      "Ensure your systems meet industry standards and regulatory requirements with comprehensive compliance frameworks.",
    imageSrc: "/home/complaince.jpeg",
  },
];

const CustomerStories = () => (
  <section className="py-24 relative overflow-hidden bg-white">
    <div className="container-px max-w-[1400px] mx-auto relative">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
        <div className="max-w-2xl">
          <h2 className="font-display font-normal text-4xl md:text-5xl text-balance text-foreground mb-5">
            Cyber <span className="text-brand-gradient-reverse">Security</span>
          </h2>
          <p className="font-display font-normal text-lg md:text-xl text-balance mb-5 text-black">
            Security is foundational to everything we build.
          </p>
          <p className="text-base md:text-lg text-muted-foreground text-balance">
            A multi-layered defense strategy — from offensive testing and continuous monitoring to compliance-grade frameworks.
          </p>
        </div>
      </div>

      {/* Cards — speech-bubble style, staggered */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-5 items-start">
        {services.map((s, i) => {
          const isOffset = i % 2 === 1;
          return (
            <div
              key={s.title}
              className={`relative ${isOffset ? "lg:mt-20" : ""}`}
            >
              {/* Card */}
              <div
                className="relative bg-surface-dark rounded-[28px] p-7 pb-8 animate-float-slow"
                style={{ animationDelay: `${i * 0.6}s` }}
              >
                {/* Numbered marker */}
                <div className="flex items-center gap-2.5 mb-3">
                  <span className="inline-block w-2 h-2 bg-white/80" />
                  <span className="font-mono text-sm tracking-wider text-white/70">
                    {String(i + 1).padStart(3, "0")}
                  </span>
                </div>

                {/* Title — mono / pixel feel */}
                <h3 className="font-mono font-bold text-[1.05rem] md:text-[1.15rem] leading-tight tracking-wide text-white mb-4">
                  {s.title}
                </h3>

                {/* Description */}
                <p className="text-sm leading-relaxed text-white/70 mb-6">
                  {s.description}
                </p>

                {/* Illustrative image */}
                <div className="relative aspect-[4/3] rounded-2xl bg-white/5 border border-white/10 overflow-hidden">
                  <Image
                    src={s.imageSrc}
                    alt={s.title}
                    fill
                    className="object-cover"
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                  />
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  </section>
);

export default CustomerStories;
