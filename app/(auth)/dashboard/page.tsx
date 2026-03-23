import { ProgressBar } from "@/components/journey/ProgressBar";
import { Stepper, Step } from "@/components/journey/Stepper";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Calendar, Video, ArrowRight, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";

import { XPBar } from "@/components/gamification/XPBar";
import { BadgeCard } from "@/components/gamification/BadgeCard";
import { Trophy, Star, Zap, Shield, Target } from "lucide-react";

// Mock data for initial UI build
const mockSteps: Step[] = [
  { id: "1", title: "Contrato e Setup", status: "completed", order: 1, description: "Assinatura do contrato e boas-vindas." },
  { id: "2", title: "Kickoff Meeting", status: "current", order: 2, description: "Reunião inicial de alinhamento estratégico." },
  { id: "3", title: "Upload de Documentos", status: "locked", order: 3, description: "Envio dos documentos necessários para a plataforma." },
  { id: "4", title: "Configuração do Time", status: "locked", order: 4, description: "Criação das contas e permissões dos usuários." },
  { id: "5", title: "Treinamento Final", status: "locked", order: 5, description: "Workshop prático sobre as funcionalidades." },
  { id: "6", title: "Certificação Maria", status: "locked", order: 6, description: "Obtenção do selo de especialização." },
];

const mockBadges = [
  { id: "1", name: "Pioneiro", description: "Completou o setup inicial.", icon: <Zap className="h-6 w-6" />, isUnlocked: true, xpReward: 50 },
  { id: "2", name: "Estrategista", description: "Finalizou o Kickoff.", icon: <Target className="h-6 w-6" />, isUnlocked: false, xpReward: 100 },
  { id: "3", name: "Guardião", description: "Enviou todos os docs.", icon: <Shield className="h-6 w-6" />, isUnlocked: false, xpReward: 150 },
  { id: "4", name: "Mestre Maria", description: "Certificação completa.", icon: <Trophy className="h-6 w-6" />, isUnlocked: false, xpReward: 500 },
];

export default function DashboardPage() {
  const progress = 25; // Calculation based on mockSteps

  return (
    <div className="space-y-8 animate-in fade-in duration-500">
      {/* Header Section */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <h1 className="text-3xl font-bold text-[#1A1A1A]">Olá, Bruno! 👋</h1>
          <p className="text-neutral-gray-500 mt-1">Sua jornada de implantação está progredindo muito bem.</p>
        </div>
        <div className="flex items-center space-x-2">
            <span className="text-xs font-semibold text-neutral-gray-500 uppercase tracking-wider">Status:</span>
            <Badge className="bg-[#EDE7FB] text-[#6135D7] hover:bg-[#EDE7FB] border-none px-3 py-1">
                Em Implantação
            </Badge>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Main Content: Journey Stepper & Badges */}
        <div className="lg:col-span-2 space-y-8">
          <Card className="border-none shadow-sm bg-white">
            <CardHeader className="pb-2">
              <CardTitle className="text-lg font-bold">Minha Jornada</CardTitle>
              <CardDescription>Acompanhe cada etapa da sua evolução no Maria.</CardDescription>
            </CardHeader>
            <CardContent className="pt-4">
              <Stepper steps={mockSteps} currentStepId="2" />
            </CardContent>
          </Card>

          <div className="space-y-4">
            <div className="flex items-center justify-between">
                <h2 className="text-lg font-bold text-[#1A1A1A]">Conquistas</h2>
                <Link href="/conquistas" className="text-xs text-[#6135D7] font-bold hover:underline flex items-center">
                    Ver todas <ChevronRight className="ml-1 h-3 w-3" />
                </Link>
            </div>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
                {mockBadges.map((badge) => (
                    <BadgeCard key={badge.id} {...badge} />
                ))}
            </div>
          </div>
        </div>

        {/* Sidebar Content: Info Cards */}
        <div className="space-y-6">
          {/* XP Bar Card */}
          <XPBar currentXP={50} nextLevelXP={150} level="EXPLORADOR" />

          {/* Progress Card */}
          <Card className="border-none shadow-sm bg-white border-l-4 border-l-[#6135D7]">
            <CardContent className="pt-6">
              <ProgressBar progress={progress} label="Progresso Geral" />
              <p className="text-[10px] text-neutral-gray-500 mt-4 leading-relaxed italic">
                &quot;O progresso é a realização progressiva de um ideal digno.&quot; &mdash; Earl Nightingale
              </p>
            </CardContent>
          </Card>

          {/* Next Meeting Card */}
          <Card className="border-none shadow-sm bg-white overflow-hidden group border border-neutral-gray-100">
            <CardHeader className="pb-2">
              <div className="flex items-center justify-between">
                <CardTitle className="text-sm font-bold flex items-center">
                    <Calendar className="mr-2 h-4 w-4 text-[#E65A28]" />
                    Próxima Reunião
                </CardTitle>
                <div className="text-[10px] bg-red-50 text-red-600 px-2 py-0.5 rounded-full font-bold animate-pulse">
                    EM 2 DIAS
                </div>
              </div>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-1">
                <p className="text-sm font-bold text-[#1A1A1A]">Kickoff Estratégico</p>
                <p className="text-xs text-neutral-gray-500">Quarta-feira, 24/03 às 14:00</p>
              </div>
              <Button className="w-full bg-[#1A1A1A] hover:bg-black text-white text-xs group">
                <Video className="mr-2 h-3.5 w-3.5" />
                Entrar na Reunião
                <ArrowRight className="ml-auto h-3.5 w-3.5 transition-transform group-hover:translate-x-1" />
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}

