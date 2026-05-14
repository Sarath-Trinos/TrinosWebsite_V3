import { ArrowRight } from "lucide-react";

type Variant = "purple" | "green" | "orange" | "pink" | "blue";

const variants: Record<
  Variant,
  { bg: string; accent: string; title: string; subtitle: string; button: string }
> = {
  purple: {
    bg: "bg-[#EFE6FF]",
    accent: "#6D28D9",
    title: "text-[#3B1E7E]",
    subtitle: "text-[#3B1E7E]/80",
    button: "bg-[#6D28D9] text-white hover:bg-[#5B1FB8]",
  },
  green: {
    bg: "bg-[#D6F4E4]",
    accent: "#0F7A41",
    title: "text-[#0B5C31]",
    subtitle: "text-[#0B5C31]/80",
    button: "bg-[#0F7A41] text-white hover:bg-[#0B5C31]",
  },
  orange: {
    bg: "bg-[#FFE9CC]",
    accent: "#9A4B00",
    title: "text-[#6B3300]",
    subtitle: "text-[#6B3300]/80",
    button: "bg-[#9A4B00] text-white hover:bg-[#6B3300]",
  },
  pink: {
    bg: "bg-[#FFE3EC]",
    accent: "#BE185D",
    title: "text-[#831843]",
    subtitle: "text-[#831843]/80",
    button: "bg-[#BE185D] text-white hover:bg-[#9D1457]",
  },
  blue: {
    bg: "bg-[#DCEBFF]",
    accent: "#1D4ED8",
    title: "text-[#1E3A8A]",
    subtitle: "text-[#1E3A8A]/80",
    button: "bg-[#1D4ED8] text-white hover:bg-[#1E3A8A]",
  },
};

const CTASection = ({ variant = "purple" }: { variant?: Variant }) => {
  const v = variants[variant];
  return (
    <section id="demo" className="py-24">
      <div className="container-px max-w-[1400px] mx-auto">
        <div className={`tile ${v.bg} p-12 md:p-20 text-center relative overflow-hidden`}>
          <div className="absolute -top-32 -left-32 w-[400px] h-[400px] rounded-full bg-white/40 blur-3xl" />
          <div className="absolute -bottom-32 -right-32 w-[400px] h-[400px] rounded-full bg-white/40 blur-3xl" />
          <div className="relative">
            <h2 className={`font-display font-normal text-4xl md:text-5xl text-balance ${v.title}`}>
              Ready to build intelligent, secure, and scalable solutions?
            </h2>
            <p className={`mt-5 text-lg md:text-xl max-w-2xl mx-auto text-balance ${v.subtitle}`}>
              Let's transform your business together.
            </p>
            <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
              <a
                href="#"
                className={`inline-flex items-center gap-2 font-semibold px-7 py-3.5 rounded-full shadow-card transition-all ${v.button}`}
              >
                Get In Touch <ArrowRight className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
