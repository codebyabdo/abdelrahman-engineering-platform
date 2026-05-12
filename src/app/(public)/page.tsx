import { HeroSection } from "@/components/sections/home/hero-section";
import { Navigation } from "@/components/layout/navigation";
import { MetricsSection } from "@/components/sections/home/metrics-section";
import { FeaturedProjects } from "@/components/sections/home/featured-projects";
import { PhilosophySection } from "@/components/sections/home/philosophy-section";
import { TechStackSection } from "@/components/sections/home/tech-stack-section";
import { CTASection } from "@/components/sections/home/cta-section";
import { Footer } from "@/components/layout/footer";

export default function HomePage() {
  return (
    <>
      <main className="pt-16">
        <HeroSection />
        <MetricsSection />
        <FeaturedProjects />
        <PhilosophySection />
        <TechStackSection />
        <CTASection />
      </main>
    </>
  );
}
