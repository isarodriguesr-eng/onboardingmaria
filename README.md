# Onboarding Maria — MVP Premium

Plataforma de jornada de onboarding técnico e implantação, inspirada na estética Mereo. Focada em experiência do usuário, gamificação e gestão ágil de projetos de implementação.

## 🚀 Tecnologias

- **Framework**: [Next.js 15](https://nextjs.org/) (App Router)
- **Database**: [Prisma](https://www.prisma.io/) + PostgreSQL (Neon.tech)
- **Autenticação**: [Auth.js v5](https://authjs.dev/) (Google & Magic Link)
- **UI & Styling**: [Tailwind CSS 4](https://tailwindcss.com/), [shadcn/ui](https://ui.shadcn.com/), [Framer Motion](https://www.framer.com/motion/)
- **Design System**: Tokens customizados (Laranja Mereo & Roxo)

## 🎨 Design System

O projeto utiliza um sistema de tokens em `design-system/tokens.ts`. Para sincronizar alterações com o global.css, execute:
```bash
npm run tokens
```

## 🛠️ Configuração Local

1. Instale as dependências:
   ```bash
   npm install
   ```

2. Configure as variáveis de ambiente:
   Copie `.env.example` para `.env` e preencha as chaves.

3. Sincronize o banco de dados:
   ```bash
   npx prisma db push
   ```

4. Inicie o servidor:
   ```bash
   npm run dev
   ```

## 💎 Estratégia "Custo Zero"

Para manter o projeto sem custos operacionais:
- **Hosting**: Vercel (Hobby Plan)
- **Database**: Neon.tech (Free Tier - 512MB)
- **E-mails**: Resend (Free - 100 e-mails/dia)
- **Auth**: Google Cloud (Free Tier)

## 📈 Roadmap MVP
- [x] Landing Page Premium
- [x] Dashboard de Jornada com Stepper
- [x] Gamificação (Badges & XP)
- [x] Painel Admin CX (Gestão de Membros)
- [x] Repositório de Materiais
- [x] Vitrine de Cursos Extras
- [ ] Integração real com DB para progresso dinâmico

---
Desenvolvido com ❤️ pelo time de design e engenharia.
