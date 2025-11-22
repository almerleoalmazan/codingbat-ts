import { nonStart } from '../../app/String1/nonStart';

describe('String-1 > nonStart', () => {
  it.each([
    ['Hello', 'There', 'ellohere'],
    ['java', 'code', 'avaode'],
    ['shotl', 'java', 'hotlava'],
    ['ab', 'xy', 'by'],
    ['ab', 'x', 'b'],
    ['x', 'ac', 'c'],
    ['kit', 'kat', 'itat'],
    ['mart', 'dart', 'artart'],
  ])('.nonStart("%s", "%s") would return "%s"', (a, b, expected) => {
    expect(nonStart(a, b)).toBe(expected);
  });
});
