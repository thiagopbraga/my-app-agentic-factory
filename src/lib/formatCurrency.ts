const brl = new Intl.NumberFormat('pt-BR', {
  style: 'currency',
  currency: 'BRL',
});

/**
 * Formata um número como moeda brasileira (BRL).
 * Ex.: 1234.5 → "R$ 1.234,50"
 *
 * O Intl usa espaço não separável (U+00A0) após "R$"; normalizamos para
 * espaço comum para saída previsível.
 */
export function formatCurrency(valor: number): string {
  if (!Number.isFinite(valor)) {
    throw new RangeError(`formatCurrency: valor inválido (${valor})`);
  }
  return brl.format(valor).replace(/ /g, ' ');
}
