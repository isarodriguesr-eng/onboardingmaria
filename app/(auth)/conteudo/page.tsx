import * as React from "react";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { PlayCircle, FileText, CheckCircle2, Lock, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const mockContentSteps = [
  { id: "1", title: "1. Contrato e Boas-vindas", status: "completed", type: "Docs", duration: "10 min" },
  { id: "2", title: "2. Kickoff Estratégico", status: "current", type: "Video", duration: "45 min" },
  { id: "3", title: "3. Upload de Documentos", status: "locked", type: "Checklist", duration: "20 min" },
  { id: "4", title: "4. Configuração do Time", status: "locked", type: "Tutorial", duration: "30 min" },
  { id: "5", title: "5. Treinamento Final", status: "locked", type: "Video", duration: "60 min" },
  { id: "6", title: "6. Certificação Maria", status: "locked", type: "Exame", duration: "30 min" },
];

export default function ConteudoPage() {
  return (
    <div className="space-y-8 animate-in fade-in duration-500">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <h1 className="text-3xl font-bold text-[#1A1A1A]">Conteúdo da Jornada</h1>
          <p className="text-neutral-gray-500 mt-1">Explore as aulas, materiais e tarefas de cada etapa.</p>
        </div>
      </div>

      {/* Content Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {mockContentSteps.map((step) => (
          <Card key={step.id} className={cn(
            "group border-none shadow-sm transition-all duration-300 overflow-hidden",
            step.status === "locked" ? "bg-neutral-gray-50/50 opacity-60" : "bg-white hover:shadow-md"
          )}>
            <div className={cn(
                "h-2 w-full",
                step.status === "completed" ? "bg-[#16A34A]" : step.status === "current" ? "bg-[#E65A28]" : "bg-neutral-gray-200"
            )} />
            <CardHeader className="pb-2">
              <div className="flex justify-between items-start">
                <Badge variant="outline" className="text-[9px] font-bold uppercase tracking-wider border-neutral-gray-200 text-neutral-gray-500">
                  {step.type}
                </Badge>
                {step.status === "completed" ? (
                    <CheckCircle2 className="h-4 w-4 text-[#16A34A]" />
                ) : step.status === "locked" && (
                    <Lock className="h-4 w-4 text-neutral-gray-300" />
                )}
              </div>
              <CardTitle className="text-sm font-bold mt-2 group-hover:text-[#6135D7] transition-colors">{step.title}</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-xs text-neutral-gray-500 italic">Tempo estimado: {step.duration}</p>
              
              <Button 
                disabled={step.status === "locked"}
                variant={step.status === "current" ? "default" : "outline"}
                className={cn(
                    "w-full text-[10px] font-bold h-8 group",
                    step.status === "current" ? "bg-[#6135D7] hover:bg-[#4E2AB3]" : "border-neutral-gray-100"
                )}
              >
                {step.status === "completed" ? "Revisar Etapa" : "Acessar Conteúdo"}
                <ArrowRight className="ml-auto h-3 w-3 transition-transform group-hover:translate-x-1" />
              </Button>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}

function cn(...inputs: any[]) {
    return inputs.filter(Boolean).join(" ");
}
