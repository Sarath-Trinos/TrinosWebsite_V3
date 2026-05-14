import { ArrowRight, MapPin } from "lucide-react";

type Position = {
  title: string;
  location: string;
  type: string;
  cardBg: string;
  accentText: string;
};

const positions: Position[] = [
  {
    title: "Senior AI Engineer",
    location: "Remote / Hybrid",
    type: "Full-time",
    cardBg: "bg-[#FFE3EC]",
    accentText: "text-[#BE185D]",
  },
  {
    title: "Product Manager",
    location: "Remote / Hybrid",
    type: "Full-time",
    cardBg: "bg-[#FFF4C7]",
    accentText: "text-[#92660A]",
  },
  {
    title: "UX/UI Designer",
    location: "Remote / Hybrid",
    type: "Full-time",
    cardBg: "bg-[#E0F2FF]",
    accentText: "text-[#0369A1]",
  },
];

const OpenPositions = () => (
  <section id="open-positions" className="py-24">
    <div className="container-px max-w-[1400px] mx-auto">
      <div className="grid lg:grid-cols-3 gap-12 lg:gap-16">
        <div className="lg:col-span-1">
          <h2 className="font-display font-normal text-4xl md:text-5xl text-balance leading-tight text-brand-gradient-reverse">
            Open positions
          </h2>
          <p className="mt-3 max-w-xl text-balance font-display font-semibold text-lg md:text-xl leading-snug text-foreground">
            Find your next role
          </p>
          <p className="mt-6 text-lg text-muted-foreground text-balance">
            Explore exciting opportunities to join our team and help shape the future of
            enterprise AI.
          </p>
          <a
            href="#demo"
            className="link-arrow mt-8 inline-flex"
          >
            Explore more vacancies <ArrowRight className="w-4 h-4" />
          </a>
        </div>

        <div className="lg:col-span-2 grid sm:grid-cols-2 gap-5">
          {positions.map(({ title, location, type, cardBg, accentText }) => (
            <div
              key={title}
              className={`tile ${cardBg} text-foreground p-7 flex flex-col justify-between min-h-[220px]`}
            >
              <div>
                <span className={`inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider ${accentText}`}>
                  <MapPin className="w-3.5 h-3.5" />
                  {location}
                </span>
                <h3 className="mt-4 font-display font-bold text-2xl leading-snug">
                  {title}
                </h3>
                <p className="mt-1 text-sm text-foreground/70">{type}</p>
              </div>
              <a
                href="#demo"
                className="mt-6 inline-flex items-center gap-2 self-start bg-foreground text-background font-semibold px-5 py-2.5 rounded-full shadow-soft hover:shadow-card transition-all"
              >
                More details <ArrowRight className="w-4 h-4" />
              </a>
            </div>
          ))}
        </div>
      </div>
    </div>
  </section>
);

export default OpenPositions;
