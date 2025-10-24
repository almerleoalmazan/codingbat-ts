import { sumDouble } from '../../app/Warmup1/sumDouble';

describe('Warmup-1 > sumDouble', () => {
  it.each([
    [3, 1, 2],
    [5, 3, 2],
    [8, 2, 2],
    [-1, -1, 0],
    [12, 3, 3],
    [0, 0, 0],
    [1, 0, 1],
    [7, 3, 4],
  ])('should return %s when adding %i and %i', (expected, a, b) => {
    const result = sumDouble(a, b);
    expect(result).toBe(expected);
  });
});
