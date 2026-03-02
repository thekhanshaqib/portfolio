'use client';

import React from 'react';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { 
  Rocket, 
  Database, 
  Layout, 
  Terminal, 
  BarChart, 
  Users, 
  Search, 
  ClipboardCheck,
  Zap,
  Brain
} from 'lucide-react';

const SKILL_CATEGORIES = [
  {
    title: 'Product Management',
    icon: <Rocket className="w-5 h-5 text-primary" />,
    skills: [
      'Product Strategy & Roadmap',
      'Feature Prioritization',
      'Stakeholder Management',
      'PRD/BRD Documentation',
      'Agile / Scrum Mastery',
      'GTM Strategy'
    ]
  },
  {
    title: 'Technical & AI',
    icon: <Brain className="w-5 h-5 text-accent" />,
    skills: [
      'LLM Workflows (OpenAI/Gemini)',
      'n8n & Make Automations',
      'Webhook Integrations',
      'SQL & Database Design',
      'OCR Implementations',
      'API Design (Postman)'
    ]
  },
  {
    title: 'Data & Analytics',
    icon: <BarChart className="w-5 h-5 text-primary" />,
    skills: [
      'Power BI Dashboards',
      'Data-Driven Decision Making',
      'Market & Competitor Research',
      'A/B Testing',
      'Conversion Rate Optimization',
      'Customer Retention Metrics'
    ]
  },
  {
    title: 'Design & Leadership',
    icon: <Users className="w-5 h-5 text-accent" />,
    skills: [
      'UX/UI Optimization (Figma)',
      'Cross-Functional Leadership',
      '0-1 Product Development',
      'Entrepreneurial Mindset',
      'Customer Research & UAT',
      'Mentorship'
    ]
  }
];

export const Skills = () => {
  return (
    <section id="skills" className="py-24 bg-[#16191E] relative overflow-hidden">
      <div className="container px-6 relative z-10">
        <div className="text-center mb-16">
          <Badge className="mb-4 bg-primary/20 text-primary border-primary/20 px-4 py-1 uppercase tracking-widest text-[10px]">CORE SKILLSET</Badge>
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Strategic <span className="text-primary italic">Expertise.</span></h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            A specialized toolkit at the intersection of product vision, technical execution, and data-driven growth.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {SKILL_CATEGORIES.map((category, idx) => (
            <Card key={idx} className="glass p-8 border-white/5 hover:border-primary/30 transition-all duration-300 group">
              <div className="w-12 h-12 rounded-xl bg-white/5 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                {category.icon}
              </div>
              <h3 className="text-xl font-bold mb-6 text-white">{category.title}</h3>
              <ul className="space-y-3">
                {category.skills.map((skill, sIdx) => (
                  <li key={sIdx} className="flex items-center gap-3 text-sm text-muted-foreground group-hover:text-white/80 transition-colors">
                    <div className="w-1.5 h-1.5 rounded-full bg-accent/40" />
                    {skill}
                  </li>
                ))}
              </ul>
            </Card>
          ))}
        </div>

        <div className="mt-16 flex flex-wrap justify-center gap-3">
          {['Jira', 'Linear', 'Confluence', 'Figma', 'Postman', 'Notion', 'Slack', 'GitHub'].map((tool) => (
            <span key={tool} className="px-4 py-2 bg-white/5 border border-white/10 rounded-full text-xs text-muted-foreground hover:bg-white/10 transition-colors cursor-default">
              {tool}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
};
