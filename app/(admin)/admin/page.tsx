import * as React from "react";
import { MemberTable } from "@/components/admin/MemberTable";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Users, BarChart3, CalendarDays, Plus } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function AdminPage() {
  return (
    <div className="space-y-8 animate-in fade-in duration-500">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <h1 className="text-3xl font-bold text-[#1A1A1A]">Central do CX</h1>
          <p className="text-neutral-gray-500 mt-1">Gerencie seus membros e acompanhe a saúde das implantações.</p>
        </div>
        <Button className="bg-[#E65A28] hover:bg-[#C44A1E] text-white">
          <Plus className="mr-2 h-4 w-4" />
          Convidar Membro
        </Button>
      </div>

      {/* Stats Overview */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <Card className="border-none shadow-sm bg-white">
          <CardHeader className="flex flex-row items-center justify-between pb-2 space-y-0">
            <CardTitle className="text-xs font-bold text-neutral-gray-500 uppercase tracking-wider">
              Membros Ativos
            </CardTitle>
            <Users className="h-4 w-4 text-[#6135D7]" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-[#1A1A1A]">12</div>
            <p className="text-[10px] text-green-600 font-bold mt-1">+2 novos esta semana</p>
          </CardContent>
        </Card>
        
        <Card className="border-none shadow-sm bg-white">
          <CardHeader className="flex flex-row items-center justify-between pb-2 space-y-0">
            <CardTitle className="text-xs font-bold text-neutral-gray-500 uppercase tracking-wider">
              Progresso Médio
            </CardTitle>
            <BarChart3 className="h-4 w-4 text-[#E65A28]" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-[#1A1A1A]">46%</div>
            <div className="mt-2 h-1 w-full bg-neutral-gray-100 rounded-full overflow-hidden">
                <div className="h-full bg-[#E65A28]" style={{ width: "46%" }} />
            </div>
          </CardContent>
        </Card>

        <Card className="border-none shadow-sm bg-white">
          <CardHeader className="flex flex-row items-center justify-between pb-2 space-y-0">
            <CardTitle className="text-xs font-bold text-neutral-gray-500 uppercase tracking-wider">
              Reuniões Hoje
            </CardTitle>
            <CalendarDays className="h-4 w-4 text-[#1A1A1A]" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-[#1A1A1A]">3</div>
            <p className="text-[10px] text-neutral-gray-500 mt-1">Próxima às 14:00</p>
          </CardContent>
        </Card>
      </div>

      {/* Main Table */}
      <div className="space-y-4">
        <h2 className="text-lg font-bold text-[#1A1A1A]">Gerenciamento de Membros</h2>
        <MemberTable />
      </div>
    </div>
  );
}
