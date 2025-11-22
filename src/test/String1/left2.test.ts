import { left2 } from '../../app/String1/left2';

describe('String-1 > left2', () => {
  it.each([
    ['Hello', 'lloHe'],
    ['java', 'vaja'],
    ['Hi', 'Hi'],
    ['code', 'deco'],
    ['cat', 'tca'],
    ['12345', '34512'],
    ['Chocolate', 'ocolateCh'],
    ['bricks', 'icksbr'],
  ])('.left2("%s") would return "%s"', (input, expected) => {
    expect(left2(input)).toBe(expected);
  });
});
