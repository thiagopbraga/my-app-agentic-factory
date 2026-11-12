import { describe, it, expect } from 'vitest';
import { slugify } from './slugify';

describe('slugify', () => {
  it('remove acentos e espaços', () => {
    expect(slugify('Olá Mundo Agêntico')).toBe('ola-mundo-agentico');
  });
});