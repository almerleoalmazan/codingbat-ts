import { front3 } from '../../app/Warmup1/front3';

describe('Warmup-1 > front3', () => {
  it.each([
    ['JavJavJav', 'Java'],
    ['ChoChoCho', 'Chocolate'],
    ['abcabcabc', 'abc'],
    ['abcabcabc', 'abcXYZ'],
    ['ababab', 'ab'],
    ['aaa', 'a'],
    ['', ''],
  ])('should return "%s" from first 3 chars of "%s"', (expected, input) => {
    expect(front3(input)).toBe(expected);
  });
});
