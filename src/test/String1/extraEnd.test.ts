import { extraEnd } from '../../app/String1/extraEnd';

describe('String-1 > extraEnd', () => {
  it.each([
    ['Hello', 'lololo'],
    ['ab', 'ababab'],
    ['Hi', 'HiHiHi'],
    ['Candy', 'dydydy'],
    ['Code', 'dedede'],
  ])('.extraEnd("%s") would return "%s"', (input, expected) => {
    expect(extraEnd(input)).toBe(expected);
  });
});
