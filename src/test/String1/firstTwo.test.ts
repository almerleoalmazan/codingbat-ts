import { firstTwo } from '../../app/String1/firstTwo';

describe('String-1 > firstTwo', () => {
  it.each([
    ['Hello', 'He'],
    ['abcdefg', 'ab'],
    ['ab', 'ab'],
    ['a', 'a'],
    ['', ''],
    ['Kitten', 'Ki'],
    ['hi', 'hi'],
    ['hiya', 'hi'],
  ])('.firstTwo("%s") would return "%s"', (input, expected) => {
    expect(firstTwo(input)).toBe(expected);
  });
});
