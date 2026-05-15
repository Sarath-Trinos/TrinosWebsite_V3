import {
  HeartPulse,
  Banknote,
  ShoppingBag,
  Factory,
  Scale,
  Building2,
  Clapperboard,
  Truck,
  GraduationCap,
  Zap,
  HardHat,
  Hotel,
  ArrowUpRight,
} from "lucide-react";
import SectionHeader from "./SectionHeader";

type Industry = {
  icon: typeof HeartPulse;
  title: string;
  description: string;
};

const industries: Industry[] = [
  {
    icon: HeartPulse,
    title: "Healthcare & Life Sciences",
    description:
      "We help healthcare organizations reduce administrative burden while improving patient outcomes.",
  },
  {
    icon: Banknote,
    title: "Financial Services & Insurance",
    description:
      "Banks, Insurers, and Fintechs need to move fast without compromising trust.",
  },
  {
    icon: ShoppingBag,
    title: "Retail & E-Commerce",
    description:
      "Retail today means competing on speed, personalization, and seamless operations.",
  },
  {
    icon: Factory,
    title: "Manufacturing & Industrial AI",
    description: "We connect the shop floor to the top floor.",
  },
  {
    icon: Scale,
    title: "Legal & Professional Services",
    description: "Your experts should focus on strategy, not paperwork.",
  },
  {
    icon: Building2,
    title: "Real Estate & Property Management",
    description:
      "Managing properties means juggling tenants, maintenance, finances, and investors.",
  },
  {
    icon: Clapperboard,
    title: "Media & Entertainment",
    description:
      "Content creation is complex, and so is the business behind it.",
  },
  {
    icon: Truck,
    title: "Logistics & Supply Chain",
    description: "Every mile and every minute counts.",
  },
  {
    icon: GraduationCap,
    title: "Education & EdTech",
    description: "Learning should be personal, even at scale.",
  },
  {
    icon: Zap,
    title: "Energy & Utilities",
    description:
      "Asset-intensive operations demand reliability and efficiency.",
  },
  {
    icon: HardHat,
    title: "Construction & Engineering",
    description: "From bid to closeout, visibility is everything.",
  },
  {
    icon: Hotel,
    title: "Hospitality & Tourism",
    description: "Great guest experiences start behind the scenes.",
  },
];

const IndustriesGrid = () => (
  <section id="industries" className="py-24 bg-surface-soft">
    <div className="container-px max-w-[1400px] mx-auto">
      <SectionHeader
        titleClassName="font-display font-normal text-4xl md:text-5xl text-balance leading-tight"
        title={
          <>
            <span className="text-black">Industries</span>{" "}
            <span className="text-brand-gradient-reverse">we serve</span>
          </>
        }
        subtitle="Tailored AI & ERP for every sector"
        description="From regulated industries to fast-moving consumer markets, our solutions adapt to the realities of your operations."
      />

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-6">
        {industries.map(({ icon: Icon, title, description }) => (
          <a
            key={title}
            href="#"
            className="group tile bg-card p-7 flex flex-col gap-5 hover:shadow-glow"
          >
            <div className="flex items-center justify-between">
              <div className="w-12 h-12 rounded-2xl bg-gradient-primary grid place-items-center shadow-soft">
                <Icon className="w-6 h-6 text-white" />
              </div>
              <ArrowUpRight className="w-5 h-5 text-muted-foreground transition-all group-hover:text-primary group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
            </div>
            <div>
              <h3 className="font-display font-bold text-xl text-foreground leading-snug text-balance">
                {title}
              </h3>
              <p className="mt-3 text-sm text-muted-foreground leading-relaxed text-balance">
                {description}
              </p>
            </div>
          </a>
        ))}
      </div>
    </div>
  </section>
);

export default IndustriesGrid;
