import { close10 } from '../../app/Warmup1/close10';

describe('Warmup-1 > close10', () => {
  it.each([
    [8, 8, 13],
    [8, 13, 8],
    [0, 13, 7],
    [0, 7, 13],
    [9, 9, 13],
    [8, 13, 8],
    [10, 10, 12],
    [10, 11, 10],
    [5, 5, 21],
    [0, 0, 20],
    [0, 0, 20],
    [0, 10, 10],
  ])(
    'should return %i when the input values are %i and %i',
    (expected, a, b) => {
      expect(close10(a, b)).toBe(expected);
    },
  );
});
