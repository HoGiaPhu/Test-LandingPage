import TopNavBar from "@/components/TopNavBar";
import Footer from "@/components/Footer";
import FeaturesSection from "@/sections/FeaturesSection";
import HeroSection from "@/sections/HeroSection";
import NewsletterSection from "@/sections/NewsletterSection";
import TechSpecsSection from "@/sections/TechSpecsSection";

export default function Home() {
  return (
    <>
      <TopNavBar />
      <main>
        <HeroSection />
        <FeaturesSection />
        <TechSpecsSection />
        <NewsletterSection />
      </main>
      <Footer />
    </>
  );
}
