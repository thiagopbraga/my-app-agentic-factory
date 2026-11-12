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