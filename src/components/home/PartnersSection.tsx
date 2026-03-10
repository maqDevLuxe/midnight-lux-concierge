import AnimatedSection from "@/components/AnimatedSection";

const partners = [
  "Aman Resorts", "Four Seasons", "Rolls-Royce", "NetJets",
  "Christie's", "Sotheby's", "Patek Philippe", "Hermès"
];

const PartnersSection = () => (
  <section className="section-padding border-b border-border/30">
    <div className="max-w-7xl mx-auto">
      <AnimatedSection className="text-center mb-16">
        <p className="text-xs tracking-[0.4em] uppercase text-primary mb-4">Global Partners</p>
        <h2 className="text-3xl md:text-4xl font-light text-foreground">Black Card Network</h2>
      </AnimatedSection>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
        {partners.map((partner, i) => (
          <AnimatedSection key={partner} delay={i * 0.1} className="text-center py-8 border border-border/20 hover:border-primary/30 transition-all duration-500">
            <span className="text-sm tracking-[0.15em] uppercase text-muted-foreground font-light">{partner}</span>
          </AnimatedSection>
        ))}
      </div>
    </div>
  </section>
);

export default PartnersSection;
