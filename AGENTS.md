# Minha App

## Stack

Next.js (App Router) + TypeScript strict + Tailwind. Testes: Vitest (unit) e Playwright (e2e). Banco: Supabase (local via `pnpm supabase start`).

## Comandos

- `pnpm dev` — roda local
- `pnpm verify:fast` — lint + format + typecheck + unit (rode após cada mudança)
- `pnpm verify` — completo, igual ao CI
- `pnpm supabase migration new <nome>` / `pnpm supabase db reset`

## Estrutura

- `src/app/` — rotas e páginas
- `src/components/` — componentes de UI
- `src/lib/` — lógica pura, sem React (sempre com teste ao lado: `x.ts` + `x.test.ts`)
- `e2e/` — testes de fluxo do usuário
- `supabase/migrations/` — schema versionado (nunca edite migration já commitada)

## Definition of Done

1. Todo comportamento novo tem teste (unit em `src/lib`, e2e se for fluxo de tela).
2. `pnpm verify:fast` passa.
3. Commits no formato Conventional Commits (`feat:`, `fix:`, `chore:`...).
4. Trabalhe em branch; nunca commite direto na main.

## Proibido

- Desabilitar regra de lint, usar `any` ou `@ts-ignore` para fazer passar.
- Apagar ou pular testes que estão falhando.
- Ler ou alterar `.env.local`.
- Adicionar dependência sem justificar no PR.

<!-- BEGIN:nextjs-agent-rules -->

## This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` (resolved from this file's directory; in monorepos the `next` package may not be visible from the repo root) before writing any code. Heed deprecation notices.

This block is written and re-added by `next dev` — verify at `node_modules/next/dist/server/lib/generate-agent-files.js`. Removing it from a diff only re-creates the uncommitted change; committing it with your work keeps the tree clean.

<!-- END:nextjs-agent-rules -->
