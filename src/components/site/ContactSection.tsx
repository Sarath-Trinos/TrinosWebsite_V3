import { Mail, MapPin, Phone, Send } from "lucide-react";

const services = [
  "Generative AI & Analytics",
  "Agent-Based Automation",
  "Retrieval-Augmented Generation",
  "RPA & Industrial AI",
  "Enterprise Resource Planning",
  "Cyber Security Services",
  "Customer Relationship Management",
  "Cloud Solutions",
  "Domain-Specific LLMs Fine-Tuning",
  "Modernization",
  "Workflow Automation",
  "Computer Vision",
  "Predictive Analytics & Data Modeling",
  "Web & Mobile Development",
  "AI for ERP Systems",
  "Enterprise Software Development",
];

const inputClass =
  "w-full px-4 py-3 rounded-xl border border-border bg-background text-foreground placeholder:text-muted-foreground/70 focus:outline-none focus:ring-2 focus:ring-primary/40 focus:border-primary transition-colors";

const ContactSection = () => (
  <section className="py-20 bg-background">
    <div className="container-px max-w-[1400px] mx-auto grid lg:grid-cols-2 gap-12 lg:gap-16">
      <div>
        <h2 className="font-display text-3xl md:text-4xl text-foreground">Send us a message</h2>

        <form className="mt-8 space-y-5">
          <div className="grid sm:grid-cols-2 gap-5">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-foreground mb-2">
                Name <span className="text-primary">*</span>
              </label>
              <input
                id="name"
                name="name"
                type="text"
                required
                placeholder="Rahul Sharma"
                className={inputClass}
              />
            </div>
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-foreground mb-2">
                Email <span className="text-primary">*</span>
              </label>
              <input
                id="email"
                name="email"
                type="email"
                required
                placeholder="rahul@gmail.com"
                className={inputClass}
              />
            </div>
          </div>

          <div className="grid sm:grid-cols-2 gap-5">
            <div>
              <label htmlFor="company" className="block text-sm font-medium text-foreground mb-2">
                Company
              </label>
              <input
                id="company"
                name="company"
                type="text"
                placeholder="Company Name"
                className={inputClass}
              />
            </div>
            <div>
              <label htmlFor="phone" className="block text-sm font-medium text-foreground mb-2">
                Phone
              </label>
              <input
                id="phone"
                name="phone"
                type="tel"
                placeholder="9876543210"
                className={inputClass}
              />
            </div>
          </div>

          <div>
            <label htmlFor="service" className="block text-sm font-medium text-foreground mb-2">
              Service interested in <span className="text-primary">*</span>
            </label>
            <select id="service" name="service" required defaultValue="" className={inputClass}>
              <option value="" disabled>
                Select a service
              </option>
              {services.map((s) => (
                <option key={s} value={s}>
                  {s}
                </option>
              ))}
            </select>
          </div>

          <div>
            <label htmlFor="message" className="block text-sm font-medium text-foreground mb-2">
              Message <span className="text-primary">*</span>
            </label>
            <textarea
              id="message"
              name="message"
              required
              rows={6}
              placeholder="Tell us about your project..."
              className={`${inputClass} resize-y`}
            />
          </div>

          <button
            type="submit"
            className="w-full inline-flex items-center justify-center gap-2 bg-gradient-cta text-primary-foreground font-semibold px-7 py-3.5 rounded-xl shadow-soft hover:shadow-glow transition-all"
          >
            Send Message
            <Send className="w-4 h-4" />
          </button>
        </form>
      </div>

      <div>
        <h2 className="font-display text-3xl md:text-4xl text-foreground">Get in touch</h2>
        <p className="mt-5 text-muted-foreground max-w-md">
          Have a question or want to discuss a project? Our team is here to help. Reach out through
          any of these channels, and we'll respond within 24 hours.
        </p>

        <ul className="mt-10 space-y-7">
          <li className="flex items-start gap-4">
            <span className="shrink-0 w-12 h-12 rounded-full bg-surface-soft grid place-items-center">
              <Mail className="w-5 h-5 text-primary" strokeWidth={1.75} />
            </span>
            <div>
              <div className="text-sm text-muted-foreground">Email</div>
              <a
                href="mailto:info@trinos.ai"
                className="font-semibold text-foreground hover:text-primary transition-colors"
              >
                info@trinos.ai
              </a>
            </div>
          </li>

          <li className="flex items-start gap-4">
            <span className="shrink-0 w-12 h-12 rounded-full bg-surface-soft grid place-items-center">
              <Phone className="w-5 h-5 text-primary" strokeWidth={1.75} />
            </span>
            <div>
              <div className="text-sm text-muted-foreground">Phone (India) 🇮🇳</div>
              <a
                href="tel:+919884919111"
                className="font-semibold text-foreground hover:text-primary transition-colors"
              >
                +91 98849 19111
              </a>
            </div>
          </li>

          <li className="flex items-start gap-4">
            <span className="shrink-0 w-12 h-12 rounded-full bg-surface-soft grid place-items-center">
              <MapPin className="w-5 h-5 text-primary" strokeWidth={1.75} />
            </span>
            <div>
              <div className="text-sm text-muted-foreground">Office (India) 🇮🇳</div>
              <div className="font-semibold text-foreground">Trinos Technologies</div>
              <p className="text-sm text-muted-foreground mt-1 max-w-sm">
                Inwrks Spaces, C' wing, 1st floor, 29 Sree Narayana Complex, Sarathy Nagar,
                Velachery, Chennai, Tamil Nadu 600042
              </p>
            </div>
          </li>

          <li className="flex items-start gap-4">
            <span className="shrink-0 w-12 h-12 rounded-full bg-surface-soft grid place-items-center">
              <Phone className="w-5 h-5 text-primary" strokeWidth={1.75} />
            </span>
            <div>
              <div className="text-sm text-muted-foreground">Phone (USA) 🇺🇸</div>
              <a
                href="tel:+17327341160"
                className="font-semibold text-foreground hover:text-primary transition-colors"
              >
                +1 732 734 1160
              </a>
            </div>
          </li>

          <li className="flex items-start gap-4">
            <span className="shrink-0 w-12 h-12 rounded-full bg-surface-soft grid place-items-center">
              <MapPin className="w-5 h-5 text-primary" strokeWidth={1.75} />
            </span>
            <div>
              <div className="text-sm text-muted-foreground">Office (USA) 🇺🇸</div>
              <p className="font-semibold text-foreground mt-1">
                1104 Maple Hill Drive, Woodbridge, New Jersey 07095
              </p>
            </div>
          </li>
        </ul>
      </div>
    </div>
  </section>
);

export default ContactSection;
