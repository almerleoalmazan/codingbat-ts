import { makes10 } from '../../app/Warmup1/makes10';

describe('Warmup-1 > makes10', () => {
  it.each([
    [true, 9, 10],
    [false, 9, 9],
    [true, 1, 9],
    [true, 10, 1],
    [true, 10, 10],
    [true, 8, 2],
    [false, 8, 3],
    [true, 10, 42],
    [true, 12, -2],
  ])('should return %s when the value is %i and %i', (expected, a, b) => {
    const result = makes10(a, b);
    expect(result).toBe(expected);
  });
});
