import { cn } from "@/lib/utils";

type DotTone = "purple" | "blue" | "orange" | "red";

const dotClass: Record<DotTone, string> = {
  purple: "bg-violet-500",
  blue: "bg-sky-500",
  orange: "bg-orange-500",
  red: "bg-red-500",
};

type BentoCard = {
  label: string;
  dot: DotTone;
  title: string;
  body: string;
  /** Tailwind col spans: mobile full width, md+ bento layout */
  className: string;
};

const cards: BentoCard[] = [
  {
    label: "EKS / RAG",
    dot: "purple",
    title: "RAG-based Enterprise Knowledge Systems",
    body: "Trustworthy answers grounded in your private data, with citations on every response.",
    className: "col-span-12 md:col-span-6",
  },
  {
    label: "AGENTS",
    dot: "blue",
    title: "AI Agents & Workflow Automation",
    body: "Autonomous agents that plan, act, and hand off — across CRMs, warehouses, and SaaS tools.",
    className: "col-span-12 md:col-span-6",
  },
  {
    label: "FORECASTING",
    dot: "orange",
    title: "Predictive Analytics",
    body: "Forward-looking decisions from historical signals.",
    className: "col-span-12 md:col-span-3",
  },
  {
    label: "LLMS",
    dot: "red",
    title: "Custom LLM Development",
    body: "Domain-tuned models you own. Datasets, training, and evals managed end-to-end.",
    className: "col-span-12 md:col-span-6",
  },
  {
    label: "RPA",
    dot: "orange",
    title: "Robotic Process Automation",
    body: "Resilient, observable bots that retire repetitive work.",
    className: "col-span-12 md:col-span-3",
  },
  {
    label: "VISION",
    dot: "blue",
    title: "Computer Vision",
    body: "Real-time image and video understanding — detection, OCR, quality control. Cloud or edge.",
    className: "col-span-12 md:col-span-6",
  },
  {
    label: "NLP",
    dot: "purple",
    title: "Natural Language Processing",
    body: "Intent, entities, summarization — at scale.",
    className: "col-span-12 md:col-span-6",
  },
];

function BentoCardInner({
  label,
  dot,
  title,
  body,
}: Omit<BentoCard, "className">) {
  return (
    <div className="relative z-[1] flex h-full flex-col">
      <div className="mb-5 flex items-center gap-2.5">
        <span
          className={cn("h-2 w-2 shrink-0 rounded-full", dotClass[dot])}
          aria-hidden
        />
        <span className="text-[11px] font-semibold uppercase tracking-[0.16em] text-primary-glow">
          {label}
        </span>
      </div>
      <h3 className="font-display text-xl font-bold leading-snug text-on-surface-dark md:text-2xl">
        {title}
      </h3>
      <p className="mt-3 text-sm leading-relaxed text-white/70 md:text-[15px]">{body}</p>
    </div>
  );
}

const ServicesCapabilities = () => (
  <section id="capabilities" className="bg-[#F9F9F7] py-24">
    <div className="container-px mx-auto max-w-[1400px]">
      <div className="mb-14 max-w-3xl md:mb-16">
        <span className="chip mb-5">Capabilities</span>
        <h2 className="font-display text-balance text-4xl font-bold leading-tight md:text-5xl">
          Our capabilities{" "}
          <span className="bg-gradient-to-r from-primary to-primary-deep bg-clip-text text-transparent">
            include
          </span>
          .
        </h2>
        <p className="mt-5 text-lg text-muted-foreground text-balance">
          A full-stack AI practice — from foundational models to production-grade automation —
          designed to fit how your enterprise actually operates.
        </p>
      </div>

      <div className="grid grid-cols-12 gap-4 md:gap-5">
        {cards.map((card) => (
          <div
            key={card.label}
            className={cn(
              "group relative overflow-hidden rounded-[28px] border border-white/10 p-8 shadow-card md:p-10",
              "min-h-[200px] md:min-h-[220px]",
              card.className,
            )}
          >
            <div
              className="absolute inset-0 bg-surface-dark"
              aria-hidden
            />
            <div
              className="pointer-events-none absolute inset-0 opacity-100"
              style={{
                background:
                  "radial-gradient(ellipse 90% 75% at 100% 0%, rgba(255,255,255,0.09) 0%, transparent 58%)",
              }}
              aria-hidden
            />
            <div
              className="pointer-events-none absolute -right-16 -top-16 h-48 w-48 rounded-full bg-white/[0.04] blur-3xl transition-opacity duration-500 group-hover:opacity-80"
              aria-hidden
            />
            <BentoCardInner
              label={card.label}
              dot={card.dot}
              title={card.title}
              body={card.body}
            />
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default ServicesCapabilities;
