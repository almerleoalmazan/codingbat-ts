import { hasBad } from '../../app/String1/hasBad';

describe('String-1 > hasBad', () => {
  it.each([
    ['badxx', true],
    ['xbadxx', true],
    ['xxbadxx', false],
    ['code', false],
    ['bad', true],
    ['ba', false],
    ['xba', false],
    ['xbad', true],
    ['', false],
    ['badyy', true],
  ])('.hasBad("%s") would return %s', (str, expected) => {
    expect(hasBad(str)).toBe(expected);
  });
});
