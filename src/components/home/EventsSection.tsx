import AnimatedSection from "@/components/AnimatedSection";
import monacoImg from "@/assets/monaco-event.jpg";

const events = [
  { name: "Met Gala", location: "New York", status: "Secured" },
  { name: "Monaco Grand Prix", location: "Monte Carlo", status: "VIP Paddock" },
  { name: "Art Basel", location: "Miami / Basel", status: "Private Viewing" },
  { name: "Cannes Film Festival", location: "French Riviera", status: "A-List Access" },
];

const EventsSection = () => (
  <section className="section-padding border-t border-border/30">
    <div className="max-w-7xl mx-auto">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        <AnimatedSection>
          <p className="text-xs tracking-[0.4em] uppercase text-primary mb-4">Exclusive Access</p>
          <h2 className="text-3xl md:text-5xl font-light text-foreground mb-8">The Impossible Events</h2>
          <p className="text-muted-foreground leading-relaxed mb-12">
            We secure access to the world's most exclusive gatherings—events where guest lists are more guarded than state secrets.
          </p>
          <div className="space-y-6">
            {events.map((event) => (
              <div key={event.name} className="flex items-center justify-between py-4 border-b border-border/20">
                <div>
                  <h4 className="text-foreground font-light">{event.name}</h4>
                  <p className="text-xs text-muted-foreground mt-1">{event.location}</p>
                </div>
                <span className="text-xs tracking-[0.15em] uppercase text-primary">{event.status}</span>
              </div>
            ))}
          </div>
        </AnimatedSection>
        <AnimatedSection delay={0.2} className="relative overflow-hidden aspect-[4/5]">
          <img src={monacoImg} alt="Monaco Grand Prix" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-t from-background/60 to-transparent" />
        </AnimatedSection>
      </div>
    </div>
  </section>
);

export default EventsSection;
