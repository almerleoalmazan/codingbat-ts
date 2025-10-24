import { frontBack } from '../../app/Warmup1/frontBack';

describe('Warmup-1 > frontBack', () => {
  it.each([
    ['eodc', 'code'],
    ['a', 'a'],
    ['ba', 'ab'],
    ['cba', 'abc'],
    ['', ''],
    ['ehocolatC', 'Chocolate'],
    ['aavJ', 'Java'],
    ['oellh', 'hello'],
  ])('should return %s when the input is %s', (expected, input) => {
    expect(frontBack(input)).toBe(expected);
  });
});
