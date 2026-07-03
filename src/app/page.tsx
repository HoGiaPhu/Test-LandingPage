import dynamic from "next/dynamic";
import TopNavBar from "@/components/TopNavBar";
import Footer from "@/components/Footer";
import ScrollReveal from "@/components/ScrollReveal";
import HeroSection from "@/sections/HeroSection";
import FeaturesSection from "@/sections/FeaturesSection";

const TechSpecsSection = dynamic(
  () => import("@/sections/TechSpecsSection"),
  { loading: () => <section id="specs" className="min-h-[400px]" /> }
);

const NewsletterSection = dynamic(
  () => import("@/sections/NewsletterSection"),
  { loading: () => <section id="support" className="min-h-[300px]" /> }
);

export default function Home() {
  return (
    <>
      <TopNavBar />
      <main>
        <HeroSection />
        <ScrollReveal>
          <FeaturesSection />
        </ScrollReveal>
        <ScrollReveal parallax>
          <TechSpecsSection />
        </ScrollReveal>
        <ScrollReveal>
          <NewsletterSection />
        </ScrollReveal>
      </main>
      <Footer />
    </>
  );
}
