'use client';

import React from 'react';
import { Button } from '@/components/ui/button';
import { Menu } from 'lucide-react';

export const Navbar = () => {
  return (
    <nav className="fixed top-6 left-1/2 -translate-x-1/2 z-50 w-[90%] max-w-6xl">
      <div className="glass h-16 px-6 rounded-full flex items-center justify-between border-white/10 shadow-2xl">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 rounded-full bg-gradient-to-br from-primary to-accent flex items-center justify-center font-bold text-sm">S</div>
          <span className="font-bold text-lg tracking-tight hidden sm:inline-block">Shaqib Iqbal</span>
        </div>
        
        <div className="hidden lg:flex items-center gap-6">
          {['Hero', 'Timeline', 'AI Lab', 'Automations', 'Impact'].map((item) => (
            <a key={item} href={`#${item.toLowerCase().replace(' ', '-')}`} className="text-[11px] uppercase tracking-widest font-bold text-muted-foreground hover:text-primary transition-colors">
              {item}
            </a>
          ))}
        </div>

        <div className="flex items-center gap-3">
          <Button variant="ghost" className="rounded-full text-xs font-bold md:flex hidden hover:bg-white/5">Resume</Button>
          <a href="mailto:shaqibiqbal.1212@gmail.com">
            <Button className="rounded-full bg-white text-black hover:bg-white/90 font-bold px-6 text-xs">Hire Me</Button>
          </a>
          <Button variant="ghost" size="icon" className="lg:hidden rounded-full">
            <Menu className="w-5 h-5" />
          </Button>
        </div>
      </div>
    </nav>
  );
};
