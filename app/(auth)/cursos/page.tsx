import * as React from "react";
import { Card, CardContent, CardHeader, CardTitle, CardFooter } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ShoppingBag, Star, Users, CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/button";

const mockCourses = [
  { id: "1", title: "Liderança de Alta Performance", price: "R$ 297,00", description: "Domine as técnicas de liderança utilizadas pelas maiores empresas do mundo.", rating: 4.9, students: 120, tag: "Mais Vendido" },
  { id: "2", title: "Gestão Ágil para Equipes B2B", price: "R$ 197,00", description: "Aprenda a implementar o Scrum e o Kanban no seu dia a dia operacional.", rating: 4.8, students: 85, tag: "Novo" },
  { id: "3", title: "Inteligência Emocional no Trabalho", price: "R$ 147,00", description: "Desenvolva autoconhecimento e empatia para liderar com muito mais segurança.", rating: 4.7, students: 230 },
  { id: "4", title: "Estratégia de Customer Success", price: "R$ 397,00", description: "O guia definitivo para reduzir o churn e aumentar o LTV dos seus clientes.", rating: 5.0, students: 42 },
];

export default function CursosPage() {
  return (
    <div className="space-y-8 animate-in fade-in duration-500">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <h1 className="text-3xl font-bold text-[#1A1A1A]">Cursos Extras</h1>
          <p className="text-neutral-gray-500 mt-1">Potencialize seu conhecimento com nossas especializações.</p>
        </div>
      </div>

      {/* Courses Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {mockCourses.map((course) => (
          <Card key={course.id} className="group flex flex-col border-none shadow-sm hover:shadow-xl transition-all duration-500 bg-white overflow-hidden">
            <div className="h-4 w-full bg-[#6135D7]" />
            <CardHeader className="p-6 pb-2">
              <div className="flex justify-between items-start">
                <div className="space-y-1">
                    {course.tag && (
                        <Badge className="bg-[#E65A28] text-white hover:bg-[#E65A28] border-none text-[8px] font-bold uppercase tracking-widest px-2 py-0.5">
                            {course.tag}
                        </Badge>
                    )}
                    <CardTitle className="text-xl font-bold group-hover:text-[#6135D7] transition-colors">{course.title}</CardTitle>
                </div>
                <div className="h-10 w-10 flex items-center justify-center bg-neutral-gray-50 rounded-xl">
                    <ShoppingBag className="h-5 w-5 text-neutral-gray-400 group-hover:text-[#6135D7] transition-colors" />
                </div>
              </div>
            </CardHeader>
            <CardContent className="p-6 pt-2 flex-1 space-y-4">
              <p className="text-sm text-neutral-gray-500 leading-relaxed">{course.description}</p>
              
              <div className="flex items-center space-x-4 text-[10px] font-bold text-neutral-gray-400 uppercase tracking-wider">
                <div className="flex items-center">
                    <Star className="h-3 w-3 text-yellow-500 fill-yellow-500 mr-1" />
                    {course.rating}
                </div>
                <div className="flex items-center">
                    <Users className="h-3 w-3 mr-1" />
                    {course.students} Alunos
                </div>
                <div className="flex items-center text-green-600">
                    <CheckCircle className="h-3 w-3 mr-1" />
                    Acesso Vitalício
                </div>
              </div>
            </CardContent>
            <CardFooter className="p-6 pt-0 flex items-center justify-between border-t border-neutral-gray-50 bg-neutral-gray-50/20 mt-4">
              <div className="text-lg font-black text-[#1A1A1A]">{course.price}</div>
              <Button className="bg-[#6135D7] hover:bg-[#4E2AB3] text-white text-xs font-bold px-6">
                Quero me Inscrever
              </Button>
            </CardFooter>
          </Card>
        ))}
      </div>
      
      {/* Partnership Banner */}
      <Card className="border-none bg-[#1A1A1A] text-white overflow-hidden relative">
        <div className="absolute top-0 right-0 p-8 opacity-10 pointer-events-none">
            <ShoppingBag size={120} />
        </div>
        <CardContent className="p-8 relative z-10 flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="space-y-2 text-center md:text-left">
                <h3 className="text-2xl font-bold italic tracking-tighter italic">PACOTE EMPRESARIAL</h3>
                <p className="text-sm opacity-60 max-w-md">Precisa de acesso para todo o seu time? Oferecemos condições especiais para grupos acima de 10 pessoas.</p>
            </div>
            <Button variant="outline" className="border-white/20 hover:bg-white/10 text-white font-bold h-12 px-8">
                Falar com Especialista
            </Button>
        </CardContent>
      </Card>
    </div>
  );
}
