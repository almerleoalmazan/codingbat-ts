import { deFront } from '../../app/String1/deFront';

describe('String-1 > deFront', () => {
  it.each([
    ['Hello', 'llo'],
    ['java', 'va'],
    ['away', 'aay'],
    ['axy', 'ay'],
    ['abc', 'abc'],
    ['xby', 'by'],
    ['ab', 'ab'],
    ['ax', 'a'],
    ['axb', 'ab'],
    ['aaa', 'aa'],
    ['xbc', 'bc'],
    ['bbb', 'bb'],
    ['bazz', 'zz'],
    ['ba', ''],
    ['abxyz', 'abxyz'],
    ['hi', ''],
    ['his', 's'],
    ['xz', ''],
    ['zzz', 'z'],
  ])('.deFront("%s") would return "%s"', (str, expected) => {
    expect(deFront(str)).toBe(expected);
  });
});
