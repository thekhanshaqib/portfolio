'use client';

import React, { useCallback, useState } from 'react';
import * as THREE from 'three';
import { ThreeCanvas } from '@/components/canvas/ThreeCanvas';
import { Badge } from '@/components/ui/badge';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription, DialogTrigger } from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { Activity, Layers, Users, Box, BarChart3, ClipboardList } from 'lucide-react';

const PROJECTS = [
  {
    title: 'AI-Powered Automation Platform',
    category: 'SaaS / Enterprise',
    company: 'MegaPower LLC',
    description: 'Led 0-1 AI automation using OpenAI & Gemini APIs for MENA region.',
    impact: '20% Efficiency Gain',
    longDesc: 'Developed a comprehensive AI chatbot and automation platform to enable scalable digital operations. Integrated webhook-driven workflows using n8n and Make, reducing manual reporting overhead significantly.',
    tech: ['OpenAI API', 'Gemini API', 'n8n', 'Make', 'SQL', 'Power BI'],
    metrics: ['20% increase in operational efficiency', '60% faster decision-making via dashboards', 'Automated reporting for cross-functional teams']
  },
  {
    title: 'B2B Inventory & Procurement',
    category: 'Enterprise B2B',
    company: 'MAVS',
    description: 'Owned roadmap for 2 enterprise platforms, contributing to 11.67M AED billings.',
    impact: '11.67M AED Billings',
    longDesc: 'Spearheaded the product strategy for two mission-critical B2B inventory and procurement platforms. Focused on real-time inventory analytics and workflow automation for warehouse operations.',
    tech: ['Power BI', 'Real-time Analytics', 'Agile', 'PRD/BRD', 'Inventory Logic'],
    metrics: ['11.67M AED in quoted billings (2025)', '40% improvement in stock tracking speed', 'Saved 8–10 hours weekly via dashboards', '13% YoY sales growth contribution']
  },
  {
    title: 'B2C E-commerce Scaling',
    category: 'E-commerce',
    company: 'Centeuno Technologies',
    description: 'Scaled a B2C platform to 1M AED revenue in its first year.',
    impact: '1M AED Revenue',
    longDesc: 'As Co-founder, led the delivery of 13+ cross-domain products. Focused on customer engagement and retention strategies that drove high repeat purchase rates for a major e-commerce initiative.',
    tech: ['React', 'Node.js', 'CRM (HubSpot)', 'Agile', 'Market Research'],
    metrics: ['1M AED revenue in year one', '100K+ user engagement', '40% customer retention rate', '30% repeat purchase rate']
  },
  {
    title: 'AI Contact Management App',
    category: 'Product Dev',
    company: 'BizDro',
    description: 'Owned 0-1 development of an AI contact management mobile app.',
    impact: '20% Churn Reduction',
    longDesc: 'Owned the product lifecycle from concept to MVP in just 2 weeks. Leveraged OCR and LLM workflows to automate contact entry and management for freelance users.',
    tech: ['LLM Workflows', 'OCR', 'Figma', 'Postman', 'UX/UI Design'],
    metrics: ['MVP delivered in 2 weeks', '20% reduction in churn', '25% faster market insight generation', 'Iterative UX via 100+ user interviews']
  }
];

