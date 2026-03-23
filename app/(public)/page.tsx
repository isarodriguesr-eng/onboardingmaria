"use client";

import * as React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { 
  ChevronRight, 
  CheckCircle2, 
  Zap, 
  Map, 
  Trophy, 
  ArrowRight,
  ShieldCheck,
  Rocket
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const features = [
  {
    title: "Jornada Guiada",
    description: "Cada passo da sua implantação organizado em um dashboard intuitivo e gamificado.",
    icon: <Map className="h-6 w-6" />,
    color: "bg-[#EDE7FB] text-[#6135D7]"
  },
  {
    title: "Gestão Ágil",
    description: "Visibilidade total para o time de CX e segurança para o cliente de cada etapa do projeto.",
    icon: <Zap className="h-6 w-6" />,
    color: "bg-[#FFF4F0] text-[#E65A28]"
  },
  {
    title: "Gamificação Real",
    description: "Desbloqueie badges, ganhe XP e conquiste sua certificação exclusiva Maria.",
    icon: <Trophy className="h-6 w-6" />,
    color: "bg-green-50 text-green-600"
  }
];

export default function LandingPage() {
  return (
    <div className="flex flex-col min-h-screen bg-white selection:bg-[#6135D7] selection:text-white">
      {/* Navigation */}
      <header className="fixed top-0 w-full z-50 bg-white/80 backdrop-blur-md border-b border-neutral-gray-100">
        <div className="container mx-auto px-4 h-16 flex items-center justify-between">
          <div className="flex items-center">
            <div className="mr-2 flex h-8 w-8 items-center justify-center rounded-full bg-[#E65A28]">
                <ChevronRight className="h-5 w-5 text-white" />
            </div>
            <span className="font-bold tracking-tight text-[#1A1A1A]">ONBOARDING MARIA</span>
          </div>
          <nav className="hidden md:flex items-center space-x-8 text-sm font-medium text-neutral-gray-500">
            <Link href="#features" className="hover:text-[#6135D7] transition-colors">Funcionalidades</Link>
            <Link href="#como-funciona" className="hover:text-[#6135D7] transition-colors">Como Funciona</Link>
            <Link href="/login" className="text-[#1A1A1A] font-bold">Entrar</Link>
            <Button asChild className="bg-[#6135D7] hover:bg-[#4E2AB3] text-white px-6">
                <Link href="/login">Começar Agora</Link>
            </Button>
          </nav>
        </div>
      </header>

      <main className="flex-1 pt-16">
        {/* Hero Section */}
        <section className="relative overflow-hidden py-24 lg:py-32">
          {/* Background Decorations */}
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-full -z-10 pointer-events-none opacity-20">
            <div className="absolute top-0 right-0 w-96 h-96 bg-[#6135D7] rounded-full blur-[120px]" />
            <div className="absolute bottom-0 left-0 w-96 h-96 bg-[#E65A28] rounded-full blur-[120px]" />
          </div>

          <div className="container mx-auto px-4">
            <div className="flex flex-col items-center text-center max-w-4xl mx-auto space-y-8">
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="inline-flex items-center space-x-2 bg-[#EDE7FB] text-[#6135D7] px-4 py-1.5 rounded-full text-xs font-black uppercase tracking-widest"
              >
                <Rocket className="h-3 w-3" />
                <span>Nova Experiência de Implantação</span>
              </motion.div>
              
              <motion.h1 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
                className="text-5xl md:text-7xl font-black text-[#1A1A1A] tracking-tighter leading-[0.9]"
              >
                Sua jornada de implantação, <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#6135D7] to-[#E65A28]">passo a passo.</span>
              </motion.h1>

              <motion.p 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="text-lg md:text-xl text-neutral-gray-500 max-w-2xl"
              >
                Transforme o onboarding técnico em uma experiência memorável.  
                Acompanhe o progresso, conquiste badges e escale sua operação com segurança.
              </motion.p>

              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.3 }}
                className="flex flex-col sm:flex-row items-center space-y-4 sm:space-y-0 sm:space-x-4"
              >
                <Button asChild size="lg" className="h-14 px-10 bg-[#1A1A1A] hover:bg-black text-white text-base font-bold rounded-full group">
                  <Link href="/login">
                    Iniciar Minha Jornada
                    <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
                  </Link>
                </Button>
                <Button variant="outline" size="lg" className="h-14 px-10 border-neutral-gray-200 hover:bg-neutral-gray-50 text-base font-bold rounded-full">
                  Agendar Demo
                </Button>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section id="features" className="py-24 bg-neutral-gray-50/50">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {features.map((feature, i) => (
                <motion.div
                  key={feature.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                  className="p-8 rounded-2xl bg-white border border-neutral-gray-100 shadow-sm hover:shadow-xl transition-all duration-500 group"
                >
                  <div className={cn("h-12 w-12 rounded-xl flex items-center justify-center mb-6 transition-transform group-hover:scale-110", feature.color)}>
                    {feature.icon}
                  </div>
                  <h3 className="text-xl font-bold text-[#1A1A1A] mb-3">{feature.title}</h3>
                  <p className="text-neutral-gray-500 text-sm leading-relaxed">{feature.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Journey Preview */}
        <section id="como-funciona" className="py-24 overflow-hidden">
             <div className="container mx-auto px-4">
                <div className="flex flex-col lg:flex-row items-center gap-16">
                    <div className="flex-1 space-y-8">
                        <div className="space-y-4">
                            <h2 className="text-4xl font-black text-[#1A1A1A] tracking-tight">O fim das planilhas <br /> de implantação.</h2>
                            <p className="text-lg text-neutral-gray-500">Dê adeus ao acompanhamento manual. Com nossa visão de jornada, o cliente sabe exatamente onde está e o que falta para o sucesso.</p>
                        </div>
                        <ul className="space-y-4">
                            {[
                                "Acompanhamento em tempo real",
                                "Checklists inteligentes por etapa",
                                "Automare de marcação de reuniões",
                                "Certificação técnica ao final"
                            ].map((item) => (
                                <li key={item} className="flex items-center space-x-3 text-sm font-bold text-[#1A1A1A]">
                                    <CheckCircle2 className="h-5 w-5 text-[#16A34A]" />
                                    <span>{item}</span>
                                </li>
                            ))}
                        </ul>
                    </div>
                    <div className="flex-1 relative">
                        {/* Interactive UI Mockup using CSS */}
                        <div className="relative z-10 p-8 rounded-3xl bg-white shadow-2xl border border-neutral-gray-100 max-w-md mx-auto">
                            <div className="space-y-6">
                                <div className="h-1.5 w-full bg-neutral-gray-100 rounded-full overflow-hidden">
                                    <div className="h-full w-1/3 bg-[#6135D7]" />
                                </div>
                                <div className="space-y-4 opacity-80 pointer-events-none">
                                    <div className="flex items-start space-x-4">
                                        <div className="h-8 w-8 rounded-full bg-[#16A34A] flex items-center justify-center text-white"><CheckCircle2 size={16} /></div>
                                        <div className="space-y-1"><div className="h-3 w-32 bg-neutral-gray-200 rounded" /><div className="h-2 w-20 bg-neutral-gray-100 rounded" /></div>
                                    </div>
                                    <div className="flex items-start space-x-4">
                                        <div className="h-8 w-8 rounded-full border-2 border-[#E65A28] flex items-center justify-center text-[#E65A28] font-bold text-xs">2</div>
                                        <div className="space-y-1"><div className="h-3 w-40 bg-[#EDE7FB] rounded" /><div className="h-2 w-24 bg-neutral-gray-100 rounded" /></div>
                                    </div>
                                    <div className="flex items-start space-x-4 opacity-40">
                                        <div className="h-8 w-8 rounded-full border-2 border-neutral-gray-200 flex items-center justify-center text-neutral-gray-300 font-bold text-xs">3</div>
                                        <div className="space-y-1"><div className="h-3 w-32 bg-neutral-gray-100 rounded" /><div className="h-2 w-20 bg-neutral-gray-50 rounded" /></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
             </div>
        </section>

        {/* CTA Section */}
        <section className="py-24">
            <div className="container mx-auto px-4">
                <div className="bg-[#6135D7] rounded-[3rem] p-12 lg:p-24 text-center space-y-8 relative overflow-hidden">
                    <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full -mr-32 -mt-32 blur-3xl pointer-events-none" />
                    <div className="absolute bottom-0 left-0 w-64 h-64 bg-[#E65A28]/20 rounded-full -ml-32 -mb-32 blur-3xl pointer-events-none" />
                    
                    <h2 className="text-4xl md:text-6xl font-black text-white tracking-tighter max-w-3xl mx-auto leading-none">
                        Pronto para transformar sua implantação?
                    </h2>
                    <p className="text-lg text-white/70 max-w-xl mx-auto">
                        Junte-se a dezenas de empresas que já escalaram seu sucesso com o Onboarding Maria.
                    </p>
                    <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-4">
                        <Button asChild size="lg" className="bg-white text-[#6135D7] hover:bg-neutral-gray-50 h-14 px-10 rounded-full font-bold">
                            <Link href="/login">Criar Conta Grátis</Link>
                        </Button>
                        <Button variant="outline" size="lg" className="border-white/20 hover:bg-white/10 text-white h-14 px-10 rounded-full font-bold">
                            Falar com Vendas
                        </Button>
                    </div>
                </div>
            </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="py-12 border-t border-neutral-gray-100">
        <div className="container mx-auto px-4 text-center space-y-6">
          <div className="flex items-center justify-center">
            <div className="mr-2 flex h-6 w-6 items-center justify-center rounded-full bg-[#E65A28]">
                <ChevronRight className="h-3 w-3 text-white" />
            </div>
            <span className="font-bold tracking-tight text-[#1A1A1A] text-sm italic">ONBOARDING MARIA</span>
          </div>
          <p className="text-xs text-neutral-gray-400">© 2026 Onboarding Maria. Uma experiência inspirada em Mereo.</p>
        </div>
      </footer>
    </div>
  );
}
