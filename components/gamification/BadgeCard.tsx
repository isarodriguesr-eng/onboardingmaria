import * as React from "react";
import { Lock, Award } from "lucide-react";
import { cn } from "@/lib/utils";

interface BadgeCardProps {
  name: string;
  description: string;
  icon: React.ReactNode;
  isUnlocked?: boolean;
  xpReward?: number;
}

export function BadgeCard({ name, description, icon, isUnlocked = false, xpReward }: BadgeCardProps) {
  return (
    <div className={cn(
      "relative group flex flex-col items-center p-4 rounded-xl border transition-all duration-300",
      isUnlocked 
        ? "bg-white border-[#EDE7FB] shadow-sm hover:shadow-md hover:-translate-y-1" 
        : "bg-neutral-gray-50/50 border-neutral-gray-100 opacity-60 grayscale"
    )}>
      {!isUnlocked && (
        <div className="absolute top-2 right-2">
          <Lock className="h-3 w-3 text-neutral-gray-400" />
        </div>
      )}
      
      <div className={cn(
        "h-12 w-12 rounded-full flex items-center justify-center mb-3 transition-transform duration-500 group-hover:scale-110",
        isUnlocked ? "bg-[#EDE7FB] text-[#6135D7]" : "bg-neutral-gray-200 text-neutral-gray-500"
      )}>
        {icon}
      </div>

      <div className="text-center">
        <p className="text-xs font-bold text-[#1A1A1A] leading-tight">{name}</p>
        <p className="text-[10px] text-neutral-gray-500 mt-1 line-clamp-2">{description}</p>
      </div>

      {isUnlocked && xpReward && (
        <div className="mt-3 bg-[#E65A28]/10 text-[#E65A28] text-[9px] font-bold px-2 py-0.5 rounded-full">
          +{xpReward} XP
        </div>
      )}
    </div>
  );
}
