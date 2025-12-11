import { startWord } from '../../app/String1/startWord';

describe('String-1 > startWord', () => {
  it.each([
    ['hippo', 'hi', 'hi'],
    ['hippo', 'xip', 'hip'],
    ['hippo', 'i', 'h'],
    ['hippo', 'ix', ''],
    ['h', 'ix', ''],
    ['', 'i', ''],
    ['hip', 'zi', 'hi'],
    ['hip', 'zip', 'hip'],
    ['hip', 'zig', ''],
    ['h', 'z', 'h'],
    ['hippo', 'zippo', 'hippo'],
    ['hippo', 'xyz', ''],
    ['hippo', 'hip', 'hip'],
    ['kitten', 'cit', 'kit'],
    ['kit', 'cit', 'kit'],
  ])('.startWord("%s", "%s") would return "%s"', (str, word, expected) => {
    expect(startWord(str, word)).toBe(expected);
  });
});
