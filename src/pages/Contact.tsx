import { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import AnimatedSection from "@/components/AnimatedSection";
import { motion } from "framer-motion";
import { toast } from "sonner";

const Contact = () => {
  const [form, setForm] = useState({ name: "", email: "", phone: "", message: "", tier: "Platinum" });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast.success("Your application has been received. We'll be in touch within 24 hours.");
    setForm({ name: "", email: "", phone: "", message: "", tier: "Platinum" });
  };

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <section className="pt-32 pb-20 section-padding">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
            <AnimatedSection>
              <p className="text-xs tracking-[0.4em] uppercase text-primary mb-4">Apply</p>
              <h1 className="text-4xl md:text-5xl font-light text-foreground mb-8">Begin Your Journey</h1>
              <p className="text-muted-foreground leading-relaxed mb-12">
                Membership applications are reviewed within 48 hours. 
                We accept fewer than 5% of applicants to maintain the highest standard of service.
              </p>
              <div className="space-y-8">
                {[
                  { label: "London HQ", value: "One Hyde Park, Knightsbridge, SW1X 7LJ" },
                  { label: "Direct Line", value: "+44 (0) 20 7946 0958" },
                  { label: "Encrypted Email", value: "concierge@elevation.com" },
                ].map((item) => (
                  <div key={item.label}>
                    <p className="text-xs tracking-[0.2em] uppercase text-primary mb-1">{item.label}</p>
                    <p className="text-sm text-muted-foreground">{item.value}</p>
                  </div>
                ))}
              </div>
            </AnimatedSection>

            <AnimatedSection delay={0.2}>
              <form onSubmit={handleSubmit} className="space-y-6">
                {[
                  { name: "name" as const, label: "Full Name", type: "text" },
                  { name: "email" as const, label: "Email", type: "email" },
                  { name: "phone" as const, label: "Phone", type: "tel" },
                ].map((field) => (
                  <div key={field.name}>
                    <label className="text-xs tracking-[0.15em] uppercase text-muted-foreground mb-2 block">{field.label}</label>
                    <input
                      type={field.type}
                      required
                      value={form[field.name]}
                      onChange={(e) => setForm({ ...form, [field.name]: e.target.value })}
                      className="w-full bg-transparent border-b border-border/40 py-3 text-foreground text-sm focus:outline-none focus:border-primary transition-colors placeholder:text-muted-foreground/40"
                    />
                  </div>
                ))}
                <div>
                  <label className="text-xs tracking-[0.15em] uppercase text-muted-foreground mb-2 block">Preferred Tier</label>
                  <select
                    value={form.tier}
                    onChange={(e) => setForm({ ...form, tier: e.target.value })}
                    className="w-full bg-transparent border-b border-border/40 py-3 text-foreground text-sm focus:outline-none focus:border-primary transition-colors"
                  >
                    <option value="Platinum" className="bg-background">Platinum — $50,000/yr</option>
                    <option value="Black" className="bg-background">Black — $150,000/yr</option>
                    <option value="Sovereign" className="bg-background">Sovereign — By Invitation</option>
                  </select>
                </div>
                <div>
                  <label className="text-xs tracking-[0.15em] uppercase text-muted-foreground mb-2 block">Tell Us About Yourself</label>
                  <textarea
                    rows={4}
                    value={form.message}
                    onChange={(e) => setForm({ ...form, message: e.target.value })}
                    className="w-full bg-transparent border-b border-border/40 py-3 text-foreground text-sm focus:outline-none focus:border-primary transition-colors resize-none placeholder:text-muted-foreground/40"
                  />
                </div>
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  type="submit"
                  className="magnetic-btn w-full py-4 bg-primary text-primary-foreground text-xs tracking-[0.25em] uppercase hover:bg-primary/90 transition-all duration-500 mt-4"
                >
                  Submit Application
                </motion.button>
              </form>
            </AnimatedSection>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default Contact;
