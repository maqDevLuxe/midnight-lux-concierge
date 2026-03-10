import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import AnimatedSection from "@/components/AnimatedSection";
import { motion } from "framer-motion";
import { Plane, Home, Diamond, Utensils, Car, Shirt } from "lucide-react";
import jetImg from "@/assets/private-jet.jpg";

const services = [
  { icon: Plane, title: "Private Aviation", desc: "Access to 5,000+ jets worldwide. From turboprops to Boeing Business Jets. Door-to-door, on your schedule.", features: ["Same-day booking", "Empty leg deals", "Onboard chef & sommelier"] },
  { icon: Home, title: "Luxury Real Estate", desc: "Off-market villas, private islands, historic estates. Properties the world doesn't know exist.", features: ["Private island portfolio", "Full estate management", "Seasonal villa rotations"] },
  { icon: Diamond, title: "Rare Acquisitions", desc: "Source rare watches, art, wine, and collectibles through our global network of dealers and auction houses.", features: ["Pre-auction access", "Authentication guaranteed", "Climate-controlled storage"] },
  { icon: Utensils, title: "Culinary Experiences", desc: "Private dinners by Michelin-starred chefs. Impossible restaurant reservations. Vineyard acquisitions.", features: ["Chef's table worldwide", "Private vineyard tours", "Custom menu curation"] },
  { icon: Car, title: "Automotive & Yachts", desc: "Charter superyachts, acquire classic cars, or arrange a fleet of Rolls-Royces for your next event.", features: ["Superyacht fleet access", "Classic car sourcing", "Event fleet management"] },
  { icon: Shirt, title: "Lifestyle & Wellness", desc: "Bespoke tailoring, personal shopping, spa retreats, and wellness programs curated for you.", features: ["Personal stylist", "Wellness retreats", "Bespoke wardrobe"] },
];

const Services = () => (
  <div className="min-h-screen bg-background">
    <Navbar />
    {/* Hero */}
    <section className="relative h-[70vh] flex items-center justify-center overflow-hidden">
      <img src={jetImg} alt="Private jet" className="absolute inset-0 w-full h-full object-cover" />
      <div className="absolute inset-0 bg-background/70" />
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="relative z-10 text-center px-6"
      >
        <p className="text-xs tracking-[0.4em] uppercase text-primary mb-4">Our Services</p>
        <h1 className="text-4xl md:text-6xl font-light text-foreground">Anything. Anywhere. Anytime.</h1>
      </motion.div>
    </section>

    {/* Services grid */}
    <section className="section-padding">
      <div className="max-w-7xl mx-auto space-y-0">
        {services.map((s, i) => (
          <AnimatedSection key={s.title} delay={0.1}>
            <div className={`grid grid-cols-1 lg:grid-cols-2 gap-16 items-start py-16 ${i < services.length - 1 ? 'border-b border-border/20' : ''}`}>
              <div>
                <s.icon className="w-6 h-6 text-primary mb-6" strokeWidth={1} />
                <h2 className="text-2xl md:text-3xl font-light text-foreground mb-4">{s.title}</h2>
                <p className="text-muted-foreground leading-relaxed">{s.desc}</p>
              </div>
              <div className="space-y-4">
                {s.features.map((f) => (
                  <div key={f} className="flex items-center gap-3 py-3 border-b border-border/10">
                    <div className="w-1 h-1 bg-primary rounded-full" />
                    <span className="text-sm text-foreground/80">{f}</span>
                  </div>
                ))}
              </div>
            </div>
          </AnimatedSection>
        ))}
      </div>
    </section>
    <Footer />
  </div>
);

export default Services;
