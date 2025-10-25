import { hasTeen } from '../../app/Warmup1/hasTeen';

describe('Warmup-1 > hasTeen', () => {
  it.each([
    [true, 13, 20, 10],
    [true, 20, 19, 10],
    [true, 20, 10, 13],
    [false, 1, 20, 12],
    [true, 19, 20, 12],
    [true, 12, 20, 19],
    [false, 12, 9, 20],
    [true, 12, 18, 20],
    [true, 14, 2, 20],
    [false, 4, 2, 20],
    [false, 11, 22, 22],
  ])(
    'should return "%s" when the value inputs are %i, %i, and %i',
    (expected, a, b, c) => {
      expect(hasTeen(a, b, c)).toBe(expected);
    },
  );
});
