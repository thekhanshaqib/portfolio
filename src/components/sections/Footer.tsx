
'use client';

import React from 'react';
import { Button } from '@/components/ui/button';
import { Mail, Linkedin, Twitter, Github } from 'lucide-react';

export const Footer = () => {
  return (
    <footer className="py-20 bg-[#16191E] border-t border-white/5">
      <div className="container px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          <div className="space-y-6">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-full bg-gradient-to-br from-primary to-accent flex items-center justify-center font-bold text-sm">S</div>
              <span className="font-bold text-xl tracking-tight">Stratosphere</span>
            </div>
            <p className="text-muted-foreground leading-relaxed">
              Technical Product Manager building the next generation of AI-native enterprise and consumer systems.
            </p>
            <div className="flex gap-4">
              <a href="#" className="w-10 h-10 rounded-full glass border-white/5 flex items-center justify-center hover:bg-white/10 transition-colors">
                <Linkedin className="w-4 h-4" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full glass border-white/5 flex items-center justify-center hover:bg-white/10 transition-colors">
                <Twitter className="w-4 h-4" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full glass border-white/5 flex items-center justify-center hover:bg-white/10 transition-colors">
                <Github className="w-4 h-4" />
              </a>
            </div>
          </div>

          <div>
            <h4 className="font-bold mb-6 text-white uppercase tracking-widest text-xs">Product Focus</h4>
            <ul className="space-y-3 text-muted-foreground text-sm">
              <li>AI Workflow Automation</li>
              <li>Two-Sided Marketplaces</li>
              <li>SaaS Optimization</li>
              <li>Logistics & Supply Chain</li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold mb-6 text-white uppercase tracking-widest text-xs">Resources</h4>
            <ul className="space-y-3 text-muted-foreground text-sm">
              <li>Case Studies</li>
              <li>AI Whitepapers</li>
              <li>Product Frameworks</li>
              <li>Resume Download</li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold mb-6 text-white uppercase tracking-widest text-xs">Contact</h4>
            <div className="glass p-6 rounded-2xl border-white/5 space-y-4">
              <p className="text-xs text-muted-foreground">Open for roles in San Francisco, New York, or Remote.</p>
              <Button className="w-full bg-white text-black hover:bg-white/90 flex gap-2">
                <Mail className="w-4 h-4" /> Get In Touch
              </Button>
            </div>
          </div>
        </div>

        <div className="pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-muted-foreground">
          <p>© 2024 Stratosphere Portfolio. All Rights Reserved.</p>
          <div className="flex gap-6">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};
