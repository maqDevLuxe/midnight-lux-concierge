import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";

const links = [
  { to: "/", label: "Home" },
  { to: "/services", label: "Services" },
  { to: "/access", label: "Access" },
  { to: "/contact", label: "Contact" },
];

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const location = useLocation();

  return (
    <motion.nav
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="fixed top-0 left-0 right-0 z-50 px-6 md:px-12 lg:px-24 py-6 flex items-center justify-between backdrop-blur-md bg-background/60 border-b border-border/30"
    >
      <Link to="/" className="text-foreground font-display text-lg tracking-[0.3em] uppercase font-light">
        Élévation
      </Link>

      {/* Desktop */}
      <div className="hidden md:flex items-center gap-10">
        {links.map((link) => (
          <Link
            key={link.to}
            to={link.to}
            className={`text-xs tracking-[0.2em] uppercase transition-colors duration-300 ${
              location.pathname === link.to
                ? "text-primary"
                : "text-muted-foreground hover:text-foreground"
            }`}
          >
            {link.label}
          </Link>
        ))}
        <Link
          to="/contact"
          className="magnetic-btn text-xs tracking-[0.15em] uppercase px-6 py-2.5 border border-primary/40 text-primary hover:bg-primary hover:text-primary-foreground transition-all duration-500"
        >
          Apply
        </Link>
      </div>

      {/* Mobile toggle */}
      <button onClick={() => setOpen(!open)} className="md:hidden text-foreground">
        {open ? <X size={20} /> : <Menu size={20} />}
      </button>

      {/* Mobile menu */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="absolute top-full left-0 right-0 bg-background/95 backdrop-blur-lg border-b border-border/30 p-8 md:hidden"
          >
            <div className="flex flex-col gap-6">
              {links.map((link) => (
                <Link
                  key={link.to}
                  to={link.to}
                  onClick={() => setOpen(false)}
                  className="text-sm tracking-[0.2em] uppercase text-muted-foreground hover:text-foreground transition-colors"
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};

export default Navbar;
