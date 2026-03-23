"use client";

import * as React from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import { Zap } from "lucide-react";

interface XPBarProps {
  currentXP: number;
  nextLevelXP: number;
  level: string;
  className?: string;
}

export function XPBar({ currentXP, nextLevelXP, level, className }: XPBarProps) {
  const percentage = Math.min((currentXP / nextLevelXP) * 100, 100);

  return (
    <div className={cn("p-4 rounded-xl bg-[#1A1A1A] text-white shadow-xl", className)}>
      <div className="flex items-center justify-between mb-3">
        <div className="flex items-center space-x-2">
            <div className="h-6 w-6 rounded bg-[#6135D7] flex items-center justify-center">
                <Zap className="h-3.5 w-3.5 fill-white" />
            </div>
            <div className="flex flex-col">
                <span className="text-[8px] font-bold opacity-60 uppercase tracking-widest leading-none">Status</span>
                <span className="text-xs font-bold italic tracking-tight">{level}</span>
            </div>
        </div>
        <div className="text-right">
            <span className="text-[8px] font-bold opacity-60 uppercase tracking-widest leading-none">Progresso</span>
            <div className="text-xs font-bold">{currentXP} <span className="opacity-40">/ {nextLevelXP} XP</span></div>
        </div>
      </div>

      <div className="h-1.5 w-full bg-white/10 rounded-full overflow-hidden">
        <motion.div
          initial={{ width: 0 }}
          animate={{ width: `${percentage}%` }}
          transition={{ duration: 1.5, ease: "circOut" }}
          className="h-full bg-[#6135D7] shadow-[0_0_8px_rgba(97,53,215,0.8)]"
        />
      </div>
      
      <p className="text-[9px] mt-2 opacity-50 text-center">
        Complete tarefas para subir de nível e desbloquear benefícios exclusivos.
      </p>
    </div>
  );
}
