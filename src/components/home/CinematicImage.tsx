import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import cinematicImg from "@/assets/cinematic-luxury.jpg";

const CinematicImage = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], ["-10%", "10%"]);

  return (
    <section ref={ref} className="relative h-[60vh] md:h-[80vh] overflow-hidden">
      <motion.img
        style={{ y }}
        src={cinematicImg}
        alt="Luxury rooftop lounge"
        className="absolute inset-0 w-full h-[120%] object-cover"
      />
      <div className="absolute inset-0 bg-background/40" />
      <div className="absolute inset-0 flex items-center justify-center">
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1.2 }}
          className="text-foreground text-2xl md:text-4xl lg:text-5xl font-light text-center px-6 italic"
        >
          "We don't find luxury — we define it."
        </motion.p>
      </div>
    </section>
  );
};

export default CinematicImage;
