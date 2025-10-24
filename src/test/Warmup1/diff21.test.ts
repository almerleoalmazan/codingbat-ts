import { diff21 } from '../../app/Warmup1/diff21';

describe('Warmup-1 > diff21', () => {
  it.each([
    [2, 19],
    [11, 10],
    [0, 21],
    [2, 22],
    [8, 25],
    [18, 30],
    [21, 0],
    [20, 1],
    [19, 2],
    [22, -1],
    [23, -2],
    [58, 50],
  ])('should return %i when the value is %i', (expected, input) => {
    const result = diff21(input);
    expect(result).toBe(expected);
  });
});
