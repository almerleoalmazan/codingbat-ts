import { intMax } from '../../app/Warmup1/intMax';

describe('Warmup-1 > intMax', () => {
  it.each([
    [3, 1, 2, 3],
    [3, 1, 3, 2],
    [3, 3, 2, 1],
    [9, 9, 3, 3],
    [9, 3, 9, 3],
    [9, 3, 3, 9],
    [8, 8, 2, 3],
    [-1, -3, -1, -2],
    [6, 6, 2, 5],
    [6, 5, 6, 2],
    [6, 5, 2, 6],
  ])(
    'should return %i when the input values are %i, %i, and %i',
    (expected, a, b, c) => {
      expect(intMax(a, b, c)).toBe(expected);
    },
  );
});
