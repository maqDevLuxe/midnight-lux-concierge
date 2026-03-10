import AnimatedSection from "@/components/AnimatedSection";
import { Plane, Home, Diamond, Clock, ShieldCheck, Globe } from "lucide-react";

const services = [
  { icon: Plane, title: "Private Aviation", desc: "On-demand jets, helicopters, and yachts worldwide." },
  { icon: Home, title: "Luxury Estates", desc: "Access to unlisted villas, penthouses, and private islands." },
  { icon: Diamond, title: "Bespoke Experiences", desc: "Curated once-in-a-lifetime moments, tailored to you." },
  { icon: Clock, title: "24/7 Availability", desc: "Your dedicated team, around the clock, anywhere." },
  { icon: ShieldCheck, title: "Total Discretion", desc: "Absolute privacy. No records. No traces." },
  { icon: Globe, title: "Global Access", desc: "Connections in every capital, every island, every corner." },
];

const ServicesSection = () => (
  <section className="section-padding">
    <div className="max-w-7xl mx-auto">
      <AnimatedSection className="text-center mb-20">
        <p className="text-xs tracking-[0.4em] uppercase text-primary mb-4">What We Do</p>
        <h2 className="text-3xl md:text-5xl font-light text-foreground">Bespoke Services</h2>
      </AnimatedSection>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-border/20">
        {services.map((service, i) => (
          <AnimatedSection key={service.title} delay={i * 0.1} className="bg-background p-10 md:p-12 group hover:bg-accent/30 transition-all duration-700">
            <service.icon className="w-6 h-6 text-primary mb-6 group-hover:scale-110 transition-transform duration-500" strokeWidth={1} />
            <h3 className="text-lg font-light text-foreground mb-3 tracking-wide">{service.title}</h3>
            <p className="text-sm text-muted-foreground leading-relaxed">{service.desc}</p>
          </AnimatedSection>
        ))}
      </div>
    </div>
  </section>
);

export default ServicesSection;
