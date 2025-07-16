import Header from "@/components/Header";
import Hero from "@/components/Hero";
import SkoolCommunity from "@/components/SkoolCommunity";
import Stats from "@/components/Stats";
import Automations from "@/components/Automations";
import Benefits from "@/components/Benefits";
import ScaleSection from "@/components/ScaleSection";
import WorkProcess from "@/components/WorkProcess";
import Blog from "@/components/Blog";
import Testimonials from "@/components/Testimonials";
import FAQ from "@/components/FAQ";
import CTA from "@/components/CTA";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <Hero />
       <SkoolCommunity/>
      <Stats />
      <Automations />
      <Benefits />
      <ScaleSection />
      <WorkProcess />
      <Blog />
      <Testimonials />
      <FAQ />
      <CTA />
      <Footer />
    </div>
  );
};

export default Index;
