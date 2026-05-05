import Image from "next/image";
import Link from "next/link";

type LogoProps = {
  className?: string;
  /** Taller image + wordmark tuning for the fixed header */
  variant?: "default" | "header";
};

const Logo = ({ className = "", variant = "default" }: LogoProps) => {
  const isHeader = variant === "header";

  return (
    <Link
      href="/"
      className={`flex items-center ${isHeader ? "gap-1.5 md:gap-2" : "gap-1.5"} ${className}`}
      aria-label="Trinos home"
    >
      <Image
        src="/Logo.png"
        alt=""
        width={isHeader ? 200 : 150}
        height={isHeader ? 50 : 40}
        className={`w-auto object-contain ${isHeader ? "h-10 md:h-12" : "h-9"}`}
        priority={isHeader}
        sizes={isHeader ? "(min-width: 768px) 12rem, 10rem" : "9rem"}
      />
      <span
        className={`logo-wordmark font-display font-semibold tracking-tight text-inherit lowercase leading-none ${
          isHeader ? "text-[2rem] md:text-[2.25rem]" : "text-[1.5rem]"
        }`}
      >
        trinos
      </span>
    </Link>
  );
};

export default Logo;
