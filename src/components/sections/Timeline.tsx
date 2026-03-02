'use client';

import React, { useRef, useEffect, useState } from 'react';
import { Badge } from '@/components/ui/badge';
import { Briefcase, Calendar, MapPin } from 'lucide-react';

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
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      if (!containerRef.current) return;
      const rect = containerRef.current.getBoundingClientRect();
      const scrollY = -rect.top;
      const totalHeight = containerRef.current.offsetHeight - window.innerHeight;
      
      // Calculate progress (0 to 1) within the timeline section
      const progress = Math.min(Math.max(scrollY / totalHeight, 0), 1);
      setScrollProgress(progress);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Determine the translation based on progress and total width of cards
  // Each card is ~400px wide (w-[350px] + gap-12). Total width is ~1600px + padding.
  const translateX = scrollProgress * (JOURNEY.length * 400 - (typeof window !== 'undefined' ? window.innerWidth * 0.6 : 0));

  return (
    <section id="timeline" ref={containerRef} className="relative h-[300vh] bg-background">
      <div className="sticky top-0 h-screen flex flex-col justify-center overflow-hidden">
        <div className="container px-6 mb-12 relative z-20">
          <div className="text-center">
            <Badge className="mb-4 bg-primary/20 text-primary border-primary/20 px-4 py-1 uppercase tracking-widest text-[10px]">THE JOURNEY</Badge>
            <h2 className="text-4xl md:text-5xl font-bold">Career <span className="text-primary italic">Timeline.</span></h2>
            <p className="text-muted-foreground mt-4 max-w-xl mx-auto text-sm">Scroll down to see the evolution of my professional career.</p>
          </div>
        </div>

        <div className="relative w-full">
          <div 
            className="flex gap-12 px-[10vw] transition-transform duration-100 ease-out py-12"
            style={{ transform: `translateX(-${translateX}px)` }}
          >
            {/* Timeline Line */}
            <div className="absolute top-1/2 left-0 w-[200%] h-px bg-white/5 -z-10" />
            
            {JOURNEY.map((item, i) => (
              <div key={i} className="flex-shrink-0 w-[350px] relative pt-12 group">
                {/* Marker */}
                <div className={`absolute top-0 left-0 w-5 h-5 rounded-full ${item.color} -translate-y-1/2 ring-8 ring-background z-20 transition-transform group-hover:scale-125 duration-300`} />
                
                <div className="glass p-8 rounded-3xl border-white/5 hover:border-primary/30 transition-all duration-500 h-full flex flex-col">
                  <div className="flex items-center gap-2 mb-4">
                    <Calendar className="w-4 h-4 text-primary" />
                    <span className="text-[10px] font-bold text-primary uppercase tracking-widest">{item.period}</span>
                  </div>
                  
                  <h3 className="text-xl font-bold mb-2 group-hover:text-primary transition-colors">{item.title}</h3>
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
            ))}
          </div>
        </div>
        
        {/* Progress bar at bottom */}
        <div className="container px-6 mt-16 flex justify-center">
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
