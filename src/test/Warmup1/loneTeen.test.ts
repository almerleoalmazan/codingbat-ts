import { loneTeen } from '../../app/Warmup1/loneTeen';

describe('Warmup-1 > loneTeen', () => {
  it.each([
    [true, 13, 99],
    [true, 21, 19],
    [false, 13, 13],
    [true, 14, 20],
    [true, 20, 15],
    [false, 16, 17],
    [true, 16, 9],
    [false, 16, 18],
    [false, 13, 19],
    [true, 13, 20],
    [true, 6, 18],
    [true, 99, 13],
    [false, 99, 99],
  ])(
    'should return "%s" when the input value is %i and %i',
    (expected, a, b) => {
      expect(loneTeen(a, b)).toBe(expected);
    },
  );
});
