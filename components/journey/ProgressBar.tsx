"use client";

import * as React from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface ProgressBarProps {
  progress: number; // 0 to 100
  label?: string;
  showPercentage?: boolean;
  className?: string;
}

export function ProgressBar({ progress, label, showPercentage = true, className }: ProgressBarProps) {
  const clampedProgress = Math.min(Math.max(progress, 0), 100);

  return (
    <div className={cn("w-full space-y-2", className)}>
      <div className="flex justify-between items-end">
        {label && <span className="text-xs font-bold text-[#1A1A1A] uppercase tracking-wider">{label}</span>}
        {showPercentage && <span className="text-xs font-bold text-[#6135D7]">{clampedProgress}%</span>}
      </div>
      <div className="h-2 w-full bg-neutral-gray-100 rounded-full overflow-hidden">
        <motion.div
          initial={{ width: 0 }}
          animate={{ width: `${clampedProgress}%` }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="h-full bg-gradient-to-r from-[#6135D7] to-[#7B52E5]"
        />
      </div>
    </div>
  );
}
