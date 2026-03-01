
'use client';

import React from 'react';
import { Card } from '@/components/ui/card';
import { Network, Users, BarChart3, Rocket, Handshake } from 'lucide-react';

export const Leadership = () => {
  return (
    <section className="py-24 bg-background relative overflow-hidden">
      <div className="container px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <div className="inline-flex items-center gap-2 mb-6 text-primary">
              <Network className="w-6 h-6" />
              <span className="font-bold tracking-widest text-xs uppercase">Strategic Execution</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
              Leading <span className="text-primary italic">Scale</span> Without <br />Sacrificing <span className="text-accent italic">Speed.</span>
            </h2>
            <p className="text-muted-foreground text-lg mb-10 leading-relaxed">
              Managing complexity at scale requires more than just process—it requires alignment. I've led cross-functional organizations of 30-40+ people across engineering, design, and product to deliver mission-critical systems.
            </p>

            <div className="space-y-6">
              {[
                { title: 'Cross-Functional Mastery', desc: 'Alignment across Eng, Design, Analytics, and Legal.', icon: <Users className="w-5 h-5" /> },
                { title: 'Strategic Roadmapping', desc: 'Turning ambiguous goals into actionable quarterly OKRs.', icon: <BarChart3 className="w-5 h-5" /> },
                { title: 'Stakeholder Influence', desc: 'Direct partnership with C-suite to drive product vision.', icon: <Handshake className="w-5 h-5" /> },
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
                  <div className="text-5xl font-bold text-white">40+</div>
                  <div className="text-xs uppercase tracking-tighter text-muted-foreground">Team Members Led</div>
                </div>
                <div className="space-y-2">
                  <div className="text-5xl font-bold text-primary">$10M+</div>
                  <div className="text-xs uppercase tracking-tighter text-muted-foreground">P&L Responsibility</div>
                </div>
                <div className="space-y-2">
                  <div className="text-5xl font-bold text-accent">5+</div>
                  <div className="text-xs uppercase tracking-tighter text-muted-foreground">Years in Product</div>
                </div>
                <div className="space-y-2">
                  <div className="text-5xl font-bold text-white">100%</div>
                  <div className="text-xs uppercase tracking-tighter text-muted-foreground">Impact Focused</div>
                </div>
              </div>
              
              <div className="mt-12 w-full pt-12 border-t border-white/5">
                <div className="flex items-center justify-between px-4">
                   <div className="flex flex-col items-center gap-1">
                      <div className="w-12 h-12 rounded-full glass flex items-center justify-center">
                         <Rocket className="w-6 h-6 text-primary" />
                      </div>
                      <span className="text-[10px] font-bold text-muted-foreground uppercase">Ideation</span>
                   </div>
                   <div className="flex-1 h-px bg-gradient-to-r from-primary to-accent mx-2" />
                   <div className="flex flex-col items-center gap-1">
                      <div className="w-12 h-12 rounded-full glass border-primary/40 flex items-center justify-center">
                         <div className="w-2 h-2 rounded-full bg-primary animate-ping" />
                      </div>
                      <span className="text-[10px] font-bold text-white uppercase">Execution</span>
                   </div>
                   <div className="flex-1 h-px bg-gradient-to-r from-accent to-primary mx-2 opacity-50" />
                   <div className="flex flex-col items-center gap-1">
                      <div className="w-12 h-12 rounded-full glass flex items-center justify-center opacity-50">
                         <BarChart3 className="w-6 h-6 text-accent" />
                      </div>
                      <span className="text-[10px] font-bold text-muted-foreground uppercase">Success</span>
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
