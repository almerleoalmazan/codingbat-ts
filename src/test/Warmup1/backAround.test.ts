import { backAround } from '../../app/Warmup1/backAround';

describe('Warmup-1 > backAround', () => {
  it.each([
    ['tcatt', 'cat'],
    ['oHelloo', 'Hello'],
    ['aaa', 'a'],
    ['cabcc', 'abc'],
    ['dreadd', 'read'],
    ['obooo', 'boo'],
  ])('should return "%s" from "%s" input', (expected, input) => {
    expect(backAround(input)).toBe(expected);
  });
});
