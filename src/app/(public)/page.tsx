import { HeroSection } from "@/components/sections/home/hero-section";
import { MetricsSection } from "@/components/sections/home/metrics-section";
import { FeaturedProjects } from "@/components/sections/home/featured-projects";
import { PhilosophySection } from "@/components/sections/home/philosophy-section";
import { TechStackSection } from "@/components/sections/home/tech-stack-section";
import { CTASection } from "@/components/sections/home/cta-section";

export default function HomePage() {
  return (
    <>
        <HeroSection />
        <MetricsSection />
        <FeaturedProjects />
        <PhilosophySection />
        <TechStackSection />
        <CTASection />
    </>
  );
}
