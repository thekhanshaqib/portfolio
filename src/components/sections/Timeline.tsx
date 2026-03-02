'use client';

import React, { useRef, useEffect, useState } from 'react';
import { Badge } from '@/components/ui/badge';
import { Briefcase, Calendar, MapPin, Bike } from 'lucide-react';
import { cn } from '@/lib/utils';

const JOURNEY = [
  {
    title: 'Web Developer Intern',
    company: 'Drivers In India',
    location: 'Pune, India',
    period: 'Aug 2020 - Jan 2021',
    description: 'Started career with an engineering foundation, focusing on web development and technical implementations.',
    color: 'bg-blue-500',
  },
  {
    title: 'Product Analyst',
    company: 'MAVS',
    location: 'Pune, India',
    period: 'Apr 2021 - Nov 2022',
    description: 'Transitioned into product management, analyzing user needs and market trends to drive feature development.',
    color: 'bg-purple-500',
  },
  {
    title: 'Associate Product Manager',
    company: 'MAVS',
    location: 'Pune, India',
    period: 'Dec 2022 - Mar 2024',
    description: 'Promoted to lead enterprise B2B inventory and procurement platforms, managing quoted billings and sales growth.',
    color: 'bg-accent',
  },
  {
    title: 'Co-founder & Project Manager',
    company: 'Centeuno Technologies LLP',
    location: 'Pune, India',
    period: 'Feb 2023 - Mar 2025',
    description: 'Led delivery of 13+ cross-domain products. Scaled e-commerce platform to 1M AED revenue with 40% user retention.',
    color: 'bg-emerald-500',
  },
  {
    title: 'Product Manager & Digital Transformation',
    company: 'MegaPower Electromechanical LLC',
    location: 'Dubai, UAE',
    period: 'Apr 2024 - Present',
    description: 'Leading 0-1 AI automation projects and digital transformation strategies in the MENA region.',
    color: 'bg-primary',
  },
];

