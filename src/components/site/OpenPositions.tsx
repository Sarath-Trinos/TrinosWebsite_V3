import { ArrowRight, MapPin } from "lucide-react";

type Position = {
  title: string;
  location: string;
  type: string;
};

const positions: Position[] = [
  { title: "Senior AI Engineer", location: "Remote / Hybrid", type: "Full-time" },
  { title: "Product Manager", location: "Remote / Hybrid", type: "Full-time" },
  { title: "UX/UI Designer", location: "Remote / Hybrid", type: "Full-time" },
];

const OpenPositions = () => (
  <section id="open-positions" className="py-24">
    <div className="container-px max-w-[1400px] mx-auto">
      <div className="grid lg:grid-cols-3 gap-12 lg:gap-16">
        <div className="lg:col-span-1">
          <span className="chip mb-5">Open positions</span>
          <h2 className="font-display font-bold text-4xl md:text-5xl text-balance leading-tight">
            Find your{" "}
            <span className="bg-gradient-to-r from-primary to-primary-deep bg-clip-text text-transparent">
              next role
            </span>
            .
          </h2>
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
          {positions.map(({ title, location, type }) => (
            <div
              key={title}
              className="tile bg-gradient-cta text-primary-foreground p-7 flex flex-col justify-between min-h-[220px]"
            >
              <div>
                <span className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-white/80">
                  <MapPin className="w-3.5 h-3.5" />
                  {location}
                </span>
                <h3 className="mt-4 font-display font-bold text-2xl leading-snug">
                  {title}
                </h3>
                <p className="mt-1 text-sm text-white/80">{type}</p>
              </div>
              <a
                href="#demo"
                className="mt-6 inline-flex items-center gap-2 self-start bg-white text-primary font-semibold px-5 py-2.5 rounded-full shadow-soft hover:shadow-card transition-all"
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
