import { withoutEnd2 } from '../../app/String1/withoutEnd2';

describe('String-1 > withoutEnd2', () => {
  it.each([
    ['Hello', 'ell'],
    ['abc', 'b'],
    ['ab', ''],
    ['a', ''],
    ['', ''],
    ['coldy', 'old'],
    ['java code', 'ava cod'],
  ])('.withoutEnd2("%s") would return "%s"', (str, expected) => {
    expect(withoutEnd2(str)).toBe(expected);
  });
});
