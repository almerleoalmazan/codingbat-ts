import { makeOutWord } from '../../app/String1/makeOutWord';

describe('String-1 > makeOutWord', () => {
  it.each([
    ['<<>>', 'Yay', '<<Yay>>'],
    ['<<>>', 'WooHoo', '<<WooHoo>>'],
    ['[[]]', 'word', '[[word]]'],
    ['HHoo', 'hello', 'HHhellooo'],
    ['abyz', 'YAY', 'abYAYyz'],
  ])('.makeOutWord("%s", "%s") would return "%s"', (out, word, expected) => {
    expect(makeOutWord(out, word)).toBe(expected);
  });
});
