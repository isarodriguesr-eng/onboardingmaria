import * as React from "react";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { FileText, Video, Download, ExternalLink, Search, Filter } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

const mockMaterials = [
  { id: "1", title: "Manual do Colaborador", type: "PDF", category: "Institucional", size: "2.4 MB", date: "12/03/2026" },
  { id: "2", title: "Guia de Configuração Maria", type: "PDF", category: "Técnico", size: "1.1 MB", date: "15/03/2026" },
  { id: "3", title: "Workshop Kickoff (Gravação)", type: "Video", category: "Treinamento", duration: "45 min", date: "18/03/2026" },
  { id: "4", title: "Planilha de Importação", type: "XLSX", category: "Templates", size: "450 KB", date: "20/03/2026" },
  { id: "5", title: "Política de Segurança", type: "PDF", category: "Compliance", size: "890 KB", date: "10/03/2026" },
  { id: "6", title: "Introdução ao Dashboard", type: "Video", category: "Treinamento", duration: "12 min", date: "22/03/2026" },
];

export default function MateriaisPage() {
  return (
    <div className="space-y-8 animate-in fade-in duration-500">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <h1 className="text-3xl font-bold text-[#1A1A1A]">Materiais</h1>
          <p className="text-neutral-gray-500 mt-1">Acesse documentos, vídeos e guias úteis para sua jornada.</p>
        </div>
      </div>

      {/* Filters & Search */}
      <div className="flex flex-col sm:flex-row gap-4">
        <div className="relative flex-1">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-neutral-gray-400" />
          <Input 
            placeholder="Buscar materiais..." 
            className="pl-10 border-neutral-gray-100 bg-white"
          />
        </div>
        <Button variant="outline" className="border-neutral-gray-100 bg-white">
          <Filter className="mr-2 h-4 w-4" />
          Filtrar
        </Button>
      </div>

      {/* Materials Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {mockMaterials.map((item) => (
          <Card key={item.id} className="group border-none shadow-sm hover:shadow-md transition-all duration-300 bg-white overflow-hidden">
            <CardHeader className="p-0">
                <div className={cn(
                    "h-32 flex items-center justify-center transition-colors duration-300",
                    item.type === "Video" ? "bg-red-50 group-hover:bg-red-100/50" : "bg-[#EDE7FB] group-hover:bg-[#6135D7]/10"
                )}>
                    {item.type === "Video" ? (
                        <Video className="h-10 w-10 text-red-600" />
                    ) : (
                        <FileText className="h-10 w-10 text-[#6135D7]" />
                    )}
                </div>
            </CardHeader>
            <CardContent className="p-5">
              <div className="flex justify-between items-start mb-2">
                <Badge variant="outline" className="text-[9px] font-bold uppercase tracking-wider text-neutral-gray-500 border-neutral-gray-200">
                  {item.category}
                </Badge>
                <span className="text-[10px] text-neutral-gray-400 font-medium">{item.date}</span>
              </div>
              <h3 className="font-bold text-[#1A1A1A] group-hover:text-[#6135D7] transition-colors">{item.title}</h3>
              <p className="text-xs text-neutral-gray-500 mt-1">
                {item.type} {item.size ? `• ${item.size}` : item.duration ? `• ${item.duration}` : ""}
              </p>
              
              <div className="mt-6 flex space-x-2">
                <Button variant="outline" size="sm" className="flex-1 text-[10px] font-bold h-8 border-neutral-gray-100 hover:bg-neutral-gray-50">
                    Visualizar
                    <ExternalLink className="ml-2 h-3 w-3" />
                </Button>
                <Button size="sm" className="flex-1 text-[10px] font-bold h-8 bg-[#6135D7] hover:bg-[#4E2AB3]">
                    Baixar
                    <Download className="ml-2 h-3 w-3" />
                </Button>
              </div>
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
