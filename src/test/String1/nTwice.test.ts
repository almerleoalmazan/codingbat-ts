import { nTwice } from '../../app/String1/nTwice';

describe('String-1 > nTwice', () => {
  it.each([
    ['Hello', 2, 'Helo'],
    ['Chocolate', 3, 'Choate'],
    ['Chocolate', 1, 'Ce'],
    ['Chocolate', 0, ''],
    ['Hello', 4, 'Hellello'],
    ['Code', 4, 'CodeCode'],
    ['Code', 2, 'Code'],
  ])('.nTwice("%s", %d) would return "%s"', (str, n, expected) => {
    expect(nTwice(str, n)).toBe(expected);
  });
});
