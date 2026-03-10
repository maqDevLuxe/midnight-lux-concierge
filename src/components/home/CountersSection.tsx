import { useEffect, useState, useRef } from "react";
import { useInView } from "framer-motion";
import AnimatedSection from "@/components/AnimatedSection";

const counters = [
  { value: 2847, label: "Impossible Requests Fulfilled" },
  { value: 156, label: "Private Islands Booked" },
  { value: 4200, label: "Private Jet Hours Arranged" },
  { value: 312, label: "Sold-Out Events Accessed" },
];

const AnimatedCounter = ({ target }: { target: number }) => {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const inView = useInView(ref, { once: true });

  useEffect(() => {
    if (!inView) return;
    const duration = 2500;
    const steps = 80;
    const inc = target / steps;
    let cur = 0;
    const t = setInterval(() => {
      cur += inc;
      if (cur >= target) { setCount(target); clearInterval(t); }
      else setCount(Math.floor(cur));
    }, duration / steps);
    return () => clearInterval(t);
  }, [inView, target]);

  return <span ref={ref} className="text-5xl md:text-6xl font-light text-foreground tabular-nums">{count.toLocaleString()}</span>;
};

const CountersSection = () => (
  <section className="section-padding bg-card/50">
    <div className="max-w-7xl mx-auto">
      <AnimatedSection className="text-center mb-20">
        <p className="text-xs tracking-[0.4em] uppercase text-primary mb-4">Track Record</p>
        <h2 className="text-3xl md:text-4xl font-light text-foreground">Impossible Requests, Fulfilled</h2>
      </AnimatedSection>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
        {counters.map((c, i) => (
          <AnimatedSection key={c.label} delay={i * 0.15} className="text-center">
            <AnimatedCounter target={c.value} />
            <div className="w-8 h-px bg-primary mx-auto my-4" />
            <p className="text-xs text-muted-foreground tracking-wider uppercase">{c.label}</p>
          </AnimatedSection>
        ))}
      </div>
    </div>
  </section>
);

export default CountersSection;
