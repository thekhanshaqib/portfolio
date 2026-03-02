import { Navbar } from '@/components/ui/Navbar';
import { Hero } from '@/components/sections/Hero';
import { Timeline } from '@/components/sections/Timeline';
import { CaseStudies } from '@/components/sections/CaseStudies';
import { Skills } from '@/components/sections/Skills';
import { AILab } from '@/components/sections/AILab';
import { Automations } from '@/components/sections/Automations';
import { Leadership } from '@/components/sections/Leadership';
import { Footer } from '@/components/sections/Footer';

export default function Home() {
  return (
    <main className="relative min-h-screen">
      <Navbar />
      
      <div id="hero">
        <Hero />
      </div>

      <div className="w-full h-24 bg-gradient-to-b from-background to-[#16191E]" />
      
      <div id="career-timeline">
        <Timeline />
      </div>

      <div id="case-studies">
        <CaseStudies />
      </div>

      <div id="skills">
        <Skills />
      </div>

      <div id="ai-lab">
        <AILab />
      </div>

      <div id="automations">
        <Automations />
      </div>

      <div id="impact">
        <Leadership />
      </div>

      <Footer />
    </main>
  );
}
