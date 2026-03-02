'use client';

import React from 'react';
import { Button } from '@/components/ui/button';
import { Menu, Linkedin } from 'lucide-react';

export const Navbar = () => {
  return (
    <nav className="fixed top-6 left-1/2 -translate-x-1/2 z-50 w-[90%] max-w-6xl">
      <div className="glass h-16 px-6 rounded-full flex items-center justify-between border-white/10 shadow-2xl">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 rounded-full bg-gradient-to-br from-primary to-accent flex items-center justify-center font-bold text-sm">S</div>
          <span className="font-bold text-lg tracking-tight hidden sm:inline-block">Shaqib Iqbal</span>
        </div>
        
        <div className="hidden lg:flex items-center gap-6">
          {['Career Journey', 'Skills', 'AI Lab', 'Automations', 'Impact'].map((item) => (
            <a key={item} href={`#${item.toLowerCase().replace(' ', '-')}`} className="text-[11px] uppercase tracking-widest font-bold text-muted-foreground hover:text-primary transition-colors">
              {item}
            </a>
          ))}
        </div>

        <div className="flex items-center gap-3">
          <a href="https://www.linkedin.com/in/shaqib-iqbal-a15675170/" target="_blank" rel="noopener noreferrer">
            <Button variant="ghost" size="icon" className="rounded-full hover:bg-white/5 md:flex hidden">
              <Linkedin className="w-5 h-5 text-muted-foreground hover:text-primary transition-colors" />
              <span className="sr-only">LinkedIn</span>
            </Button>
          </a>
          
          <Button className="rounded-full bg-white text-black hover:bg-white/90 font-bold px-6 text-xs">
            Download Resume
          </Button>

          <Button variant="ghost" size="icon" className="lg:hidden rounded-full">
            <Menu className="w-5 h-5" />
          </Button>
        </div>
      </div>
    </nav>
  );
};
