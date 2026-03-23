"use client";

import * as React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { 
  LayoutDashboard, 
  Map, 
  BookOpen, 
  Calendar, 
  FileText, 
  ShoppingBag, 
  LogOut,
  ChevronRight,
  Menu,
  X
} from "lucide-react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { signOut } from "next-auth/react";

const navItems = [
  { href: "/dashboard", label: "Minha Jornada", icon: LayoutDashboard },
  { href: "/conteudo", label: "Conteúdo", icon: BookOpen },
  { href: "/cronograma", label: "Cronograma", icon: Calendar },
  { href: "/materiais", label: "Materiais", icon: FileText },
  { href: "/cursos", label: "Cursos Extras", icon: ShoppingBag },
];

export function Sidebar() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = React.useState(false);

  return (
    <>
      {/* Mobile Toggle */}
      <div className="lg:hidden fixed top-4 left-4 z-50">
        <Button 
          variant="outline" 
          size="icon" 
          onClick={() => setIsOpen(!isOpen)}
          className="bg-white border-neutral-gray-300"
        >
          {isOpen ? <X /> : <Menu />}
        </Button>
      </div>

      {/* Sidebar Overlay */}
      {isOpen && (
        <div 
          className="fixed inset-0 bg-black/50 z-40 lg:hidden" 
          onClick={() => setIsOpen(false)}
        />
      )}

      {/* Sidebar Container */}
      <aside className={cn(
        "fixed inset-y-0 left-0 z-40 w-[260px] bg-white border-r border-neutral-gray-100 flex flex-col transition-transform duration-300 transform lg:translate-x-0",
        isOpen ? "translate-x-0" : "-translate-x-full"
      )}>
        {/* Logo Section */}
        <div className="p-6 border-b border-neutral-gray-100 flex items-center">
          <div className="mr-2 flex h-8 w-8 items-center justify-center rounded-full bg-[#E65A28]">
            <ChevronRight className="h-5 w-5 text-white" />
          </div>
          <span className="font-bold tracking-tight text-[#1A1A1A] text-sm">ONBOARDING MARIA</span>
        </div>

        {/* Navigation Section */}
        <nav className="flex-1 p-4 space-y-1">
          {navItems.map((item) => {
            const ActiveIcon = item.icon;
            const isActive = pathname === item.href;
            
            return (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setIsOpen(false)}
                className={cn(
                  "flex items-center space-x-3 px-4 py-3 rounded-lg text-sm font-medium transition-colors",
                  isActive 
                    ? "bg-[#EDE7FB] text-[#6135D7]" 
                    : "text-neutral-gray-500 hover:bg-neutral-gray-50 hover:text-[#1A1A1A]"
                )}
              >
                <ActiveIcon className={cn("h-5 w-5", isActive ? "text-[#6135D7]" : "text-neutral-gray-500")} />
                <span>{item.label}</span>
                {isActive && (
                    <div className="ml-auto w-1.5 h-1.5 rounded-full bg-[#6135D7]" />
                )}
              </Link>
            );
          })}
        </nav>

        {/* Footer Section (User Profile & Logout) */}
        <div className="p-4 border-t border-neutral-gray-100">
          <Button
            variant="ghost"
            onClick={() => signOut()}
            className="w-full justify-start text-neutral-gray-500 hover:text-[#DC2626] hover:bg-red-50"
          >
            <LogOut className="mr-3 h-5 w-5" />
            Sair da Conta
          </Button>
        </div>
      </aside>
    </>
  );
}
