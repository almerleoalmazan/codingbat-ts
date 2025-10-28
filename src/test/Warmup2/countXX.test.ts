import { countXX } from '../../app/Warmup2/countXX';

describe('Warmup-2 > countXX', () => {
  it.each([
    ['abcxx', 1],
    ['xxx', 2],
    ['xxxx', 3],
    ['abc', 0],
    ['Hello there', 0],
    ['Hexxo thxxe', 2],
    ['', 0],
    ['Kittens', 0],
    ['Kittensxxx', 2],
  ])('.countXX("%s") would return %i', (str, expected) => {
    expect(countXX(str)).toBe(expected);
  });
});
