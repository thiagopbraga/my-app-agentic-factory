# Minha App

Aplicação Next.js (App Router) com TypeScript strict, Tailwind e Supabase.

- **Testes:** Vitest (unitários) e Playwright (e2e)
- **Banco:** Supabase, rodando localmente via CLI

## Pré-requisitos

- **Node.js 24**: a versão está em `.nvmrc` (com nvm, rode `nvm use`)
- **pnpm**: a versão está fixada em `packageManager` no `package.json`. Rode `corepack enable` para usá-la automaticamente. Não use npm, yarn nem bun.
- **Docker**: necessário para o Supabase local

## Primeiros passos

```bash
# 1. Instale as dependências
pnpm install

# 2. Crie o arquivo de variáveis de ambiente
cp .env.example .env.local

# 3. Suba o Supabase local (Docker precisa estar rodando)
pnpm supabase start
```

Rode `pnpm supabase status` e copie dois valores da saída para o `.env.local`: `API_URL` e `ANON_KEY`.

```bash
NEXT_PUBLIC_SUPABASE_URL=http://127.0.0.1:54321
NEXT_PUBLIC_SUPABASE_ANON_KEY=<valor de ANON_KEY>
```

```bash
# 4. Rode a aplicação
pnpm dev
```

Acesse [http://localhost:3000](http://localhost:3000).

## Comandos

| Comando                              | O que faz                                           |
| ------------------------------------ | --------------------------------------------------- |
| `pnpm dev`                           | Servidor de desenvolvimento                         |
| `pnpm verify:fast`                   | Lint + formatação + typecheck + testes unitários    |
| `pnpm verify`                        | `verify:fast` + build + e2e (o mesmo que o CI roda) |
| `pnpm test` / `pnpm test:watch`      | Testes unitários (Vitest)                           |
| `pnpm test:e2e`                      | Testes e2e (Playwright)                             |
| `pnpm format`                        | Formata o código com o Prettier                     |
| `pnpm supabase migration new <nome>` | Cria uma nova migration                             |
| `pnpm supabase db reset`             | Recria o banco local e aplica todas as migrations   |

### Testes e2e

Na primeira vez, instale o Chromium do Playwright:

```bash
pnpm exec playwright install chromium
```

No Linux/WSL também faltam bibliotecas do sistema (erro `libglib-2.0.so.0: cannot open shared object file`). Instale com:

```bash
sudo pnpm exec playwright install-deps chromium
```

## Estrutura

```
src/app/              rotas e páginas
src/components/       componentes de UI
src/lib/              lógica pura, sem React (cada x.ts tem um x.test.ts ao lado)
e2e/                  testes de fluxo do usuário (Playwright)
supabase/migrations/  schema versionado
```

## Contribuindo

As regras do projeto ficam no [`AGENTS.md`](./AGENTS.md): Definition of Done, o que é proibido, convenções de commit e de branch. Em resumo:

- trabalhe em uma branch e abra um PR; nunca commite direto na `main`;
- use commits no formato [Conventional Commits](https://www.conventionalcommits.org/pt-br/) (`feat:`, `fix:`, `chore:`, `docs:`...);
- todo comportamento novo precisa de teste;
- `pnpm verify:fast` precisa passar;
- nunca edite uma migration que já foi commitada; crie uma nova.
