"use client";

import * as React from "react";
import { Check, Lock, ChevronRight } from "lucide-react";
import { cn } from "@/lib/utils";

export interface Step {
  id: string;
  title: string;
  description?: string;
  status: "completed" | "current" | "locked";
  order: number;
}

interface StepperProps {
  steps: Step[];
  currentStepId?: string;
  onStepClick?: (stepId: string) => void;
}

export function Stepper({ steps, currentStepId, onStepClick }: StepperProps) {
  return (
    <div className="flex flex-col space-y-0">
      {steps.sort((a, b) => a.order - b.order).map((step, index) => {
        const isLast = index === steps.length - 1;
        const isActive = step.status === "current";
        const isCompleted = step.status === "completed";
        const isLocked = step.status === "locked";

        return (
          <div key={step.id} className="relative flex group">
            {/* Connection Line */}
            {!isLast && (
              <div
                className={cn(
                  "absolute left-4 top-10 w-[2px] h-[calc(100%-20px)] transition-colors duration-300",
                  isCompleted ? "bg-[#16A34A]" : "bg-neutral-gray-300"
                )}
              />
            )}

            {/* Step Marker */}
            <div className="flex items-start pb-10">
              <button
                onClick={() => !isLocked && onStepClick?.(step.id)}
                disabled={isLocked}
                className={cn(
                  "relative z-10 flex h-8 w-8 items-center justify-center rounded-full border-2 transition-all duration-300 shrink-0",
                  isCompleted 
                    ? "bg-[#16A34A] border-[#16A34A] text-white" 
                    : isActive 
                      ? "bg-white border-[#E65A28] text-[#E65A28] shadow-[0_0_12px_rgba(230,90,40,0.3)]" 
                      : "bg-white border-neutral-gray-300 text-neutral-gray-500"
                )}
              >
                {isCompleted ? (
                  <Check className="h-4 w-4" />
                ) : isLocked ? (
                  <Lock className="h-4 w-4" />
                ) : (
                  <span className="text-xs font-bold">{step.order}</span>
                )}
              </button>

              <div className="ml-4 flex flex-col justify-center">
                <h3
                  className={cn(
                    "text-sm font-bold transition-colors",
                    isActive ? "text-[#E65A28]" : isLocked ? "text-neutral-gray-500" : "text-[#1A1A1A]"
                  )}
                >
                  {step.title}
                </h3>
                {step.description && (
                  <p className="text-xs text-neutral-gray-500 mt-0.5">
                    {step.description}
                  </p>
                )}
              </div>
              
              {isActive && (
                <div className="ml-auto pl-4 self-center">
                  <div className="bg-[#EDE7FB] text-[#6135D7] text-[10px] font-bold px-2 py-0.5 rounded-full uppercase tracking-wider">
                    Você está aqui
                  </div>
                </div>
              )}
            </div>
          </div>
        );
      })}
    </div>
  );
}
