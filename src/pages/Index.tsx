import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import HeroSection from "@/components/home/HeroSection";
import PartnersSection from "@/components/home/PartnersSection";
import ServicesSection from "@/components/home/ServicesSection";
import EventsSection from "@/components/home/EventsSection";
import MetricsSection from "@/components/home/MetricsSection";
import IslandSection from "@/components/home/IslandSection";
import SupportDashboard from "@/components/home/SupportDashboard";
import CinematicImage from "@/components/home/CinematicImage";
import CountersSection from "@/components/home/CountersSection";
import CityGuides from "@/components/home/CityGuides";
import DiscretionSection from "@/components/home/DiscretionSection";
import TestimonialsSection from "@/components/home/TestimonialsSection";
import MembershipCTA from "@/components/home/MembershipCTA";

const Index = () => (
  <div className="min-h-screen bg-background">
    <Navbar />
    <HeroSection />
    <PartnersSection />
    <ServicesSection />
    <EventsSection />
    <MetricsSection />
    <IslandSection />
    <SupportDashboard />
    <CinematicImage />
    <CountersSection />
    <CityGuides />
    <DiscretionSection />
    <TestimonialsSection />
    <MembershipCTA />
    <Footer />
  </div>
);

export default Index;
