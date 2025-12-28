import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Problem from "@/components/Problem";
import HowItWorks from "@/components/HowItWorks";
import Features from "@/components/Features";
import WhoWeServe from "@/components/WhoWeServe";
import WhyClavis from "@/components/WhyClavis";
import Security from "@/components/Security";
import FinalCTA from "@/components/FinalCTA";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <Hero />
      <Problem />
      <HowItWorks />
      <Features />
      <WhoWeServe />
      <WhyClavis />
      <Security />
      <FinalCTA />
      <Footer />
    </main>
  );
}
