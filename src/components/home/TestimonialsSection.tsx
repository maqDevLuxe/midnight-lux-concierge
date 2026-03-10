import AnimatedSection from "@/components/AnimatedSection";

const testimonials = [
  {
    quote: "They secured front-row seats to an event that was supposedly impossible to attend. Within 4 hours.",
    member: "Member #0047",
    location: "London",
  },
  {
    quote: "My family's private island vacation was orchestrated to perfection. Every single detail, flawless.",
    member: "Member #0112",
    location: "Monaco",
  },
  {
    quote: "I've worked with many concierge services. This is the only one that truly understands 'impossible' means 'give us an hour.'",
    member: "Member #0203",
    location: "Dubai",
  },
];

const TestimonialsSection = () => (
  <section className="section-padding border-t border-border/30">
    <div className="max-w-7xl mx-auto">
      <AnimatedSection className="text-center mb-20">
        <p className="text-xs tracking-[0.4em] uppercase text-primary mb-4">Endorsements</p>
        <h2 className="text-3xl md:text-4xl font-light text-foreground">Anonymous Member Reviews</h2>
      </AnimatedSection>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {testimonials.map((t, i) => (
          <AnimatedSection key={i} delay={i * 0.15} className="border border-border/20 p-10 hover:border-primary/20 transition-all duration-500">
            <p className="text-foreground leading-relaxed mb-8 italic text-sm">"{t.quote}"</p>
            <div>
              <p className="text-xs text-primary tracking-[0.15em] uppercase">{t.member}</p>
              <p className="text-xs text-muted-foreground mt-1">{t.location}</p>
            </div>
          </AnimatedSection>
        ))}
      </div>
    </div>
  </section>
);

export default TestimonialsSection;
