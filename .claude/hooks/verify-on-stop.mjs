import { execSync } from 'node:child_process';
import { readFileSync } from 'node:fs';

const input = JSON.parse(readFileSync(0, 'utf8'));

// Evita loop infinito: se já forçamos uma continuação, deixa parar.
if (input.stop_hook_active) process.exit(0);

// Se nada mudou (ex.: Claude só respondeu uma pergunta), não roda nada.
const changed = execSync('git status --porcelain', { encoding: 'utf8' }).trim();
if (!changed) process.exit(0);

try {
  execSync('pnpm verify:fast', { stdio: 'pipe', encoding: 'utf8' });
  process.exit(0);
} catch (err) {
  const output = `${err.stdout ?? ''}\n${err.stderr ?? ''}`;
  process.stderr.write(
    'pnpm verify:fast falhou. Corrija os erros abaixo antes de encerrar:\n' + output.slice(-4000),
  );
  process.exit(2);
}