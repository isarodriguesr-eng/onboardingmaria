# CLAUDE.md — Onboarding Maria Guide

## Technical Stack
- Next.js 15 (App Router), TypeScript, Tailwind CSS 4
- Prisma (ORM), Auth.js v5 (Authentication)
- Lucide React (Icons), Framer Motion (Animations)

## Core Commands
- `npm run dev`: Start dev server
- `npm run build`: Production build
- `npm run tokens`: Sync TS Design Tokens to `globals.css`
- `npx prisma generate`: Regenerate Prisma Client
- `npx prisma db push`: Push schema changes to DB

## Development Patterns
- **Directory Structure**: 
  - `app/(auth)`: Restricted member pages
  - `app/(admin)`: Restricted CX team pages
  - `app/(public)`: Public pages (Landing, Login)
  - `components/journey`: Stepper and Progress components
  - `components/gamification`: Badges and XP components
- **Styling**: Use Tailwind CSS 4 via `@apply` or inline classes. Prefer tokens from `globals.css`.
- **Auth**: Use `auth()` for server-side session checks and `useSession()` for client-side.
- **Admin**: First user to register in the system automatically receives the `ADMIN` role.

## Design System
- Tokens are defined in `design-system/tokens.ts`.
- Utility functions in `design-system/utils.ts`.
- Generator script in `design-system/generate-css.ts`.
