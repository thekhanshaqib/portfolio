
'use client';

import React, { useCallback, useState } from 'react';
import * as THREE from 'three';
import { ThreeCanvas } from '@/components/canvas/ThreeCanvas';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription, DialogTrigger } from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { Activity, Layers, Users, Zap } from 'lucide-react';

const PROJECTS = [
  {
    title: 'AI Workflow Automation Platform',
    category: 'AI Systems',
    description: 'Reduced manual effort by 70% using LLM orchestration.',
    impact: '70% efficiency gain',
    longDesc: 'Built a multi-agent orchestration layer that handles complex data entry and validation tasks. Leveraged Gemini and vector databases to create a self-healing automation pipeline.',
    tech: ['Python', 'LangChain', 'Next.js', 'PostgreSQL'],
    metrics: ['Reduced manual processing time from 4h to 12min', '99.2% accuracy in data extraction', 'Scaled to 10k+ daily events']
  },
  {
    title: 'Marketplace Optimization',
    category: 'Growth',
    description: 'Improved retention by 25% through behavioral AI.',
    impact: '25% Retention Boost',
    longDesc: 'Implemented a dynamic pricing and recommendation engine for a two-sided marketplace. Used ML models to predict churn and trigger automated re-engagement flows.',
    tech: ['React', 'Node.js', 'TensorFlow.js', 'Redis'],
    metrics: ['25% increase in user LTV', '15% reduction in CAC', 'Improved match rate by 40%']
  },
  {
    title: 'Logistics / Last-mile System',
    category: 'Operations',
    description: 'Optimized routing for 300+ vehicles in real-time.',
    impact: '15% Fuel Savings',
    longDesc: 'Redesigned the core dispatching algorithm to account for real-time traffic, weather, and driver performance. Integrated IoT sensor data for predictive maintenance.',
    tech: ['Go', 'Kafka', 'Google Maps API', 'AWS'],
    metrics: ['15% reduction in fuel costs', '20% improvement in delivery OTD', 'Automated dispatching for 95% of orders']
  }
];

export const CaseStudies = () => {
  const [activeProject, setActiveProject] = useState(0);

  const initCubeScene = useCallback((scene: THREE.Scene, camera: THREE.PerspectiveCamera, renderer: THREE.WebGLRenderer) => {
    camera.position.z = 3;

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
      cube.position.x = (i - 1) * 2;
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
        
        // Pulse effect for active
        const scale = activeProject === i ? 1.2 : 0.8;
        cube.scale.lerp(new THREE.Vector3(scale, scale, scale), 0.1);
        
        // Color transition
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
            <h2 className="text-4xl font-bold mb-4 tracking-tight">Proven Impact. <span className="text-primary">Measurable Results.</span></h2>
            <p className="text-muted-foreground text-lg leading-relaxed">
              Selection of high-impact projects where I led cross-functional teams to deliver significant business value through technical innovation.
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
            <div className="absolute bottom-6 left-6 right-6 flex justify-center gap-4">
               {PROJECTS.map((p, i) => (
                 <Badge key={i} variant={activeProject === i ? 'default' : 'outline'} className="cursor-pointer" onClick={() => setActiveProject(i)}>
                    {p.category}
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
              </div>
              <h3 className="text-3xl font-bold mb-4 text-white">{PROJECTS[activeProject].title}</h3>
              <p className="text-muted-foreground text-lg mb-8 leading-relaxed">
                {PROJECTS[activeProject].longDesc}
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
                  <Button className="w-full h-12 rounded-xl bg-primary hover:bg-primary/90">Deep Dive Case Study</Button>
                </DialogTrigger>
                <DialogContent className="glass sm:max-w-[700px] border-white/10">
                  <DialogHeader>
                    <div className="flex items-center gap-2 mb-2">
                      <Badge variant="outline">{PROJECTS[activeProject].category}</Badge>
                    </div>
                    <DialogTitle className="text-3xl font-bold">{PROJECTS[activeProject].title}</DialogTitle>
                    <DialogDescription className="text-lg pt-4">
                      {PROJECTS[activeProject].longDesc}
                    </DialogDescription>
                  </DialogHeader>
                  <div className="grid gap-6 py-4">
                    <div className="space-y-4">
                      <h4 className="font-semibold text-lg flex items-center gap-2">
                        <Layers className="w-5 h-5 text-primary" /> Technical Architecture
                      </h4>
                      <div className="flex flex-wrap gap-2">
                        {PROJECTS[activeProject].tech.map(t => (
                          <Badge key={t} variant="secondary" className="bg-white/5">{t}</Badge>
                        ))}
                      </div>
                    </div>
                    <div className="space-y-4">
                      <h4 className="font-semibold text-lg flex items-center gap-2">
                        <Activity className="w-5 h-5 text-accent" /> Key Metrics
                      </h4>
                      <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                        {PROJECTS[activeProject].metrics.map(m => (
                          <li key={m}>{m}</li>
                        ))}
                      </ul>
                    </div>
                    <div className="space-y-4">
                      <h4 className="font-semibold text-lg flex items-center gap-2">
                        <Users className="w-5 h-5 text-primary" /> Team Leadership
                      </h4>
                      <p className="text-muted-foreground">
                        Led a cross-functional squad of 12 (Eng, Design, QA, Analytics) through 4 sprints of discovery and 8 sprints of implementation.
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
