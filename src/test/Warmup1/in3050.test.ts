import { in3050 } from '../../app/Warmup1/in3050';

describe('Warmup-1 > in3050', () => {
  it.each([
    [true, 30, 31],
    [false, 30, 41],
    [true, 40, 50],
    [false, 40, 51],
    [false, 39, 50],
    [false, 50, 39],
    [true, 40, 39],
    [true, 49, 48],
    [true, 50, 40],
    [false, 50, 51],
    [true, 35, 36],
    [false, 35, 45],
  ])('should return "%s" when the values are %i and %i', (expected, a, b) => {
    expect(in3050(a, b)).toBe(expected);
  });
});
