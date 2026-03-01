
'use client';

import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card } from '@/components/ui/card';
import { Brain, Cpu, MessageSquare, Send, Sparkles, Workflow } from 'lucide-react';
import { aiPortfolioAssistant } from '@/ai/flows/ai-portfolio-assistant';
import { ScrollArea } from '@/components/ui/scroll-area';

export const AILab = () => {
  const [question, setQuestion] = useState('');
  const [messages, setMessages] = useState<{ role: 'user' | 'ai', content: string }[]>([]);
  const [isLoading, setIsLoading] = useState(false);

  const handleAsk = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!question.trim() || isLoading) return;

    const userMsg = question;
    setQuestion('');
    setMessages(prev => [...prev, { role: 'user', content: userMsg }]);
    setIsLoading(true);

    try {
      const response = await aiPortfolioAssistant({ question: userMsg });
      setMessages(prev => [...prev, { role: 'ai', content: response.answer }]);
    } catch (err) {
      setMessages(prev => [...prev, { role: 'ai', content: "I'm having trouble connecting to my matrix. Please try again later." }]);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <section className="py-24 bg-[#16191E] relative overflow-hidden">
      {/* Background patterns */}
      <div className="absolute inset-0 opacity-10 pointer-events-none">
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_50%_50%,#5989f0_0%,transparent_50%)]" />
      </div>

      <div className="container px-6 relative z-10">
        <div className="text-center mb-16">
          <Badge className="mb-4 bg-accent/20 text-accent border-accent/20 px-4 py-1">THE AI LAB</Badge>
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Orchestrating <span className="text-accent italic">Intelligence.</span></h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Explore how I build and scale LLM-powered systems, from agentic workflows to production-grade automation pipelines.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          {/* Interactive Flow Diagram */}
          <div className="lg:col-span-7 space-y-8">
            <Card className="glass p-8 border-accent/20 relative overflow-hidden h-full flex flex-col justify-center">
               <div className="grid grid-cols-1 md:grid-cols-3 gap-6 relative z-10">
                  <div className="flex flex-col items-center p-6 glass border-white/5 rounded-2xl animate-float">
                    <MessageSquare className="w-8 h-8 text-primary mb-4" />
                    <span className="font-semibold text-center text-sm">Input Interface</span>
                    <p className="text-[10px] text-muted-foreground text-center mt-2">Webhooks, APIs, UI</p>
                  </div>
                  <div className="flex flex-col items-center p-6 glass border-accent/30 rounded-2xl animate-pulse-slow">
                    <Brain className="w-10 h-10 text-accent mb-4" />
                    <span className="font-semibold text-center text-sm">LLM Orchestrator</span>
                    <p className="text-[10px] text-accent/80 text-center mt-2">LangChain, ReAct Logic</p>
                  </div>
                  <div className="flex flex-col items-center p-6 glass border-white/5 rounded-2xl animate-float" style={{ animationDelay: '1s' }}>
                    <Workflow className="w-8 h-8 text-primary mb-4" />
                    <span className="font-semibold text-center text-sm">Action Pipeline</span>
                    <p className="text-[10px] text-muted-foreground text-center mt-2">Tools, DBs, Auth</p>
                  </div>
               </div>
               
               <div className="mt-12 space-y-4">
                  <h4 className="font-bold text-white flex items-center gap-2"><Sparkles className="w-5 h-5 text-accent" /> Tech Stack Breakdown</h4>
                  <div className="flex flex-wrap gap-3">
                    {['Vector DBs (Pinecone)', 'OpenAI/Gemini APIs', 'LangGraph', 'Node.js/Python', 'Event-Driven Arch'].map(item => (
                      <span key={item} className="px-3 py-1 bg-white/5 rounded-full text-xs text-muted-foreground border border-white/10">{item}</span>
                    ))}
                  </div>
               </div>
            </Card>
          </div>

          {/* AI Chatbot */}
          <div className="lg:col-span-5">
            <div className="glass flex flex-col h-[500px] rounded-3xl border-white/10 overflow-hidden shadow-2xl">
              <div className="p-4 bg-white/5 border-b border-white/10 flex items-center gap-3">
                <div className="w-8 h-8 rounded-full bg-accent flex items-center justify-center">
                  <Cpu className="w-4 h-4 text-white" />
                </div>
                <div>
                  <h3 className="text-sm font-bold">Stratosphere AI Assistant</h3>
                  <p className="text-[10px] text-muted-foreground">Ask me about my experience or projects.</p>
                </div>
              </div>

              <ScrollArea className="flex-1 p-4">
                <div className="space-y-4">
                  {messages.length === 0 && (
                    <div className="text-center py-10">
                      <p className="text-sm text-muted-foreground italic">"I was built to explain the complexity of my creator's portfolio. How can I help?"</p>
                    </div>
                  )}
                  {messages.map((m, i) => (
                    <div key={i} className={`flex ${m.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                      <div className={`max-w-[85%] p-3 rounded-2xl text-sm ${m.role === 'user' ? 'bg-primary text-white rounded-tr-none' : 'bg-white/5 border border-white/10 text-muted-foreground rounded-tl-none'}`}>
                        {m.content}
                      </div>
                    </div>
                  ))}
                  {isLoading && (
                    <div className="flex justify-start">
                      <div className="bg-white/5 border border-white/10 p-3 rounded-2xl rounded-tl-none">
                        <div className="flex gap-1">
                          <div className="w-1.5 h-1.5 bg-accent rounded-full animate-bounce" />
                          <div className="w-1.5 h-1.5 bg-accent rounded-full animate-bounce" style={{ animationDelay: '0.2s' }} />
                          <div className="w-1.5 h-1.5 bg-accent rounded-full animate-bounce" style={{ animationDelay: '0.4s' }} />
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              </ScrollArea>

              <form onSubmit={handleAsk} className="p-4 bg-white/5 border-t border-white/10 flex gap-2">
                <Input 
                  value={question}
                  onChange={(e) => setQuestion(e.target.value)}
                  placeholder="Ask about strategy, tech, or metrics..." 
                  className="bg-black/20 border-white/10 text-xs h-10 rounded-xl"
                />
                <Button type="submit" size="icon" disabled={isLoading} className="bg-accent hover:bg-accent/90 shrink-0 h-10 w-10">
                  <Send className="w-4 h-4" />
                </Button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const Badge = ({ children, className }: { children: React.ReactNode, className?: string }) => (
  <span className={`inline-block rounded-full text-[10px] font-bold tracking-widest ${className}`}>
    {children}
  </span>
);
