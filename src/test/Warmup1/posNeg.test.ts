import { posNeg } from '../../app/Warmup1/posNeg';

describe('Warmup-1 > posNeg', () => {
  it.each([
    [1, -1, false, true],
    [-1, 1, false, true],
    [-4, -5, true, true],
    [-4, -5, false, false],
    [-4, 5, true, false],
    [1, 1, false, false],
    [-1, -1, false, false],
    [1, -1, true, false],
    [-1, 1, true, false],
    [1, 1, true, false],
    [-1, -1, true, true],
    [5, -5, false, true],
    [-6, 6, false, true],
    [-5, -6, false, false],
    [-2, -1, false, false],
    [1, 2, false, false],
    [-5, 6, true, false],
    [-5, -5, true, true],
  ])('should evaluate %i, %i, and %s as %s', (a, b, isNegative, expected) => {
    const result = posNeg(a, b, isNegative);
    expect(result).toBe(expected);
  });
});
