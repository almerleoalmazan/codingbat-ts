import { makeTags } from '../../app/String1/makeTags';

describe('String-1 > makeTags', () => {
  it.each([
    ['i', 'Yay', '<i>Yay</i>'],
    ['i', 'Hello', '<i>Hello</i>'],
    ['cite', 'Yay', '<cite>Yay</cite>'],
    ['address', 'here', '<address>here</address>'],
    ['body', 'Heart', '<body>Heart</body>'],
    ['i', 'i', '<i>i</i>'],
    ['i', '', '<i></i>'],
  ])('.makeTags("%s", "%s") would return "%s"', (tag, word, expected) => {
    expect(makeTags(tag, word)).toBe(expected);
  });
});
