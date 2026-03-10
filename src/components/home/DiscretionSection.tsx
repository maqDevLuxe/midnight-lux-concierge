import AnimatedSection from "@/components/AnimatedSection";
import { ShieldCheck, Lock, Eye } from "lucide-react";

const DiscretionSection = () => (
  <section className="section-padding bg-card/30">
    <div className="max-w-4xl mx-auto text-center">
      <AnimatedSection>
        <div className="flex justify-center gap-6 mb-8">
          <ShieldCheck className="w-5 h-5 text-primary" strokeWidth={1} />
          <Lock className="w-5 h-5 text-primary" strokeWidth={1} />
          <Eye className="w-5 h-5 text-primary" strokeWidth={1} />
        </div>
        <p className="text-xs tracking-[0.4em] uppercase text-primary mb-6">The Promise</p>
        <h2 className="text-3xl md:text-5xl font-light text-foreground mb-8 leading-tight">
          Absolute Discretion.<br />No Exceptions.
        </h2>
        <p className="text-muted-foreground leading-relaxed max-w-2xl mx-auto mb-8">
          Every interaction is encrypted end-to-end. We maintain no logs, no records, 
          and operate under the strictest confidentiality agreements in the industry. 
          Your privacy isn't a feature—it's our foundation.
        </p>
        <div className="w-16 h-px bg-primary mx-auto" />
      </AnimatedSection>
    </div>
  </section>
);

export default DiscretionSection;