export const CaseStudies = () => {
  const [activeProject, setActiveProject] = useState(0);

  const initCubeScene = useCallback((scene: THREE.Scene, camera: THREE.PerspectiveCamera, renderer: THREE.WebGLRenderer) => {
    camera.position.z = 3.5;

    const geometry = new THREE.BoxGeometry(1, 1, 1);
    const material = new THREE.MeshStandardMaterial({ 
      color: 0x5989f0, 
      metalness: 0.7, 
      roughness: 0.2,
      wireframe: true 
    });
    
    const cubes: THREE.Mesh[] = [];
    PROJECTS.forEach((_, i) => {
      const cube = new THREE.Mesh(geometry, material.clone());
      // Adjust positioning for 4 cubes
      cube.position.x = (i - 1.5) * 1.8;
      cubes.push(cube);
      scene.add(cube);
    });

    const light = new THREE.PointLight(0xc48ffc, 10, 10);
    light.position.set(0, 0, 2);
    scene.add(light);

    const ambient = new THREE.AmbientLight(0xffffff, 0.5);
    scene.add(ambient);

    let frameId: number;
    const animate = () => {
      frameId = requestAnimationFrame(animate);
      cubes.forEach((cube, i) => {
        cube.rotation.x += 0.01;
        cube.rotation.y += 0.01;
        const scale = activeProject === i ? 1.2 : 0.7;
        cube.scale.lerp(new THREE.Vector3(scale, scale, scale), 0.1);
        const targetColor = activeProject === i ? new THREE.Color(0xc48ffc) : new THREE.Color(0x5989f0);
        (cube.material as THREE.MeshStandardMaterial).color.lerp(targetColor, 0.05);
      });
      renderer.render(scene, camera);
    };

    animate();
    return () => cancelAnimationFrame(frameId);
  }, [activeProject]);

  return (
    <section className="py-24 bg-background relative overflow-hidden">
      <div className="container px-6">
        <div className="flex flex-col md:flex-row items-end justify-between mb-16 gap-4">
          <div className="max-w-xl">
            <h2 className="text-4xl font-bold mb-4 tracking-tight">Proven <span className="text-primary">Experience.</span> Real <span className="text-primary">Results.</span></h2>
            <p className="text-muted-foreground text-lg leading-relaxed">
              Selection of high-impact products where I led technical strategy and execution to drive measurable growth across diverse industries.
            </p>
          </div>
          <div className="flex gap-2 mb-2">
            {PROJECTS.map((_, i) => (
              <button 
                key={i} 
                onClick={() => setActiveProject(i)}
                className={`w-3 h-3 rounded-full transition-all ${activeProject === i ? 'bg-primary w-8' : 'bg-white/20'}`}
              />
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="h-[400px] glass rounded-3xl relative">
            <ThreeCanvas init={initCubeScene} className="absolute inset-0" />
            <div className="absolute bottom-6 left-6 right-6 flex flex-wrap justify-center gap-2">
               {PROJECTS.map((p, i) => (
                 <Badge key={i} variant={activeProject === i ? 'default' : 'outline'} className="cursor-pointer text-[10px]" onClick={() => setActiveProject(i)}>
                    {p.company}
                 </Badge>
               ))}
            </div>
          </div>

          <div className="space-y-6">
            <div className="glass p-8 rounded-3xl border-primary/20 neon-glow-blue transition-all duration-500">
              <div className="flex items-center gap-3 mb-4">
                <Badge className="bg-primary/20 text-primary border-primary/20 uppercase tracking-widest text-[10px] py-1 px-3">
                  {PROJECTS[activeProject].category}
                </Badge>
                <span className="text-xs text-muted-foreground font-semibold uppercase">{PROJECTS[activeProject].company}</span>
              </div>
              <h3 className="text-3xl font-bold mb-4 text-white">{PROJECTS[activeProject].title}</h3>
              <p className="text-muted-foreground text-lg mb-8 leading-relaxed">
                {PROJECTS[activeProject].description}
              </p>
              
              <div className="grid grid-cols-2 gap-4 mb-8">
                {PROJECTS[activeProject].metrics.slice(0, 2).map((m, i) => (
                  <div key={i} className="bg-white/5 p-4 rounded-xl border border-white/10">
                    <Activity className="w-5 h-5 text-accent mb-2" />
                    <p className="text-sm text-white/90 font-medium">{m}</p>
                  </div>
                ))}
              </div>

              <Dialog>
                <DialogTrigger asChild>
                  <Button className="w-full h-12 rounded-xl bg-primary hover:bg-primary/90">Deep Dive Details</Button>
                </DialogTrigger>
                <DialogContent className="glass sm:max-w-[700px] border-white/10 max-h-[90vh] overflow-y-auto">
                  <DialogHeader>
                    <div className="flex items-center gap-2 mb-2">
                      <Badge variant="outline">{PROJECTS[activeProject].category}</Badge>
                      <span className="text-sm text-muted-foreground">{PROJECTS[activeProject].company}</span>
                    </div>
                    <DialogTitle className="text-3xl font-bold">{PROJECTS[activeProject].title}</DialogTitle>
                    <DialogDescription className="text-lg pt-4">
                      {PROJECTS[activeProject].longDesc}
                    </DialogDescription>
                  </DialogHeader>
                  <div className="grid gap-6 py-4">
                    <div className="space-y-4">
                      <h4 className="font-semibold text-lg flex items-center gap-2">
                        <Layers className="w-5 h-5 text-primary" /> Core Tech Stack
                      </h4>
                      <div className="flex flex-wrap gap-2">
                        {PROJECTS[activeProject].tech.map(t => (
                          <Badge key={t} variant="secondary" className="bg-white/5">{t}</Badge>
                        ))}
                      </div>
                    </div>
                    <div className="space-y-4">
                      <h4 className="font-semibold text-lg flex items-center gap-2">
                        <Activity className="w-5 h-5 text-accent" /> Achievement Highlights
                      </h4>
                      <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                        {PROJECTS[activeProject].metrics.map(m => (
                          <li key={m}>{m}</li>
                        ))}
                      </ul>
                    </div>
                    <div className="space-y-4">
                      <h4 className="font-semibold text-lg flex items-center gap-2">
                        <Users className="w-5 h-5 text-primary" /> Strategic Leadership
                      </h4>
                      <p className="text-muted-foreground">
                        Led cross-functional teams and aligned product roadmaps with enterprise-wide digital transformation goals. Provided structured PRDs/BRDs and managed agile sprints.
                      </p>
                    </div>
                  </div>
                </DialogContent>
              </Dialog>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};