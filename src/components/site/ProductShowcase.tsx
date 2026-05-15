"use client";

import Image from "next/image";
import { ArrowRight, Check } from "lucide-react";
import { useEffect, useState } from "react";

type Product = {
  name: string;
  eyebrow: string;
  description: string;
  highlights: string[];
  images: string[];
  imageAlt: string;
  reverse?: boolean;
};

const products: Product[] = [
  {
    name: "Moltter",
    eyebrow: "Parenting · AI-powered companion",
    description:
      "An AI-powered companion for modern parents that turns everyday parenting questions into clear, personalized guidance. Moltter helps families navigate milestones, routines, and decisions with empathetic, expert-backed answers tailored to each child.",
    highlights: [
      "Personalized guidance tailored to your child's age and stage",
      "Expert-backed answers across health, sleep, feeding, and behavior",
      "Milestone tracking with proactive, timely insights",
      "Private, family-first experience designed for trust",
      "Conversational interface that feels like a knowledgeable friend",
      "Always-on support for the questions that come up at 2am",
    ],
    images: [
      "/products/Moltter.png",
      "/products/Moltter_2.png",
      "/products/Moltter_3.png",
      "/products/Moltter_4.png",
    ],
    imageAlt: "Moltter product screenshot",
  },
  {
    name: "BillDefend AI",
    eyebrow: "Healthcare · Multi-agent AI",
    description:
      "An intelligent medical billing analysis platform that uses multi-agent AI to detect, analyze, and dispute erroneous medical charges. Our AI agents work together to identify overcharges, ensure compliance, and help users save thousands on medical bills.",
    highlights: [
      "90% detection rate for billing errors and overcharges",
      "7 specialized AI agents working in coordination",
      "Average savings of $2,400 per user",
      "Automated dispute generation with evidence",
      "Real-time analysis in under 3 minutes",
      "Comprehensive dashboard with activity tracking",
    ],
    images: [
      "/products/screenshot-1.jpg",
      "/products/screenshot-2.jpg",
      "/products/screenshot-3.jpg",
      "/products/screenshot-4.jpg",
      "/products/screenshot-5.jpg",
      "/products/screenshot-6.jpg",
      "/products/screenshot-7.jpg",
      "/products/screenshot-8.jpg",
    ],
    imageAlt: "BillDefend AI product screenshot",
    reverse: true,
  },
  {
    name: "TraceFlow",
    eyebrow: "Manufacturing · Inventory & traceability",
    description:
      "A comprehensive material tracking and inventory management system designed for manufacturing industries. TraceFlow provides complete visibility from supplier to customer with automated FIFO compliance, real-time inventory tracking, and seamless production workflow management.",
    highlights: [
      "End-to-end material traceability with LOT tracking",
      "Automated FIFO compliance for inventory management",
      "Real-time stock level monitoring and alerts",
      "Quality control integration with inspection workflows",
      "Production order management and dispatch coordination",
      "Comprehensive reporting and analytics dashboard",
    ],
    images: [
      "/products/traceflow-6.jpg",
      "/products/traceflow-7.jpg",
      "/products/traceflow-8.jpg",
    ],
    imageAlt: "TraceFlow product screenshot",
  },
  {
    name: "MeetingBrain",
    eyebrow: "Productivity · Real-time meeting intelligence",
    description:
      "Your AI-powered meeting assistant that captures every insight, so you can focus on what matters most. MeetingBrain provides real-time transcription, intelligent summaries, and actionable insights to transform your meetings into productive outcomes.",
    highlights: [
      "Real-time transcription with 95% accuracy",
      "AI-powered summaries and action items",
      "Automatic speaker identification",
      "Invisible mode for private note-taking",
      "Smart insights and key takeaways extraction",
      "Seamless integration with meeting platforms",
    ],
    images: [
      "/products/meeting-1.jpg",
      "/products/meeting-2.jpg",
      "/products/meeting-3.jpg",
      "/products/meeting-4.jpg",
      "/products/meeting-5.jpg",
    ],
    imageAlt: "MeetingBrain product screenshot",
    reverse: true,
  },
];

const ProductImageSlideshow = ({
  images,
  alt,
  intervalMs = 3500,
}: {
  images: string[];
  alt: string;
  intervalMs?: number;
}) => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    if (images.length <= 1) return;
    const id = setInterval(() => {
      setIndex((i) => (i + 1) % images.length);
    }, intervalMs);
    return () => clearInterval(id);
  }, [images.length, intervalMs]);

  return (
    <div className="relative">
      <div className="absolute -inset-6 bg-gradient-tile rounded-[36px] blur-2xl opacity-70" />
      <div className="relative tile bg-card pt-0 px-0 pb-3 md:pb-4">
        <div className="relative w-full aspect-[16/11] overflow-hidden rounded-[22px] bg-surface-soft">
          {images.map((src, i) => (
            <Image
              key={src}
              src={src}
              alt={alt}
              fill
              sizes="(min-width: 1024px) 50vw, 100vw"
              className={`object-contain transition-opacity duration-700 ease-in-out ${
                i === index ? "opacity-100" : "opacity-0"
              }`}
              priority={i === 0}
            />
          ))}
        </div>
        {images.length > 1 && (
          <div className="mt-4 flex justify-center gap-2">
            {images.map((src, i) => (
              <button
                key={src}
                type="button"
                aria-label={`Show image ${i + 1}`}
                onClick={() => setIndex(i)}
                className={`h-1.5 rounded-full transition-all ${
                  i === index ? "w-6 bg-primary" : "w-2 bg-foreground/20 hover:bg-foreground/40"
                }`}
              />
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

const ProductShowcase = () => (
  <section id="products" className="py-24 bg-surface-soft">
    <div className="container-px max-w-[1400px] mx-auto space-y-24 lg:space-y-32">
      {products.map((product) => (
        <div
          key={product.name}
          className={`grid lg:grid-cols-2 gap-8 md:gap-10 lg:gap-16 items-center ${
            product.reverse ? "lg:[&>*:first-child]:order-2" : ""
          }`}
        >
          <div>
            <span className="chip mb-5">{product.eyebrow}</span>
            <h2 className="font-display font-normal text-3xl sm:text-4xl md:text-5xl text-balance leading-tight">
              {product.name}
            </h2>
            <p className="mt-5 text-lg text-muted-foreground text-balance">
              {product.description}
            </p>

            <ul className="mt-8 space-y-3">
              {product.highlights.map((highlight) => (
                <li key={highlight} className="flex items-start gap-3">
                  <span className="mt-1 w-5 h-5 shrink-0 rounded-full bg-gradient-primary grid place-items-center shadow-soft">
                    <Check className="w-3 h-3 text-white" strokeWidth={3} />
                  </span>
                  <span className="text-foreground/90 leading-relaxed">{highlight}</span>
                </li>
              ))}
            </ul>

            <a
              href="#demo"
              className="group mt-9 inline-flex items-center gap-2 bg-gradient-cta text-primary-foreground font-semibold px-6 py-3 rounded-full shadow-soft hover:shadow-glow transition-all"
            >
              Learn more
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </a>
          </div>

          <ProductImageSlideshow images={product.images} alt={product.imageAlt} />
        </div>
      ))}
    </div>
  </section>
);

export default ProductShowcase;
