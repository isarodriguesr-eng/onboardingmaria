"use client";

import * as React from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { 
  MoreHorizontal, 
  ExternalLink, 
  CheckCircle2, 
  Clock, 
  AlertCircle,
  UserRoundPen
} from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
  DialogFooter,
} from "@/components/ui/dialog";

const mockMembers = [
  { id: "1", name: "Bruno Andrade", email: "bruno@exemplo.com", progress: 25, currentStep: "Kickoff Meeting", status: "Active" },
  { id: "2", name: "Alice Silva", email: "alice@startup.io", progress: 100, currentStep: "Certificação", status: "Completed" },
  { id: "3", name: "Carlos Oliveira", email: "carlos@b2b.com", progress: 0, currentStep: "Contrato", status: "Pending" },
  { id: "4", name: "Mariana Costa", email: "mari@tech.co", progress: 60, currentStep: "Configuração", status: "Active" },
];

export function MemberTable() {
  return (
    <div className="rounded-xl border border-neutral-gray-100 bg-white shadow-sm overflow-hidden">
      <Table>
        <TableHeader className="bg-neutral-gray-50/50">
          <TableRow>
            <TableHead className="font-bold text-[#1A1A1A]">Membro</TableHead>
            <TableHead className="font-bold text-[#1A1A1A]">Etapa Atual</TableHead>
            <TableHead className="font-bold text-[#1A1A1A]">Progresso</TableHead>
            <TableHead className="font-bold text-[#1A1A1A]">Status</TableHead>
            <TableHead className="text-right font-bold text-[#1A1A1A]">Ações</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {mockMembers.map((member) => (
            <TableRow key={member.id} className="hover:bg-neutral-gray-50/50 transition-colors">
              <TableCell>
                <div className="flex flex-col">
                  <span className="font-bold text-sm text-[#1A1A1A]">{member.name}</span>
                  <span className="text-xs text-neutral-gray-500">{member.email}</span>
                </div>
              </TableCell>
              <TableCell className="text-sm font-medium">{member.currentStep}</TableCell>
              <TableCell>
                <div className="flex items-center space-x-2">
                  <div className="h-1.5 w-16 bg-neutral-gray-100 rounded-full overflow-hidden">
                    <div 
                      className="h-full bg-[#6135D7]" 
                      style={{ width: `${member.progress}%` }}
                    />
                  </div>
                  <span className="text-xs font-bold text-[#6135D7]">{member.progress}%</span>
                </div>
              </TableCell>
              <TableCell>
                <Badge 
                  variant="outline" 
                  className={cn(
                    "border-none px-2 py-0.5 text-[10px] font-bold uppercase tracking-wider",
                    member.status === "Active" ? "bg-blue-50 text-blue-600" :
                    member.status === "Completed" ? "bg-green-50 text-green-600" :
                    "bg-yellow-50 text-yellow-600"
                  )}
                >
                  {member.status === "Active" ? <Clock className="mr-1 h-3 w-3" /> :
                   member.status === "Completed" ? <CheckCircle2 className="mr-1 h-3 w-3" /> :
                   <AlertCircle className="mr-1 h-3 w-3" />}
                  {member.status}
                </Badge>
              </TableCell>
              <TableCell className="text-right">
                <Dialog>
                  <DialogTrigger asChild>
                    <Button variant="ghost" size="icon" className="h-8 w-8 hover:bg-[#EDE7FB] hover:text-[#6135D7]">
                      <MoreHorizontal className="h-4 w-4" />
                    </Button>
                  </DialogTrigger>
                  <DialogContent className="sm:max-w-[425px]">
                    <DialogHeader>
                      <DialogTitle>Gerenciar Membro</DialogTitle>
                      <DialogDescription>
                        Atualize o progresso e as informações de {member.name}.
                      </DialogDescription>
                    </DialogHeader>
                    <div className="grid gap-4 py-4">
                        {/* Placeholder for Edit Form */}
                        <p className="text-sm text-neutral-gray-500 italic">Campos de edição de progresso e status serão implementados aqui.</p>
                    </div>
                    <DialogFooter>
                      <Button type="submit" className="bg-[#6135D7]">Salvar Alterações</Button>
                    </DialogFooter>
                  </DialogContent>
                </Dialog>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
}

function cn(...inputs: any[]) {
    return inputs.filter(Boolean).join(" ");
}
