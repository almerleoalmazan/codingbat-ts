import { in1020 } from '../../app/Warmup1/in1020';

describe('Warmup-1 > in1020', () => {
  it.each([
    [true, 12, 99],
    [true, 21, 12],
    [false, 8, 99],
    [true, 99, 10],
    [true, 20, 20],
    [false, 21, 21],
    [false, 9, 9],
  ])(
    'should return "%s" when the input value is %i and %i',
    (expected, a, b) => {
      expect(in1020(a, b)).toBe(expected);
    },
  );
});
