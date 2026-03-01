
import { Navbar } from '@/components/ui/Navbar';
import { Hero } from '@/components/sections/Hero';
import { CaseStudies } from '@/components/sections/CaseStudies';
import { AILab } from '@/components/sections/AILab';
import { Leadership } from '@/components/sections/Leadership';
import { Footer } from '@/components/sections/Footer';

export default function Home() {
  return (
    <main className="relative min-h-screen">
      <Navbar />
      
      <div id="hero">
        <Hero />
      </div>

      {/* Decorative transition tunnel effect would be implemented with scroll-based 3D logic here if time permitted complex GLSL shaders, but we use standard Three.js scenes for reliability */}
      <div className="w-full h-24 bg-gradient-to-b from-background to-[#16191E]" />
      
      <div id="case-studies">
        <CaseStudies />
      </div>

      <div id="ai-lab">
        <AILab />
      </div>

      <div id="impact">
        <Leadership />
      </div>

      <Footer />
    </main>
  );
}
