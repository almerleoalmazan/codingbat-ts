import { lastChars } from '../../app/String1/lastChars';

describe('String-1 > lastChars', () => {
  it.each([
    ['last', 'chars', 'ls'],
    ['yo', 'java', 'ya'],
    ['hi', '', 'h@'],
    ['', 'hello', '@o'],
    ['', '', '@@'],
    ['kitten', 'hi', 'ki'],
    ['k', 'zip', 'kp'],
    ['kitten', '', 'k@'],
    ['kitten', 'zip', 'kp'],
  ])('.lastChars("%s", "%s") would return "%s"', (a, b, expected) => {
    expect(lastChars(a, b)).toBe(expected);
  });
});
