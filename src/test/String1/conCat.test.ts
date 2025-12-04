import { conCat } from '../../app/String1/conCat';

describe('String-1 > conCat', () => {
  it.each([
    ['abc', 'cat', 'abcat'],
    ['dog', 'cat', 'dogcat'],
    ['abc', '', 'abc'],
    ['', 'cat', 'cat'],
    ['pig', 'g', 'pig'],
    ['pig', 'doggy', 'pigdoggy'],
  ])('.conCat("%s", "%s") should return "%s"', (a, b, expected) => {
    expect(conCat(a, b)).toBe(expected);
  });
});
