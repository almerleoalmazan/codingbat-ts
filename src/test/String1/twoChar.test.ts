import { twoChar } from '../../app/String1/twoChar';

describe('String-1 > twoChar', () => {
  it.each([
    ['java', 0, 'ja'],
    ['java', 2, 'va'],
    ['java', 3, 'ja'],
    ['java', 4, 'ja'],
    ['java', -1, 'ja'],
    ['Hello', 0, 'He'],
    ['Hello', 1, 'el'],
    ['Hello', 99, 'He'],
    ['Hello', 3, 'lo'],
    ['Hello', 4, 'He'],
    ['Hello', 5, 'He'],
    ['Hello', -7, 'He'],
    ['Hello', 6, 'He'],
    ['Hello', -1, 'He'],
    ['yay', 0, 'ya'],
  ])('.twoChar("%s", %d) would return "%s"', (str, index, expected) => {
    expect(twoChar(str, index)).toBe(expected);
  });
});
