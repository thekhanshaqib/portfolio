
'use client';

import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Menu } from 'lucide-react';
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";

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

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const menuItems = [
    { name: 'Career Journey', href: '#career-journey' },
    { name: 'Skills', href: '#skills' },
    { name: 'AI Lab', href: '#ai-lab' },
    { name: 'Automations', href: '#automations' },
    { name: 'Impact', href: '#impact' },
  ];

  return (
    <nav className="fixed top-6 left-1/2 -translate-x-1/2 z-50 w-[90%] max-w-6xl">
      <div className="glass h-16 px-6 rounded-full flex items-center justify-between border-white/10 shadow-2xl">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 rounded-full bg-gradient-to-br from-primary to-accent flex items-center justify-center font-bold text-sm text-white">S</div>
          <span className="font-bold text-lg tracking-tight hidden sm:inline-block">Shaqib Iqbal</span>
        </div>
        
        <div className="hidden lg:flex items-center gap-6">
          {menuItems.map((item) => (
            <a 
              key={item.name} 
              href={item.href} 
              className="text-[11px] uppercase tracking-widest font-bold text-muted-foreground hover:text-primary transition-colors"
            >
              {item.name}
            </a>
          ))}
        </div>

        <div className="flex items-center gap-3">
          <a 
            href="https://www.linkedin.com/in/shaqib-iqbal-a15675170/" 
            target="_blank" 
            rel="noopener noreferrer"
            className="hidden md:flex items-center justify-center w-10 h-10 rounded-full hover:bg-white/5 transition-colors group"
          >
            <LinkedInIcon className="w-6 h-6 group-hover:scale-110 transition-transform" />
            <span className="sr-only">LinkedIn</span>
          </a>
          
          <Button className="rounded-full bg-white text-black hover:bg-white/90 font-bold px-6 text-xs shadow-lg">
            Resume
          </Button>

          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" className="lg:hidden rounded-full hover:bg-white/5">
                <Menu className="w-5 h-5" />
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="glass border-white/10 text-white p-0">
              <SheetHeader className="p-6 border-b border-white/5">
                <SheetTitle className="text-white text-left font-bold tracking-tight">Navigation</SheetTitle>
              </SheetHeader>
              <div className="flex flex-col p-6 gap-6">
                {menuItems.map((item) => (
                  <a 
                    key={item.name} 
                    href={item.href} 
                    onClick={() => setIsOpen(false)}
                    className="text-sm font-bold tracking-widest text-muted-foreground hover:text-primary transition-colors uppercase"
                  >
                    {item.name}
                  </a>
                ))}
                
                <div className="pt-6 border-t border-white/10">
                  <a 
                    href="https://www.linkedin.com/in/shaqib-iqbal-a15675170/" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 text-muted-foreground hover:text-[#0A66C2] transition-colors"
                  >
                    <LinkedInIcon className="w-8 h-8" />
                    <span className="font-bold uppercase tracking-widest text-[10px]">Connect on LinkedIn</span>
                  </a>
                </div>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </nav>
  );
};
