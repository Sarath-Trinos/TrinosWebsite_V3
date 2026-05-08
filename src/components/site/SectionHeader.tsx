import { ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";

interface Props {
  eyebrow?: string;
  title: string;
  description?: string;
  exploreHref?: string;
  exploreLabel?: string;
  /** Use on `bg-surface-dark` (or similar) so headings and copy stay readable */
  tone?: "default" | "dark";
}

const SectionHeader = ({
  eyebrow,
  title,
  description,
  exploreHref,
  exploreLabel = "Explore all",
  tone = "default",
}: Props) => (
  <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
    <div className="max-w-2xl">
      {eyebrow && <span className="chip mb-4">{eyebrow}</span>}
      <h2
        className={cn(
          "font-display font-bold text-4xl md:text-5xl text-balance",
          tone === "dark" && "text-on-surface-dark",
        )}
      >
        {title}
      </h2>
      {description && (
        <p
          className={cn(
            "mt-4 text-lg text-balance",
            tone === "dark" ? "text-white/70" : "text-muted-foreground",
          )}
        >
          {description}
        </p>
      )}
    </div>
    {exploreHref && (
      <a href={exploreHref} className="link-arrow shrink-0">
        {exploreLabel} <ArrowRight className="w-4 h-4" />
      </a>
    )}
  </div>
);

export default SectionHeader;
