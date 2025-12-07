import { minCat } from '../../app/String1/minCat';

describe('String-1 > minCat', () => {
  it.each([
    ['Hello', 'Hi', 'loHi'],
    ['Hello', 'java', 'ellojava'],
    ['java', 'Hello', 'javaello'],
    ['abc', 'x', 'cx'],
    ['x', 'abc', 'xc'],
    ['abc', '', ''],
  ])('.minCat("%s") would return "%s"', (a, b, expected) => {
    expect(minCat(a, b)).toBe(expected);
  });
});
