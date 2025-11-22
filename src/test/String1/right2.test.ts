import { right2 } from '../../app/String1/right2';

describe('String-1 > right2', () => {
  it.each([
    ['Hello', 'loHel'],
    ['java', 'vaja'],
    ['Hi', 'Hi'],
    ['code', 'deco'],
    ['cat', 'atc'],
    ['12345', '45123'],
  ])('.right2("%s") would return "%s"', (input, expected) => {
    expect(right2(input)).toBe(expected);
  });
});
