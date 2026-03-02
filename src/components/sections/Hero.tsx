
'use client';

import React, { useCallback } from 'react';
import * as THREE from 'three';
import { ThreeCanvas } from '@/components/canvas/ThreeCanvas';
import { Button } from '@/components/ui/button';
import { ArrowRight, Cpu, Target, Zap, TrendingUp, BarChart3 } from 'lucide-react';

export const Hero = () => {
  const initHeroScene = useCallback((scene: THREE.Scene, camera: THREE.PerspectiveCamera, renderer: THREE.WebGLRenderer) => {
    camera.position.z = 5;

    const ambientLight = new THREE.AmbientLight(0xffffff, 0.5);
    scene.add(ambientLight);
    const pointLight = new THREE.PointLight(0x5989f0, 2);
    pointLight.position.set(2, 3, 4);
    scene.add(pointLight);

    const geometry = new THREE.SphereGeometry(0.1, 16, 16);
    const material = new THREE.MeshStandardMaterial({ color: 0x5989f0, emissive: 0x5989f0, emissiveIntensity: 2 });
    
    const nodes: THREE.Mesh[] = [];
    for (let i = 0; i < 4; i++) {
      const node = new THREE.Mesh(geometry, material);
      const angle = (i / 4) * Math.PI * 2;
      node.position.set(Math.cos(angle) * 2, Math.sin(angle) * 2, 0);
      nodes.push(node);
      scene.add(node);
    }

    const lineMaterial = new THREE.LineBasicMaterial({ color: 0x5989f0, transparent: true, opacity: 0.3 });
    const lineGeometries = nodes.map((node, i) => {
      const nextNode = nodes[(i + 1) % nodes.length];
      const geo = new THREE.BufferGeometry().setFromPoints([node.position, nextNode.position]);
      const line = new THREE.Line(geo, lineMaterial);
      scene.add(line);
      return line;
    });

    let frameId: number;
    const animate = () => {
      frameId = requestAnimationFrame(animate);
      
      const time = Date.now() * 0.001;
      nodes.forEach((node, i) => {
        node.position.y += Math.sin(time + i) * 0.005;
        node.position.x += Math.cos(time + i) * 0.005;
      });

      lineGeometries.forEach((line, i) => {
        const node = nodes[i];
        const nextNode = nodes[(i + 1) % nodes.length];
        line.geometry.setFromPoints([node.position, nextNode.position]);
      });

      scene.rotation.y += 0.002;
      renderer.render(scene, camera);
    };

    animate();
    return () => cancelAnimationFrame(frameId);
  }, []);

  return (
    <section className="relative min-h-screen w-full flex flex-col items-center justify-center pt-32 pb-20 overflow-hidden">
      <ThreeCanvas init={initHeroScene} className="absolute inset-0 z-0 pointer-events-none" />
      
      <div className="container relative z-10 px-6 text-center">
        <div className="inline-flex items-center gap-2 px-4 py-2 mb-8 rounded-full glass text-sm font-bold text-white border border-white/10 shadow-lg">
          <span className="w-2.5 h-2.5 rounded-full bg-primary animate-pulse shadow-[0_0_10px_rgba(var(--primary),0.5)]" />
          Shaqib Iqbal | Technical Product Manager
        </div>
        
        <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight mb-8 bg-clip-text text-transparent bg-gradient-to-b from-white to-white/50">
          Turning <span className="text-primary italic">Ambiguity</span> Into <br />Structured <span className="text-accent italic">Impact.</span>
        </h1>
        
        <p className="max-w-2xl mx-auto text-lg md:text-xl text-muted-foreground mb-12 leading-relaxed">
          4+ years building 0-1 products across B2C, B2B, and SaaS ecosystems. 
          Bridging technical depth with business acumen to ship scalable solutions.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
          <a href="#case-studies">
            <Button size="lg" className="rounded-full px-10 h-14 text-lg group bg-primary hover:bg-primary/90 transition-all shadow-xl hover:shadow-primary/20">
              View Experience <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Button>
          </a>
          <a href="#ai-lab">
            <Button size="lg" variant="outline" className="rounded-full px-10 h-14 text-lg glass hover:bg-white/10 transition-all">
              Explore AI Lab
            </Button>
          </a>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-24 max-w-4xl mx-auto">
          {[
            { icon: <BarChart3 className="w-6 h-6 text-primary" />, label: 'Quoted Billing', value: '11.67M' },
            { icon: <TrendingUp className="w-6 h-6 text-accent" />, label: 'Revenue Growth', value: '1M AED+' },
            { icon: <Cpu className="w-6 h-6 text-primary" />, label: 'Delivered', value: '13+' },
            { icon: <Zap className="w-6 h-6 text-accent" />, label: 'Decision Speed', value: '+60%' },
          ].map((item, i) => (
            <div key={i} className="flex flex-col items-center group cursor-default">
              <div className="mb-3 transform group-hover:scale-110 transition-transform">{item.icon}</div>
              <span className="text-3xl font-bold text-white mb-1">{item.value}</span>
              <span className="text-[10px] uppercase tracking-[0.2em] text-muted-foreground text-center font-bold">{item.label}</span>
            </div>
          ))}
        </div>
      </div>

      <div className="absolute bottom-12 left-1/2 -translate-x-1/2 animate-bounce opacity-50">
        <div className="w-6 h-10 rounded-full border-2 border-white/20 flex justify-center p-1">
          <div className="w-1 h-2 bg-white/50 rounded-full" />
        </div>
      </div>
    </section>
  );
};
