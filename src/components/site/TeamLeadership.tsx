import Image from "next/image";

type Founder = {
  name: string;
  role: string;
  image: string;
  bio: string[];
  reverse?: boolean;
};

const founders: Founder[] = [
  {
    name: "Rajeshkumar Ganesan",
    role: "Co-Founder & CEO",
    image: "/team/Rajesh.webp.png",
    bio: [
      "Rajeshkumar Ganesan is a Goal-Driven, Business Leader with over 18 years of experience driving business growth and operational excellence across the IT, ITES and Semiconductor industries. He provides strategic leadership, guiding the organization's direction to ensure sustainable growth and long-term value in the global AI market.",
      "A Startup & Scale-up Specialist, he has a proven track record of building organizations from the ground up and leading key functions including Sales, Business Development, and Strategic Partnerships across the USA, Europe, India, the Middle East and Southeast Asia. He focuses on client success, with strengths in market analysis, account planning and relationship building.",
      "With a strong people management foundation, he fosters people-centric cultures, strengthens leadership pipelines and enhances workforce productivity.",
    ],
  },
  {
    name: "Mukesh Vaidyanathan",
    role: "Co-Founder & Chief Strategy Officer",
    image: "/team/Mukesh.webp.png",
    bio: [
      "Mukesh Vaidyanathan is the Co-Founder and Chief Strategy Officer at Trinos, bringing over 25 years of hands-on experience in enterprise systems, ERP and IT Services. He is the strategic force behind Trinos's vision — connecting business goals with technology execution to drive growth and ensure the company delivers on its promises.",
      "Having spent his entire career at the intersection of ERP and enterprise IT, Mukesh has delivered transformative solutions for clients across Manufacturing, Healthcare, Automobile and Engineering industries in India, the USA, Europe, the Middle East and APAC. He leads strategic partnerships and alliances, building the relationships that open new markets and deepen client trust.",
      "Mukesh brings a rare combination of deep domain knowledge and commercial acumen — making him the bridge between what technology can do and what businesses actually need.",
    ],
    reverse: true,
  },
  {
    name: "Rajkumar Gangadharan",
    role: "Co-Founder & Chief Technology Officer",
    image: "/team/Raj.webp.png",
    bio: [
      "Rajkumar Gangadharan is the Co-Founder and Chief Technology Officer at Trinos, with over 17 years of experience in software development, system architecture and technology leadership. He is the technical mind behind Trinos — architecting the AI-powered platforms that define what the company builds and how it delivers.",
      "An Expert Architect in the AI space, he designs and delivers intelligent, scalable systems across artificial intelligence, multi-agent orchestration and workflow automation. He is known for setting high engineering standards, building resilient platforms and leading teams that consistently deliver under complexity.",
      "With cross-sector experience serving Healthcare, Finance, Legal and Manufacturing clients across the USA and Canada, Rajkumar brings both the technical depth and the practical mindset to turn ambitious ideas into production-ready, future-proof solutions.",
    ],
  },
];

const TeamLeadership = () => (
  <section id="leadership" className="py-24">
    <div className="container-px max-w-[1400px] mx-auto space-y-24 lg:space-y-28">
      {founders.map((founder) => (
        <div
          key={founder.name}
          className={`grid lg:grid-cols-5 gap-10 lg:gap-16 items-start ${
            founder.reverse ? "lg:[&>*:first-child]:order-2" : ""
          }`}
        >
          <div className="lg:col-span-2">
            <div className="relative max-w-md mx-auto lg:mx-0">
              <Image
                src={founder.image}
                alt={`${founder.name} portrait`}
                width={800}
                height={800}
                className="w-full h-auto"
              />
            </div>
          </div>

          <div className="lg:col-span-3">
            <h2 className="font-display font-normal text-4xl md:text-5xl text-balance leading-tight text-brand-gradient-reverse">
              {founder.name}
            </h2>
            <p className="mt-3 text-lg font-semibold text-foreground">{founder.role}</p>
            <div className="mt-6 space-y-4">
              {founder.bio.map((paragraph, i) => (
                <p key={i} className="text-base md:text-lg text-muted-foreground leading-relaxed">
                  {paragraph}
                </p>
              ))}
            </div>
          </div>
        </div>
      ))}
    </div>
  </section>
);

export default TeamLeadership;
