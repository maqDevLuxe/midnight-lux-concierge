import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import heroImg from "@/assets/hero-luxury.jpg";

const HeroSection = () => (
  <section className="relative h-screen flex items-center justify-center overflow-hidden">
    {/* Background */}
    <motion.div
      initial={{ scale: 1.1 }}
      animate={{ scale: 1 }}
      transition={{ duration: 1.8, ease: "easeOut" }}
      className="absolute inset-0"
    >
      <img src={heroImg} alt="Luxury concierge" className="w-full h-full object-cover" />
      <div className="absolute inset-0 bg-gradient-to-b from-background/70 via-background/50 to-background" />
    </motion.div>

    {/* Content */}
    <div className="relative z-10 text-center px-6 max-w-4xl">
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5, duration: 0.8 }}
        className="text-xs tracking-[0.4em] uppercase text-primary mb-8"
      >
        By Invitation Only
      </motion.p>
      <motion.h1
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.7, duration: 0.8 }}
        className="text-4xl md:text-6xl lg:text-7xl font-light leading-[1.1] mb-8 text-foreground"
      >
        Your Wish Is
        <br />
        <span className="font-normal italic text-primary">My Command</span>
      </motion.h1>
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.9, duration: 0.8 }}
        className="text-muted-foreground text-base md:text-lg max-w-2xl mx-auto mb-12 leading-relaxed"
      >
        The world's most discreet luxury travel concierge. We orchestrate the impossible
        for those who accept nothing less.
      </motion.p>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.1, duration: 0.8 }}
        className="flex flex-col sm:flex-row gap-4 justify-center"
      >
        <Link
          to="/contact"
          className="magnetic-btn px-10 py-4 bg-primary text-primary-foreground text-xs tracking-[0.2em] uppercase hover:bg-primary/90 transition-all duration-500"
        >
          Request Membership
        </Link>
        <Link
          to="/services"
          className="magnetic-btn px-10 py-4 border border-foreground/20 text-foreground text-xs tracking-[0.2em] uppercase hover:border-primary/40 hover:text-primary transition-all duration-500"
        >
          Explore Services
        </Link>
      </motion.div>
    </div>

    {/* Scroll indicator */}
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 1.5 }}
      className="absolute bottom-10 left-1/2 -translate-x-1/2"
    >
      <motion.div
        animate={{ y: [0, 8, 0] }}
        transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
        className="w-px h-12 bg-gradient-to-b from-primary/60 to-transparent"
      />
    </motion.div>
  </section>
);

export default HeroSection;
