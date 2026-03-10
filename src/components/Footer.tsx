import { Link } from "react-router-dom";

const Footer = () => (
  <footer className="section-padding border-t border-border/30">
    <div className="max-w-7xl mx-auto">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
        <div className="md:col-span-2">
          <h3 className="font-display text-lg tracking-[0.3em] uppercase font-light text-foreground mb-4">
            Élévation
          </h3>
          <p className="text-muted-foreground text-sm leading-relaxed max-w-md">
            The world's most exclusive travel concierge. We don't just open doors — we build them.
          </p>
        </div>
        <div>
          <h4 className="text-xs tracking-[0.2em] uppercase text-primary mb-6">Navigate</h4>
          <div className="flex flex-col gap-3">
            {["Home", "Services", "Access", "Contact"].map((item) => (
              <Link
                key={item}
                to={item === "Home" ? "/" : `/${item.toLowerCase()}`}
                className="text-sm text-muted-foreground hover:text-foreground transition-colors"
              >
                {item}
              </Link>
            ))}
          </div>
        </div>
        <div>
          <h4 className="text-xs tracking-[0.2em] uppercase text-primary mb-6">Connect</h4>
          <div className="flex flex-col gap-3 text-sm text-muted-foreground">
            <span>London · Monaco · Dubai</span>
            <span>New York · Tokyo</span>
            <span className="hover:text-foreground transition-colors cursor-pointer">concierge@elevation.com</span>
          </div>
        </div>
      </div>
      <div className="border-t border-border/30 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
        <p className="text-xs text-muted-foreground tracking-wider">
          © 2026 Élévation. All rights reserved.
        </p>
        <p className="text-xs text-muted-foreground tracking-wider">
          By invitation only.
        </p>
      </div>
    </div>
  </footer>
);

export default Footer;
