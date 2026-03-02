'use client';

import React from 'react';
import { Card } from '@/components/ui/card';
import { Network, Users, BarChart3, Rocket, Handshake, CheckCircle2 } from 'lucide-react';

export const Leadership = () => {
  return (
    <section className="py-24 bg-background relative overflow-hidden">
      <div className="container px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <div className="inline-flex items-center gap-2 mb-6 text-primary">
              <Network className="w-6 h-6" />
              <span className="font-bold tracking-widest text-xs uppercase">Core Competencies</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
              Leading <span className="text-primary italic">0-1 Products</span> <br />With <span className="text-accent italic">Technical Depth.</span>
            </h2>
            <p className="text-muted-foreground text-lg mb-10 leading-relaxed">
              I operate at the intersection of strategy, execution, and scale. My strength lies in transforming ambiguity into structured product roadmaps and combining technical acumen with business focus.
            </p>

            <div className="space-y-6">
              {[
                { title: 'Cross-Functional Leadership', desc: 'Led 6+ cross-functional teams to drive adoption.', icon: <Users className="w-5 h-5" /> },
                { title: 'Agile & Lifecycle Mastery', desc: 'Managed full project lifecycles and backlog grooming.', icon: <BarChart3 className="w-5 h-5" /> },
                { title: 'Technical Strategy', desc: 'Deep expertise in LLM workflows, SQL, and Webhooks.', icon: <CheckCircle2 className="w-5 h-5" /> },
              ].map((item, i) => (
                <div key={i} className="flex gap-4">
                  <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center shrink-0">
                    <div className="text-primary">{item.icon}</div>
                  </div>
                  <div>
                    <h4 className="font-bold text-white">{item.title}</h4>
                    <p className="text-sm text-muted-foreground">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="relative">
            <div className="absolute -inset-1 bg-gradient-to-r from-primary to-accent rounded-3xl blur opacity-20" />
            <Card className="glass p-10 border-white/5 relative flex flex-col items-center text-center">
              <div className="grid grid-cols-2 gap-8 w-full">
                <div className="space-y-2">
                  <div className="text-5xl font-bold text-white">13+</div>
                  <div className="text-xs uppercase tracking-tighter text-muted-foreground">Digital Products Delivered</div>
                </div>
                <div className="space-y-2">
                  <div className="text-5xl font-bold text-primary">1M+</div>
                  <div className="text-xs uppercase tracking-tighter text-muted-foreground">AED Revenue Growth</div>
                </div>
                <div className="space-y-2">
                  <div className="text-5xl font-bold text-accent">4+</div>
                  <div className="text-xs uppercase tracking-tighter text-muted-foreground">Years Experience</div>
                </div>
                <div className="space-y-2">
                  <div className="text-4xl font-bold text-white">11.67M</div>
                  <div className="text-xs uppercase tracking-tighter text-muted-foreground">AED Quoted Billing</div>
                </div>
              </div>
              
              <div className="mt-12 w-full pt-12 border-t border-white/5">
                <div className="flex items-center justify-between px-4">
                   <div className="flex flex-col items-center gap-1">
                      <div className="w-12 h-12 rounded-full glass flex items-center justify-center">
                         <Rocket className="w-6 h-6 text-primary" />
                      </div>
                      <span className="text-[10px] font-bold text-muted-foreground uppercase">Vision</span>
                   </div>
                   <div className="flex-1 h-px bg-gradient-to-r from-primary to-accent mx-2" />
                   <div className="flex flex-col items-center gap-1">
                      <div className="w-12 h-12 rounded-full glass border-primary/40 flex items-center justify-center">
                         <div className="w-2 h-2 rounded-full bg-primary animate-ping" />
                      </div>
                      <span className="text-[10px] font-bold text-white uppercase">Roadmap</span>
                   </div>
                   <div className="flex-1 h-px bg-gradient-to-r from-accent to-primary mx-2 opacity-50" />
                   <div className="flex flex-col items-center gap-1">
                      <div className="w-12 h-12 rounded-full glass flex items-center justify-center opacity-50">
                         <BarChart3 className="w-6 h-6 text-accent" />
                      </div>
                      <span className="text-[10px] font-bold text-muted-foreground uppercase">Metrics</span>
                   </div>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};
