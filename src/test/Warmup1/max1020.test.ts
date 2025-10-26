import { max1020 } from '../../app/Warmup1/max1020';

describe('Warmup-1 > max1020', () => {
  it.each([
    [19, 11, 19],
    [19, 19, 11],
    [11, 11, 9],
    [0, 9, 21],
    [10, 10, 21],
    [10, 21, 10],
    [11, 9, 11],
    [10, 23, 10],
    [20, 20, 10],
    [20, 7, 20],
    [17, 17, 16],
  ])(
    'should return %i when the input values are %i and %i',
    (expected, a, b) => {
      expect(max1020(a, b)).toBe(expected);
    },
  );
});
