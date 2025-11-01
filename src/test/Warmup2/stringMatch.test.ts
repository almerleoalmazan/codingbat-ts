import { stringMatch } from '../../app/Warmup2/stringMatch';

describe('Warmup-2 > stringMatch', () => {
  it.each([
    ['xxcaazz', 'xxbaaz', 3],
    ['abc', 'abc', 2],
    ['abc', 'axc', 0],
    ['hello', 'he', 1],
    ['he', 'hello', 1],
    ['h', 'hello', 0],
    ['', 'hello', 0],
    ['aabbccdd', 'abbbxxd', 1],
    ['aaxxaaxx', 'iaxxai', 3],
    ['iaxxai', 'aaxxaaxx', 3],
  ])('.stringMatch("%s", "%s") would return %i', (a, b, expected) => {
    expect(stringMatch(a, b)).toBe(expected);
  });
});
