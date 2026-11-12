import { describe, it, expect } from 'vitest';
import { formatCurrency } from './formatCurrency';

describe('formatCurrency', () => {
  it('formata com separador de milhar e duas casas decimais', () => {
    expect(formatCurrency(1234.5)).toBe('R$ 1.234,50');
  });

  it('formata zero', () => {
    expect(formatCurrency(0)).toBe('R$ 0,00');
  });

  it('formata centavos', () => {
    expect(formatCurrency(0.99)).toBe('R$ 0,99');
  });

  it('formata milhões', () => {
    expect(formatCurrency(1234567.89)).toBe('R$ 1.234.567,89');
  });

  it('arredonda para duas casas decimais', () => {
    expect(formatCurrency(10.005)).toBe('R$ 10,01');
    expect(formatCurrency(10.004)).toBe('R$ 10,00');
  });

  it('formata valores negativos', () => {
    expect(formatCurrency(-1234.5)).toBe('-R$ 1.234,50');
  });

  it('usa espaço comum (não U+00A0) após o símbolo', () => {
    expect(formatCurrency(1)).not.toContain(' ');
  });

  it('lança erro para NaN e Infinity', () => {
    expect(() => formatCurrency(NaN)).toThrow(RangeError);
    expect(() => formatCurrency(Infinity)).toThrow(RangeError);
  });
});
