import type { ReactNode } from "react";
import { ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";

interface Props {
  eyebrow?: string;
  title: ReactNode;
  /** Shown directly under the main headline — supporting line (sentence case OK) */
  subtitle?: ReactNode;
  /** Overrides default subtitle weight/color (e.g. `font-normal text-muted-foreground`) */
  subtitleClassName?: string;
  description?: string;
  exploreHref?: string;
  exploreLabel?: string;
  /** Use on `bg-surface-dark` (or similar) so headings and copy stay readable */
  tone?: "default" | "dark";
  /** When set, replaces the default heading typography entirely */
  titleClassName?: string;
  /** Main h2 weight — default bold for legacy pages; use `normal` for lighter section titles */
  headlineWeight?: "bold" | "semibold" | "medium" | "normal";
  /** Stacks and centers heading + description (use with `titleClassName` for bespoke headlines) */
  headingLayout?: "default" | "centered";
  /** Applied to the column wrapping eyebrow/title/description (e.g. `max-w-none` for fluid one-line headings) */
  contentClassName?: string;
}

const SectionHeader = ({
  eyebrow,
  title,
  subtitle,
  subtitleClassName,
  description,
  exploreHref,
  exploreLabel = "Explore all",
  tone = "default",
  titleClassName,
  headlineWeight = "bold",
  headingLayout = "default",
  contentClassName,
}: Props) => {
  const headlineWeightClass = {
    bold: "font-bold",
    semibold: "font-semibold",
    medium: "font-medium",
    normal: "font-normal",
  }[headlineWeight];

  return (
    <div
      className={cn(
        "flex gap-6 mb-12 flex-col",
        headingLayout === "centered" ? "items-center text-center" : "md:flex-row md:items-end md:justify-between",
      )}
    >
      <div
        className={cn(
          headingLayout === "centered" ? "w-full" : "max-w-2xl",
          contentClassName,
        )}
      >
        {eyebrow && <span className="chip mb-4">{eyebrow}</span>}
        <h2
          className={cn(
            titleClassName ??
              cn(
                "font-display text-4xl md:text-5xl text-balance",
                headlineWeightClass,
                tone === "default" && "text-foreground",
                tone === "dark" && "text-on-surface-dark",
              ),
          )}
        >
          {title}
        </h2>
        {subtitle ? (
          <p
            className={cn(
              "mt-3 max-w-2xl text-balance font-display text-lg md:text-xl leading-snug",
              subtitleClassName ??
                cn(
                  "font-semibold",
                  tone === "default" && "text-foreground",
                  tone === "dark" && "text-white/90",
                ),
            )}
          >
            {subtitle}
          </p>
        ) : null}
        {description && (
          <p
            className={cn(
              "mt-4 max-w-2xl text-lg text-balance",
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
};

export default SectionHeader;
