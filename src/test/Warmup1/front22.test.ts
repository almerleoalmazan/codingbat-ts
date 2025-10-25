import { front22 } from '../../app/Warmup1/front22';

describe('Warmup-1 > front22', () => {
  it.each([
    ['kikittenki', 'kitten'],
    ['HaHaHa', 'Ha'],
    ['ababcab', 'abc'],
    ['ababab', 'ab'],
    ['aaa', 'a'],
    ['', ''],
    ['LoLogicLo', 'Logic'],
  ])('should return "%s" when the input value is "%s"', (expected, input) => {
    expect(front22(input)).toBe(expected);
  });
});
