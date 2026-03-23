import { Suspense } from "react";
import Image from "next/image";
import Link from "next/link";
import { Metadata } from "next";
import { UserAuthForm } from "@/components/login/user-auth-form";
import { ChevronRight } from "lucide-react";

export const metadata: Metadata = {
  title: "Entrar | Onboarding Maria",
  description: "Faça login em sua jornada de implantação.",
};

export default function LoginPage() {
  return (
    <div className="container relative h-screen flex-col items-center justify-center md:grid lg:max-w-none lg:grid-cols-2 lg:px-0">
      <div className="relative hidden h-full flex-col bg-muted p-10 text-white dark:border-r lg:flex">
        <div className="absolute inset-0 bg-[#1A1A1A]" />
        <div className="relative z-20 flex items-center text-lg font-medium">
          <div className="mr-2 flex h-8 w-8 items-center justify-center rounded-full bg-[#E65A28]">
            <ChevronRight className="h-5 w-5 text-white" />
          </div>
          <span className="font-bold tracking-tight text-white">ONBOARDING MARIA</span>
        </div>
        <div className="relative z-20 mt-auto">
          <blockquote className="space-y-2">
            <p className="text-lg font-medium">
              &ldquo;A implantação do Maria foi o divisor de águas para nossa operação. Ter visibilidade clara de cada etapa nos deu a segurança necessária para escalar.&rdquo;
            </p>
            <footer className="text-sm opacity-80">CX Manager, Startup Parceira</footer>
          </blockquote>
        </div>
        <div className="absolute bottom-10 left-10 right-10 z-20 flex justify-between grayscale opacity-30 pointer-events-none">
          {/* Decorative elements representing partnerships */}
          <div className="font-bold text-2xl tracking-tighter">MEREO</div>
          <div className="font-bold text-2xl tracking-tighter">MARIA</div>
        </div>
      </div>
      <div className="lg:p-8">
        <div className="mx-auto flex w-full flex-col justify-center space-y-6 sm:w-[350px]">
          <div className="flex flex-col space-y-2 text-center">
            <h1 className="text-3xl font-bold tracking-tight text-[#1A1A1A]">
              Bem-vindo de volta
            </h1>
            <p className="text-sm text-neutral-gray-500">
              Escolha seu método de acesso para continuar sua jornada
            </p>
          </div>
          <Suspense fallback={<div className="h-40 w-full animate-pulse bg-neutral-gray-100 rounded-lg" />}>
            <UserAuthForm />
          </Suspense>
          <p className="px-8 text-center text-sm text-neutral-gray-500">
            Ao clicar em continuar, você concorda com nossos{" "}
            <Link
              href="/terms"
              className="underline underline-offset-4 hover:text-[#6135D7]"
            >
              Termos de Serviço
            </Link>{" "}
            e{" "}
            <Link
              href="/privacy"
              className="underline underline-offset-4 hover:text-[#6135D7]"
            >
              Política de Privacidade
            </Link>
            .
          </p>
        </div>
      </div>
    </div>
  );
}
