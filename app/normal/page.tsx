import { HeroSection } from "@/components/sections/HeroSection";
import { AboutSection } from "@/components/sections/AboutSection";
import { ProjectsSection } from "@/components/sections/ProjectsSection";
// import { ExperienceSection } from "@/components/sections/ExperienceSection";
// import { ContactSection } from "@/components/sections/ContactSection";
// import { FooterSection } from "@/components/sections/FooterSection";

export default function HomePage() {
  return (
    <main className="">
      <HeroSection />
        <AboutSection />
       <ProjectsSection />
      {/*<ExperienceSection />
      <ContactSection />
      <FooterSection /> */}
    </main>
  );
}
