import { lastDigit } from '../../app/Warmup1/lastDigit';

describe('Warmup-1 > lastDigit', () => {
  it.each([
    [7, 17, true],
    [6, 17, false],
    [3, 113, true],
    [114, 113, false],
    [114, 4, true],
    [10, 0, true],
    [11, 0, false],
  ])('.lastDigit(%i, %i) --> %s', (a, b, expected) => {
    expect(lastDigit(a, b)).toBe(expected);
  });
});
