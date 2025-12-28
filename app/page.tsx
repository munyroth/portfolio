import { AboutSection } from "@/components/about-section";
import { ContactSection } from "@/components/contact-section";
import { ExperienceSection } from "@/components/experience-section";
import { HeroSection } from "@/components/hero-section";
import { Navigation } from "@/components/navigation";
import { ProjectsSection } from "@/components/projects-section";
import { TechStackSection } from "@/components/tech-stack-section";

export default function Page() {
	return (
		<main className="min-h-screen bg-background">
			<Navigation />
			<HeroSection />
			<AboutSection />
			<TechStackSection />
			<ProjectsSection />
			<ExperienceSection />
			<ContactSection />
		</main>
	);
}