export const Timeline = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const lastScrollY = useRef(0);
  const [scrollProgress, setScrollProgress] = useState(0);
  const [activeIndex, setActiveIndex] = useState(0);
  const [isFacingLeft, setIsFacingLeft] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (!containerRef.current) return;
      
      const currentScrollY = window.scrollY;
      if (currentScrollY > lastScrollY.current) {
        setIsFacingLeft(false);
      } else if (currentScrollY < lastScrollY.current) {
        setIsFacingLeft(true);
      }
      lastScrollY.current = currentScrollY;

      const rect = containerRef.current.getBoundingClientRect();
      const sectionHeight = containerRef.current.offsetHeight;
      const viewportHeight = window.innerHeight;
      
      const scrolled = -rect.top;
      const totalScrollableHeight = sectionHeight - viewportHeight;
      
      const progress = Math.min(Math.max(scrolled / totalScrollableHeight, 0), 1);
      setScrollProgress(progress);

      const index = Math.min(
        Math.floor(progress * JOURNEY.length),
        JOURNEY.length - 1
      );
      setActiveIndex(index);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const getTranslateX = () => {
    if (typeof window === 'undefined') return 0;
    const cardWidth = 398;
    const totalContentWidth = JOURNEY.length * cardWidth;
    const visibleWidth = window.innerWidth * 0.8;
    return scrollProgress * (totalContentWidth - visibleWidth);
  };

  const translateX = getTranslateX();
  const bikeDistance = (JOURNEY.length - 1) * 398;

  return (
    <section id="career-journey" ref={containerRef} className="relative h-[500vh] bg-background">
      <div className="sticky top-0 h-screen flex flex-col justify-center overflow-hidden">
        <div className="container px-6 mb-12 relative z-20">
          <div className="text-center">
            <Badge className="mb-4 bg-primary/20 text-primary border-primary/20 px-4 py-1 uppercase tracking-widest text-[10px]">THE JOURNEY</Badge>
            <h2 className="text-4xl md:text-5xl font-bold">Career <span className="text-primary italic">Journey.</span></h2>
            <p className="text-muted-foreground mt-4 max-w-xl mx-auto text-sm">Scroll to watch the journey unfold.</p>
          </div>
        </div>

        <div className="relative w-full">
          <div 
            className="flex gap-12 px-[15vw] transition-transform duration-300 ease-out py-24 relative"
            style={{ transform: `translateX(-${translateX}px)` }}
          >
            <div className="absolute top-24 left-0 w-[500%] h-1 bg-white/5 -z-10 -translate-y-1/2 overflow-hidden">
              <div 
                className="h-full bg-primary/20 transition-all duration-300"
                style={{ width: `${(scrollProgress * 100) / 5}%` }}
              />
            </div>
            
            <div 
              className="absolute top-24 z-30 transition-all duration-500 ease-out"
              style={{ 
                left: `calc(15vw + ${scrollProgress * bikeDistance}px)`,
                transform: `translate(-50%, -50%) ${isFacingLeft ? 'scaleX(-1)' : 'scaleX(1)'}`
              }}
            >
              <div className="relative group">
                <div className="absolute -inset-4 bg-primary/20 rounded-full blur-xl group-hover:bg-primary/40 transition-all" />
                <div className="relative bg-primary p-3 rounded-full shadow-[0_0_20px_rgba(var(--primary),0.5)] border-4 border-background">
                  <Bike className="w-6 h-6 text-white animate-bounce" />
                </div>
              </div>
            </div>
            
            {JOURNEY.map((item, i) => {
              const isActive = activeIndex === i;
              
              return (
                <div key={i} className="flex-shrink-0 w-[350px] relative pt-12 group">
                  <div className={cn(
                    "absolute top-0 left-0 w-4 h-4 rounded-full -translate-y-1/2 z-20 transition-all duration-500 border-4 border-background",
                    item.color,
                    isActive ? "scale-110 opacity-100" : "scale-75 opacity-30"
                  )} />
                  
                  <div className={cn(
                    "glass p-8 rounded-3xl border-white/5 transition-all duration-700 h-full flex flex-col",
                    isActive 
                      ? "border-primary/40 opacity-100 blur-0 scale-105 shadow-2xl" 
                      : "opacity-40 blur-[8px] scale-95 pointer-events-none"
                  )}>
                    <div className="flex items-center gap-2 mb-4">
                      <Calendar className={cn("w-4 h-4", isActive ? "text-primary" : "text-muted-foreground")} />
                      <span className={cn(
                        "text-[10px] font-bold uppercase tracking-widest",
                        isActive ? "text-primary" : "text-muted-foreground"
                      )}>{item.period}</span>
                    </div>
                    
                    <h3 className="text-xl font-bold mb-2 text-white">{item.title}</h3>
                    <div className="flex items-center gap-2 mb-4 text-sm font-semibold text-white/90">
                      <Briefcase className="w-4 h-4 text-accent" />
                      {item.company}
                    </div>
                    
                    <p className="text-sm text-muted-foreground leading-relaxed mb-8 flex-grow">
                      {item.description}
                    </p>
                    
                    <div className="flex items-center gap-2 text-[10px] text-muted-foreground font-bold uppercase tracking-tighter">
                      <MapPin className="w-3 h-3 text-accent" />
                      {item.location}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
        
        <div className="container px-6 mt-16 flex flex-col items-center gap-4">
          <div className="flex gap-4 mb-2">
            {JOURNEY.map((_, i) => (
              <div 
                key={i} 
                className={cn(
                  "w-2 h-2 rounded-full transition-all duration-300",
                  activeIndex === i ? "bg-primary scale-150" : "bg-white/10"
                )}
              />
            ))}
          </div>
          <div className="w-64 h-1 bg-white/5 rounded-full overflow-hidden">
            <div 
              className="h-full bg-primary transition-all duration-150 ease-out"
              style={{ width: `${scrollProgress * 100}%` }}
            />
          </div>
        </div>
      </div>
    </section>
  );
};
