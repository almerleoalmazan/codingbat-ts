import { stringE } from '../../app/Warmup1/stringE';

describe('Warmup-1 > stringE', () => {
  it.each([
    ['Hello', true],
    ['Heelle', true],
    ['Heelele', false],
    ['Hll', false],
    ['e', true],
    ['', false],
  ])('.stringE("%s") --> %s', (input, expected) => {
    expect(stringE(input)).toBe(expected);
  });
});
