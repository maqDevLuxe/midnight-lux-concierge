import { useEffect, useState, useRef } from "react";
import { motion, useInView } from "framer-motion";

const metrics = [
  { value: 14200, suffix: "+", label: "Hours Saved Annually" },
  { value: 98, suffix: "%", label: "Request Fulfillment Rate" },
  { value: 47, suffix: "", label: "Countries Covered" },
  { value: 3, suffix: "min", label: "Average Response Time" },
];

const Counter = ({ target, suffix }: { target: number; suffix: string }) => {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const inView = useInView(ref, { once: true });

  useEffect(() => {
    if (!inView) return;
    const duration = 2000;
    const steps = 60;
    const increment = target / steps;
    let current = 0;
    const timer = setInterval(() => {
      current += increment;
      if (current >= target) {
        setCount(target);
        clearInterval(timer);
      } else {
        setCount(Math.floor(current));
      }
    }, duration / steps);
    return () => clearInterval(timer);
  }, [inView, target]);

  return (
    <span ref={ref} className="text-4xl md:text-5xl font-light text-primary tabular-nums">
      {count.toLocaleString()}{suffix}
    </span>
  );
};

const MetricsSection = () => (
  <section className="section-padding bg-accent/20 border-y border-border/30">
    <div className="max-w-7xl mx-auto">
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        className="text-center mb-16"
      >
        <p className="text-xs tracking-[0.4em] uppercase text-primary mb-4">Performance</p>
        <h2 className="text-3xl md:text-4xl font-light text-foreground">Time Saved, Lives Elevated</h2>
      </motion.div>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
        {metrics.map((m) => (
          <div key={m.label} className="text-center">
            <Counter target={m.value} suffix={m.suffix} />
            <p className="text-xs text-muted-foreground tracking-wider uppercase mt-3">{m.label}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default MetricsSection;
