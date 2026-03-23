import * as React from "react";
import { Sidebar } from "@/components/layout/Sidebar";

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex min-h-screen bg-neutral-gray-50">
      <Sidebar />
      <main className="flex-1 lg:ml-[260px] p-4 lg:p-8 pt-20 lg:pt-8 transition-all duration-300">
        <div className="max-w-5xl mx-auto">
          {children}
        </div>
      </main>
    </div>
  );
}
