import * as React from "react";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Calendar, Video, CheckCircle2, Clock, MapPin, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const mockMeetings = [
  { id: "1", title: "Contrato e Boas-vindas", date: "12/03/2026", time: "10:00", status: "Concluída", type: "Reunião de Alinhamento", notes: "Todos os documentos foram entregues." },
  { id: "2", title: "Kickoff Estratégico", date: "24/03/2026", time: "14:00", status: "Agendada", type: "Videochamada", link: "https://meet.google.com/abc-defg-hij" },
  { id: "3", title: "Configuração do Ambiente", date: "28/03/2026", time: "09:00", status: "Pendente", type: "Suporte Técnico" },
  { id: "4", title: "Treinamento de Equipe", date: "02/04/2026", time: "11:00", status: "Pendente", type: "Workshop" },
];

export default function CronogramaPage() {
  return (
    <div className="space-y-8 animate-in fade-in duration-500">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <h1 className="text-3xl font-bold text-[#1A1A1A]">Cronograma</h1>
          <p className="text-neutral-gray-500 mt-1">Acompanhe as reuniões e marcos da sua implantação.</p>
        </div>
      </div>

      {/* Timeline Section */}
      <div className="relative space-y-8 before:absolute before:inset-0 before:ml-5 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-transparent before:via-neutral-gray-100 before:to-transparent">
        {mockMeetings.map((meeting, index) => (
          <div key={meeting.id} className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group">
            {/* Timeline Marker */}
            <div className={cn(
                "flex items-center justify-center w-10 h-10 rounded-full border border-white shadow-sm z-10 transition-transform duration-300 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2",
                meeting.status === "Concluída" ? "bg-[#16A34A]" : meeting.status === "Agendada" ? "bg-[#E65A28]" : "bg-neutral-gray-200"
            )}>
              {meeting.status === "Concluída" ? (
                <CheckCircle2 className="h-5 w-5 text-white" />
              ) : meeting.status === "Agendada" ? (
                <Video className="h-5 w-5 text-white" />
              ) : (
                <Clock className="h-5 w-5 text-neutral-gray-500" />
              )}
            </div>

            {/* Content Card */}
            <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] p-4 rounded-xl bg-white shadow-sm border border-neutral-gray-100 hover:shadow-md transition-all duration-300">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-3">
                <time className="text-xs font-bold text-[#6135D7]">{meeting.date} às {meeting.time}</time>
                <Badge 
                  variant="outline" 
                  className={cn(
                    "text-[9px] font-bold border-none px-2 py-0.5 uppercase tracking-wider",
                    meeting.status === "Concluída" ? "bg-green-50 text-green-600" :
                    meeting.status === "Agendada" ? "bg-orange-50 text-orange-600 animate-pulse" :
                    "bg-neutral-gray-100 text-neutral-gray-500"
                  )}
                >
                  {meeting.status}
                </Badge>
              </div>
              <div className="text-sm font-bold text-[#1A1A1A]">{meeting.title}</div>
              <div className="text-xs text-neutral-gray-500 mt-1 mb-4">{meeting.type}</div>
              
              {meeting.link ? (
                <Button className="w-full bg-[#1A1A1A] hover:bg-black text-white text-[10px] font-bold h-8 group">
                    Participar da Reunião
                    <ArrowRight className="ml-auto h-3 w-3 transition-transform group-hover:translate-x-1" />
                </Button>
              ) : meeting.notes && (
                <div className="text-[10px] text-neutral-gray-400 italic bg-neutral-gray-50 p-2 rounded-lg border-l-2 border-l-[#16A34A]">
                    Obs: {meeting.notes}
                </div>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

function cn(...inputs: any[]) {
    return inputs.filter(Boolean).join(" ");
}
