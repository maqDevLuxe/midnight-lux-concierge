import AnimatedSection from "@/components/AnimatedSection";

const cities = [
  { name: "Tokyo", tagline: "Hidden omakase, private temple visits", vibe: "Zen Meets Midnight" },
  { name: "Monaco", tagline: "Superyacht berths, casino privé", vibe: "Pure Opulence" },
  { name: "Dubai", tagline: "Desert safaris, penthouse suites", vibe: "Future Luxury" },
  { name: "London", tagline: "Private members' clubs, bespoke tailoring", vibe: "Classic Refined" },
  { name: "New York", tagline: "Broadway backstage, rooftop helipads", vibe: "Electric Elite" },
];

const CityGuides = () => (
  <section className="section-padding border-t border-border/30">
    <div className="max-w-7xl mx-auto">
      <AnimatedSection className="text-center mb-16">
        <p className="text-xs tracking-[0.4em] uppercase text-primary mb-4">Insider Knowledge</p>
        <h2 className="text-3xl md:text-5xl font-light text-foreground">City Guides</h2>
      </AnimatedSection>
      <div className="space-y-0">
        {cities.map((city, i) => (
          <AnimatedSection key={city.name} delay={i * 0.1}>
            <div className="group flex items-center justify-between py-8 border-b border-border/20 hover:border-primary/30 transition-all duration-500 cursor-pointer px-4">
              <div className="flex items-center gap-8">
                <span className="text-xs text-muted-foreground tabular-nums w-6">{String(i + 1).padStart(2, '0')}</span>
                <h3 className="text-2xl md:text-3xl font-light text-foreground group-hover:text-primary transition-colors duration-500">{city.name}</h3>
              </div>
              <div className="hidden md:flex items-center gap-12">
                <span className="text-sm text-muted-foreground">{city.tagline}</span>
                <span className="text-xs tracking-[0.15em] uppercase text-primary/60">{city.vibe}</span>
              </div>
            </div>
          </AnimatedSection>
        ))}
      </div>
    </div>
  </section>
);

export default CityGuides;
