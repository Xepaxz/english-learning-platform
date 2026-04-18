# Workspace

## Overview

pnpm workspace monorepo using TypeScript. Each package manages its own dependencies.

## Stack

- **Monorepo tool**: pnpm workspaces
- **Node.js version**: 24
- **Package manager**: pnpm
- **TypeScript version**: 5.9
- **API framework**: Express 5
- **Database**: PostgreSQL + Drizzle ORM
- **Validation**: Zod (`zod/v4`), `drizzle-zod`
- **API codegen**: Orval (from OpenAPI spec)
- **Build**: esbuild (CJS bundle)

## Key Commands

- `pnpm run typecheck` — full typecheck across all packages
- `pnpm run build` — typecheck + build all packages
- `pnpm --filter @workspace/api-spec run codegen` — regenerate API hooks and Zod schemas from OpenAPI spec
- `pnpm --filter @workspace/db run push` — push DB schema changes (dev only)
- `pnpm --filter @workspace/api-server run dev` — run API server locally

## Artifacts

### english-learning (Teacher Polen - English Learning Platform)
- **Type**: react-vite
- **Preview path**: /
- **Directory**: artifacts/english-learning
- **Description**: Full English learning platform website for Teacher Polen. Includes Home, Courses, Shop, About, and Contact pages. Features real student testimonials from international students (Vietnam, Japan, Korea, Taiwan, Philippines). No backend — frontend-only.
- **Pages**: Home (/), Courses (/courses), Shop (/shop), About (/about), Contact (/contact)

See the `pnpm-workspace` skill for workspace structure, TypeScript setup, and package details.
