"use client";

import { CloudUpload, Gauge, Layers, Server } from "lucide-react";
import Image from "next/image";
import { useState } from "react";
import SectionHeader from "./SectionHeader";
import { cn } from "@/lib/utils";

const cards = [
  {
    icon: CloudUpload,
    title: "Cloud Migration",
    image: "/home/Gemini_Generated_Image_6q24666q24666q24.png",
    description:
      "Seamlessly transition your infrastructure to the cloud with minimal downtime and maximum efficiency.",
  },
  {
    icon: Layers,
    title: "Cloud Architecture Design",
    image: "/home/Gemini_Generated_Image_rcwzyhrcwzyhrcwz.png",
    description:
      "Design scalable, secure, and cost-effective cloud architectures tailored to your business needs.",
  },
  {
    icon: Gauge,
    title: "Resource Optimization",
    image: "/home/Gemini_Generated_Image_udhuumudhuumudhu.png",
    description:
      "Optimize cloud resources to reduce costs while improving performance and scalability.",
  },
  {
    icon: Server,
    title: "Managed Cloud Services",
    image: "/home/Gemini_Generated_Image_xisb22xisb22xisb.png",
    description:
      "24/7 monitoring, maintenance, and support to ensure your cloud infrastructure runs smoothly.",
  },
];

const HealthcareAI = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <section className="py-24 bg-surface-tint">
      <div className="container-px max-w-[1400px] mx-auto">
        <SectionHeader
          title="Cloud Solutions"
          description="We enable enterprises to modernize, migrate, and optimize on the cloud with confidence."
          exploreHref="#"
        />

        <div className="grid lg:grid-cols-5 gap-6">
          <div className="lg:col-span-2 tile bg-card overflow-hidden relative aspect-[4/5]">
            {cards.map((card, i) => (
              <Image
                key={card.title}
                src={card.image}
                alt={card.title}
                fill
                sizes="(min-width: 1024px) 40vw, 100vw"
                className={cn(
                  "object-cover transition-opacity duration-500 ease-out",
                  i === activeIndex ? "opacity-100" : "opacity-0"
                )}
                priority={i === 0}
              />
            ))}
            <div className="absolute inset-x-0 bottom-0 p-7 bg-gradient-to-t from-foreground/90 via-foreground/50 to-transparent text-on-surface-dark">
              <h3 className="font-display font-bold text-2xl mb-2">
                {cards[activeIndex].title}
              </h3>
              <p className="text-sm md:text-base text-white/85 leading-relaxed">
                {cards[activeIndex].description}
              </p>
            </div>
          </div>

          <div className="lg:col-span-3 grid gap-6">
            {cards.map((it, i) => {
              const isActive = i === activeIndex;
              return (
                <button
                  key={it.title}
                  type="button"
                  onClick={() => setActiveIndex(i)}
                  aria-pressed={isActive}
                  className={cn(
                    "tile bg-card border p-6 md:p-7 flex items-center gap-5 text-left w-full transition-all duration-300 ease-out",
                    isActive
                      ? "border-primary shadow-glow scale-[1.01]"
                      : "border-border hover:border-primary/40 hover:shadow-soft"
                  )}
                >
                  <div
                    className={cn(
                      "w-12 h-12 shrink-0 rounded-2xl grid place-items-center transition-colors duration-300",
                      isActive
                        ? "bg-gradient-primary text-white"
                        : "bg-gradient-tile text-primary"
                    )}
                  >
                    <it.icon className="w-6 h-6" />
                  </div>
                  <h3 className="font-display font-bold text-xl flex-1">{it.title}</h3>
                </button>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HealthcareAI;
