import { doubleX } from '../../app/Warmup2/doubleX';

describe('Warmup-2 > doubleX', () => {
  it.each([
    ['axxbb', true],
    ['axaxax', false],
    ['xxxxx', true],
    ['xaxxx', false],
    ['aaaax', false],
    ['', false],
    ['abc', false],
    ['x', false],
    ['xx', true],
    ['xax', false],
    ['xaxx', false],
  ])('.doubleX("%s") would return %s', (str, expected) => {
    expect(doubleX(str)).toBe(expected);
  });
});
