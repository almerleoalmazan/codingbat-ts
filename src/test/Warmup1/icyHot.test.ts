import { icyHot } from '../../app/Warmup1/icyHot';

describe('Warmup-1 > icyHot', () => {
  it.each([
    [true, 120, -1],
    [true, -1, 120],
    [false, 2, 120],
    [false, -1, 100],
    [false, -2, -2],
    [false, 120, 120],
  ])(
    'should return "%s" when the input value is %i and %i',
    (expected, temp1, temp2) => {
      expect(icyHot(temp1, temp2)).toBe(expected);
    },
  );
});
