import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import AnimatedSection from "@/components/AnimatedSection";
import { motion } from "framer-motion";
import monacoImg from "@/assets/monaco-event.jpg";

const tiers = [
  {
    name: "Platinum",
    price: "$50,000",
    period: "per year",
    features: ["24/7 personal concierge", "Private aviation booking", "Luxury estate access", "Event ticket procurement", "Restaurant reservations worldwide"],
  },
  {
    name: "Black",
    price: "$150,000",
    period: "per year",
    features: ["Everything in Platinum", "Dedicated 2-person team", "Private island access", "Rare acquisition services", "Priority impossible requests", "Helicopter & yacht transfers"],
    featured: true,
  },
  {
    name: "Sovereign",
    price: "By Invitation",
    period: "",
    features: ["Everything in Black", "Full lifestyle management", "Family office integration", "Global security coordination", "Unlimited requests", "Board-level introductions"],
  },
];

const Access = () => (
  <div className="min-h-screen bg-background">
    <Navbar />
    <section className="relative h-[60vh] flex items-center justify-center overflow-hidden">
      <img src={monacoImg} alt="Exclusive access" className="absolute inset-0 w-full h-full object-cover" />
      <div className="absolute inset-0 bg-background/75" />
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="relative z-10 text-center px-6"
      >
        <p className="text-xs tracking-[0.4em] uppercase text-primary mb-4">Membership</p>
        <h1 className="text-4xl md:text-6xl font-light text-foreground">Levels of Access</h1>
      </motion.div>
    </section>

    <section className="section-padding">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-border/20">
          {tiers.map((tier, i) => (
            <AnimatedSection key={tier.name} delay={i * 0.15} className={`p-10 md:p-12 ${tier.featured ? 'bg-accent/40 border border-primary/20' : 'bg-background'}`}>
              <p className="text-xs tracking-[0.3em] uppercase text-primary mb-2">{tier.name}</p>
              <div className="mb-8">
                <span className="text-3xl font-light text-foreground">{tier.price}</span>
                {tier.period && <span className="text-sm text-muted-foreground ml-2">{tier.period}</span>}
              </div>
              <div className="space-y-4 mb-10">
                {tier.features.map((f) => (
                  <div key={f} className="flex items-center gap-3">
                    <div className="w-1 h-1 bg-primary rounded-full flex-shrink-0" />
                    <span className="text-sm text-muted-foreground">{f}</span>
                  </div>
                ))}
              </div>
              <a
                href="/contact"
                className={`magnetic-btn block text-center text-xs tracking-[0.15em] uppercase px-6 py-4 transition-all duration-500 ${
                  tier.featured
                    ? 'bg-primary text-primary-foreground hover:bg-primary/90'
                    : 'border border-border/40 text-foreground hover:border-primary/40 hover:text-primary'
                }`}
              >
                {tier.price === "By Invitation" ? "Request Introduction" : "Apply Now"}
              </a>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
    <Footer />
  </div>
);

export default Access;
