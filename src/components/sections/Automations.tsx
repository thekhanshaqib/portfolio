'use client';

import React from 'react';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Workflow, Zap, Globe, Search, ExternalLink, ArrowRight } from 'lucide-react';

const AUTOMATIONS = [
  {
    title: 'Weekly Market & AI Intelligence Report',
    description: '0-1 automation that synthesizes global market trends and AI breakthroughs into actionable weekly executive summaries.',
    tool: 'n8n',
    link: 'https://www.notion.so/shaqib/Market-AI-Intelligence-Automation-from-0-1-2743669c4a7880bea8faff96455ab62c',
    icon: <Globe className="w-6 h-6 text-primary" />,
    features: ['Multi-source Data Scraping', 'LLM-powered Synthesis', 'Automated Email/Notion Delivery']
  },
  {
    title: 'Competitor Analysis Weekly Report',
    description: 'Automated tracking and sentiment analysis of market competitor moves to maintain strategic advantage and fast-track decision-making.',
    tool: 'n8n',
    link: '#',
    icon: <Search className="w-6 h-6 text-accent" />,
    features: ['Sentiment Analysis', 'Real-time Alerts', 'Competitor Roadmap Tracking']
  }
];

export const Automations = () => {
  return (
    <section id="automations" className="py-24 bg-background relative overflow-hidden">
      <div className="absolute top-0 right-0 w-1/3 h-1/3 bg-primary/5 blur-[120px] rounded-full pointer-events-none" />
      
      <div className="container px-6 relative z-10">
        <div className="text-center mb-16">
          <Badge className="mb-4 bg-primary/20 text-primary border-primary/20 px-4 py-1">THE FORGE</Badge>
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Strategic <span className="text-primary italic">Automations.</span></h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            I orchestrate complex, webhook-driven workflows using n8n to eliminate manual overhead and generate high-value market insights.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {AUTOMATIONS.map((item, i) => (
            <Card key={i} className="glass p-8 border-white/5 hover:border-primary/30 transition-all group relative overflow-hidden">
              <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
                <Workflow className="w-24 h-24" />
              </div>
              
              <div className="relative z-10">
                <div className="w-12 h-12 rounded-xl bg-white/5 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  {item.icon}
                </div>
                
                <div className="flex items-center gap-2 mb-4">
                  <Badge variant="outline" className="text-[10px] font-bold tracking-widest uppercase border-primary/40 text-primary">
                    {item.tool}
                  </Badge>
                  <span className="text-[10px] text-muted-foreground uppercase font-semibold">0-1 Orchestration</span>
                </div>

                <h3 className="text-2xl font-bold mb-4 text-white group-hover:text-primary transition-colors">
                  {item.title}
                </h3>
                
                <p className="text-muted-foreground mb-8 leading-relaxed">
                  {item.description}
                </p>

                <div className="space-y-3 mb-8">
                  {item.features.map((feature, idx) => (
                    <div key={idx} className="flex items-center gap-2 text-sm text-white/70">
                      <Zap className="w-3 h-3 text-accent" />
                      {feature}
                    </div>
                  ))}
                </div>

                <div className="flex gap-4">
                  {item.link !== '#' ? (
                    <a href={item.link} target="_blank" rel="noopener noreferrer" className="w-full">
                      <Button className="w-full bg-primary hover:bg-primary/90 rounded-xl flex gap-2">
                        View Workflow <ExternalLink className="w-4 h-4" />
                      </Button>
                    </a>
                  ) : (
                    <Button variant="outline" className="w-full border-white/10 hover:bg-white/5 rounded-xl flex gap-2 disabled:opacity-50" disabled>
                      Coming Soon
                    </Button>
                  )}
                </div>
              </div>
            </Card>
          ))}
        </div>

        <div className="mt-16 glass p-8 rounded-3xl border-accent/20 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-full bg-accent/20 flex items-center justify-center">
              <Workflow className="w-6 h-6 text-accent" />
            </div>
            <div>
              <h4 className="font-bold text-lg">Scalable Operations</h4>
              <p className="text-sm text-muted-foreground">Integrating custom webhooks, APIs, and OCR into seamless pipelines.</p>
            </div>
          </div>
          <a href="mailto:shaqibiqbal.1212@gmail.com">
            <Button variant="ghost" className="text-accent hover:text-accent/80 flex gap-2 group">
              Discuss a Workflow <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Button>
          </a>
        </div>
      </div>
    </section>
  );
};