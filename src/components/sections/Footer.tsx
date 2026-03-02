'use client';

import React from 'react';
import { Button } from '@/components/ui/button';
import { Mail, Linkedin, Twitter, Github, MapPin, Phone } from 'lucide-react';

export const Footer = () => {
  return (
    <footer className="py-20 bg-[#16191E] border-t border-white/5">
      <div className="container px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          <div className="space-y-6">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-full bg-gradient-to-br from-primary to-accent flex items-center justify-center font-bold text-sm">S</div>
              <span className="font-bold text-xl tracking-tight">Shaqib Iqbal</span>
            </div>
            <p className="text-muted-foreground leading-relaxed">
              Technical Product Manager building 0-1 products across B2C, B2B, and SaaS ecosystems.
            </p>
            <div className="flex gap-4">
              <a href="#" className="w-10 h-10 rounded-full glass border-white/5 flex items-center justify-center hover:bg-white/10 transition-colors">
                <Linkedin className="w-4 h-4" />
              </a>
              <a href="mailto:shaqibiqbal.1212@gmail.com" className="w-10 h-10 rounded-full glass border-white/5 flex items-center justify-center hover:bg-white/10 transition-colors">
                <Mail className="w-4 h-4" />
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
              <li><a href="#case-studies" className="hover:text-primary transition-colors">Case Studies</a></li>
              <li><a href="#ai-lab" className="hover:text-primary transition-colors">AI Lab</a></li>
              <li><a href="#impact" className="hover:text-primary transition-colors">Impact</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Resume</a></li>
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
              <a href="mailto:shaqibiqbal.1212@gmail.com" className="block w-full">
                <Button className="w-full bg-white text-black hover:bg-white/90 flex gap-2">
                  <Mail className="w-4 h-4" /> Get In Touch
                </Button>
              </a>
            </div>
          </div>
        </div>

        <div className="pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-muted-foreground">
          <p>© 2024 Shaqib Iqbal. Technical Product Manager Portfolio.</p>
          <div className="flex gap-6">
            <span className="text-accent">Available for Immediate Joining</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
