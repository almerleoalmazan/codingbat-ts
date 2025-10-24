import { missingChar } from '../../app/Warmup1/missingChar';

describe('Warmup-1 > missingChar', () => {
  it.each([
    ['ktten', 'kitten', 1],
    ['itten', 'kitten', 0],
    ['kittn', 'kitten', 4],
    ['i', 'Hi', 0],
    ['H', 'Hi', 1],
    ['ode', 'code', 0],
    ['cde', 'code', 1],
    ['coe', 'code', 2],
    ['cod', 'code', 3],
    ['chocolat', 'chocolate', 8],
  ])('should return "%s" when the input is "%s" and %i', (expected, str, n) => {
    expect(missingChar(str, n)).toBe(expected);
  });
});
