import AnimatedSection from "@/components/AnimatedSection";
import { Phone, MessageCircle, Mail, Clock } from "lucide-react";

const channels = [
  { icon: Phone, label: "Direct Line", status: "Available", active: true },
  { icon: MessageCircle, label: "Encrypted Chat", status: "Online", active: true },
  { icon: Mail, label: "Priority Email", status: "< 3 min", active: true },
  { icon: Clock, label: "Response Time", status: "Instant", active: true },
];

const SupportDashboard = () => (
  <section className="section-padding border-t border-border/30">
    <div className="max-w-7xl mx-auto">
      <AnimatedSection className="text-center mb-16">
        <p className="text-xs tracking-[0.4em] uppercase text-primary mb-4">Always On</p>
        <h2 className="text-3xl md:text-4xl font-light text-foreground">24/7 Dedicated Support</h2>
      </AnimatedSection>
      <AnimatedSection delay={0.2}>
        <div className="border border-border/30 bg-card/50 backdrop-blur p-8 md:p-12">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {channels.map((ch) => (
              <div key={ch.label} className="p-6 border border-border/20 bg-background/50 hover:border-primary/30 transition-all duration-500">
                <div className="flex items-center gap-3 mb-4">
                  <ch.icon className="w-4 h-4 text-primary" strokeWidth={1.5} />
                  <span className="text-xs text-muted-foreground uppercase tracking-wider">{ch.label}</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                  <span className="text-sm text-foreground">{ch.status}</span>
                </div>
              </div>
            ))}
          </div>
          <div className="mt-8 pt-8 border-t border-border/20 text-center">
            <p className="text-xs text-muted-foreground tracking-wider">Your personal concierge team is standing by — London · New York · Dubai · Tokyo</p>
          </div>
        </div>
      </AnimatedSection>
    </div>
  </section>
);

export default SupportDashboard;
