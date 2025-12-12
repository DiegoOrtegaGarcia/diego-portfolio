'use client'
import { Dashboard } from '@/components/portfolio/Dashboard';
import { AboutSection } from '@/components/portfolio/sections/AboutSection';
import { ContactSection } from '@/components/portfolio/sections/ContactSection';
import { HomeSection } from '@/components/portfolio/sections/HomeSection';
import { ProjectsSection } from '@/components/portfolio/sections/ProjectsSection';
import { TechnologiesSection } from '@/components/portfolio/sections/TechnologiesSection';
import { useThemeStore } from '@/lib/themeStore';

export default function Home() {
  const { darkMode} = useThemeStore();
  return (
    <main className={`${darkMode ? "bg-black" : "bg-white"} "min-h-screen transition-colors duration-500 ease-in-out`}>
      <Dashboard />
      <HomeSection />
      <ProjectsSection />
      <AboutSection />
      <TechnologiesSection />
      <ContactSection />
    </main>
  );
}
