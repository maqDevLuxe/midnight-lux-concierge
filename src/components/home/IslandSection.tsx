import AnimatedSection from "@/components/AnimatedSection";
import islandImg from "@/assets/private-island.jpg";

const IslandSection = () => (
  <section className="section-padding">
    <div className="max-w-7xl mx-auto">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        <AnimatedSection className="relative overflow-hidden aspect-[4/5] order-2 lg:order-1">
          <img src={islandImg} alt="Private island estate" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-t from-background/40 to-transparent" />
        </AnimatedSection>
        <AnimatedSection delay={0.2} className="order-1 lg:order-2">
          <p className="text-xs tracking-[0.4em] uppercase text-primary mb-4">Real Estate</p>
          <h2 className="text-3xl md:text-5xl font-light text-foreground mb-8">Private Islands & Estates</h2>
          <p className="text-muted-foreground leading-relaxed mb-8">
            Access to the world's most exclusive off-market properties. From private islands in the Maldives 
            to historic châteaux in Provence—properties that don't exist on any listing.
          </p>
          <div className="space-y-4">
            {["Off-market properties exclusively", "Full-service estate management", "Helicopter & yacht transfers included", "Personal chef & butler arrangements"].map((item) => (
              <div key={item} className="flex items-center gap-3">
                <div className="w-1 h-1 bg-primary rounded-full" />
                <span className="text-sm text-muted-foreground">{item}</span>
              </div>
            ))}
          </div>
        </AnimatedSection>
      </div>
    </div>
  </section>
);

export default IslandSection;
