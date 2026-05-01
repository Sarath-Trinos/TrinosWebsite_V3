import { ArrowRight } from "lucide-react";

interface Props {
  eyebrow?: string;
  title: string;
  description?: string;
  exploreHref?: string;
  exploreLabel?: string;
}

const SectionHeader = ({ eyebrow, title, description, exploreHref, exploreLabel = "Explore all" }: Props) => (
  <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
    <div className="max-w-2xl">
      {eyebrow && <span className="chip mb-4">{eyebrow}</span>}
      <h2 className="font-display font-bold text-4xl md:text-5xl text-balance">{title}</h2>
      {description && <p className="mt-4 text-lg text-muted-foreground text-balance">{description}</p>}
    </div>
    {exploreHref && (
      <a href={exploreHref} className="link-arrow shrink-0">
        {exploreLabel} <ArrowRight className="w-4 h-4" />
      </a>
    )}
  </div>
);

export default SectionHeader;
