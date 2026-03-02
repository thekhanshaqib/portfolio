'use client';

import React from 'react';
import { Button } from '@/components/ui/button';
import { Mail, MapPin, Phone, FileText } from 'lucide-react';

const LinkedInIcon = ({ className }: { className?: string }) => (
  <svg 
    viewBox="0 0 24 24" 
    className={className}
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5z" fill="#0A66C2"/>
    <path d="M8 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" fill="white"/>
  </svg>
);

export const Footer = () => {
  return (
    <footer className="py-20 bg-[#16191E] border-t border-white/5">
      <div className="container px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          <div className="space-y-6">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-full bg-gradient-to-br from-primary to-accent flex items-center justify-center font-bold text-sm text-white">S</div>
              <span className="font-bold text-xl tracking-tight">Shaqib Iqbal</span>
            </div>
            <p className="text-muted-foreground leading-relaxed">
              Technical Product Manager building 0-1 products across B2C, B2B, and SaaS ecosystems.
            </p>
            <div className="flex gap-4">
              <a 
                href="https://www.linkedin.com/in/shaqib-iqbal-a15675170/" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="w-10 h-10 rounded-full glass border-white/5 flex items-center justify-center hover:bg-white/10 transition-all group"
              >
                <LinkedInIcon className="w-6 h-6 group-hover:scale-110 transition-transform" />
                <span className="sr-only">LinkedIn</span>
              </a>
              <a 
                href="mailto:shaqibiqbal.1212@gmail.com" 
                className="w-10 h-10 rounded-full glass border-white/5 flex items-center justify-center hover:bg-white/10 transition-colors"
              >
                <Mail className="w-4 h-4 text-muted-foreground hover:text-primary transition-colors" />
                <span className="sr-only">Email</span>
              </a>
            </div>
          </div>

          <div>
            <h4 className="font-bold mb-6 text-white uppercase tracking-widest text-xs">Core Tech</h4>
            <ul className="space-y-3 text-muted-foreground text-sm">
              <li>OpenAI & Gemini APIs</li>
              <li>LLM Workflows (n8n, Make)</li>
              <li>SQL & Power BI</li>
              <li>Product Roadmap & Strategy</li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold mb-6 text-white uppercase tracking-widest text-xs">Navigation</h4>
            <ul className="space-y-3 text-muted-foreground text-sm">
              <li><a href="#career-journey" className="hover:text-primary transition-colors">Career Journey</a></li>
              <li><a href="#skills" className="hover:text-primary transition-colors">Skills</a></li>
              <li><a href="#ai-lab" className="hover:text-primary transition-colors">AI Lab</a></li>
              <li><a href="#automations" className="hover:text-primary transition-colors">Automations</a></li>
              <li><a href="#impact" className="hover:text-primary transition-colors">Impact</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold mb-6 text-white uppercase tracking-widest text-xs">Contact</h4>
            <div className="glass p-6 rounded-2xl border-white/5 space-y-4">
              <div className="flex items-center gap-2 text-xs text-muted-foreground">
                <MapPin className="w-3 h-3" /> Pune, India (Relocate Open)
              </div>
              <div className="flex items-center gap-2 text-xs text-muted-foreground">
                <Phone className="w-3 h-3" /> +91 8707258890
              </div>
              <div className="flex flex-col gap-2 pt-2">
                <a href="mailto:shaqibiqbal.1212@gmail.com" className="block w-full">
                  <Button className="w-full bg-white text-black hover:bg-white/90 flex gap-2">
                    <Mail className="w-4 h-4" /> Contact Me
                  </Button>
                </a>
                <a href="/Shaqibiqbal_AI_Product_Manager.pdf" download="Shaqibiqbal_AI_Product_Manager.pdf" className="block w-full">
                  <Button variant="outline" className="w-full border-white/10 hover:bg-white/5 flex gap-2 text-white">
                    <FileText className="w-4 h-4" /> Download Resume
                  </Button>
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-muted-foreground">
          <p>© 2026 Shaqib Iqbal. Technical Product Manager Portfolio.</p>
          <div className="flex gap-6">
            <span className="text-accent font-semibold flex items-center gap-1">
              <span className="w-2 h-2 rounded-full bg-accent animate-pulse" />
              Available for Immediate Joining
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
};
