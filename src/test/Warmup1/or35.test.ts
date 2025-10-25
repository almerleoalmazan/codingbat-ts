import { or35 } from '../../app/Warmup1/or35';

describe('Warmup-1 > or35', () => {
  it.each([
    [true, 3],
    [true, 10],
    [false, 8],
    [true, 15],
    [true, 5],
    [true, 9],
    [false, 4],
    [false, 7],
    [true, 6],
    [false, 17],
    [true, 18],
    [false, 29],
    [true, 20],
    [true, 21],
    [false, 22],
    [true, 45],
    [true, 99],
    [true, 100],
    [false, 101],
    [false, 121],
    [false, 122],
    [true, 123],
  ])('should return %s when the input value is %i', (expected, input) => {
    expect(or35(input)).toBe(expected);
  });
});
