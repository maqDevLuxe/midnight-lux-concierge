import { Link } from "react-router-dom";
import AnimatedSection from "@/components/AnimatedSection";

const MembershipCTA = () => (
  <section className="section-padding">
    <div className="max-w-4xl mx-auto text-center">
      <AnimatedSection>
        <p className="text-xs tracking-[0.4em] uppercase text-primary mb-6">Membership</p>
        <h2 className="text-3xl md:text-5xl lg:text-6xl font-light text-foreground mb-8 leading-tight">
          Ready to Experience<br />the Extraordinary?
        </h2>
        <p className="text-muted-foreground leading-relaxed max-w-xl mx-auto mb-12">
          Membership is by invitation or application only. We accept fewer than 5% of applicants 
          to ensure every member receives our undivided attention.
        </p>
        <Link
          to="/contact"
          className="magnetic-btn inline-block px-14 py-5 bg-primary text-primary-foreground text-xs tracking-[0.25em] uppercase hover:bg-primary/90 transition-all duration-500"
        >
          Apply for Membership
        </Link>
        <p className="text-xs text-muted-foreground mt-8 tracking-wider">Annual membership starts at $50,000</p>
      </AnimatedSection>
    </div>
  </section>
);

export default MembershipCTA;
