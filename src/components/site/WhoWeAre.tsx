import Image from "next/image";
import aboutImg from "@/assets/about-img.jpg";

const WhoWeAre = () => (
  <section id="who-we-are" className="pt-24 pb-0 bg-white">
    <div className="container-px max-w-[1400px] mx-auto">
      <div className="grid lg:grid-cols-2 gap-14 items-start">
        <div className="relative">
          <div className="relative overflow-hidden rounded-3xl">
            <Image
              src={aboutImg}
              alt="Trinos Technologies team collaborating"
              placeholder="blur"
              className="w-full h-auto object-cover"
              sizes="(min-width: 1024px) 600px, 100vw"
            />
          </div>
        </div>

        <div className="lg:pt-16">
          <span className="chip mb-5">Who we are</span>
          <h2 className="font-display font-bold text-4xl md:text-5xl text-balance leading-tight">
            A next-generation{" "}
            <span className="bg-gradient-to-r from-primary to-primary-deep bg-clip-text text-transparent">
              technology partner
            </span>
            .
          </h2>
          <p className="mt-6 text-lg text-muted-foreground text-balance">
            Trinos Technologies is committed to supporting enterprises in achieving secure,
            efficient, and accelerated digital transformation. We create intelligent technology
            ecosystems that enhance operational efficiency, drive digital excellence, and deliver
            long-term business value.
          </p>
          <p className="mt-4 text-lg text-muted-foreground text-balance">
            Our journey — from humble beginnings to industry-leading innovation — is defined by
            passion, craftsmanship, and a commitment to lasting impact.
          </p>
        </div>
      </div>
    </div>
  </section>
);

export default WhoWeAre;
