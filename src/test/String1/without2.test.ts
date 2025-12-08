import { without2 } from '../../app/String1/without2';

describe('String-1 > without2', () => {
  it.each([
    ['HelloHe', 'lloHe'],
    ['HelloHi', 'HelloHi'],
    ['Hi', ''],
    ['Chocolate', 'Chocolate'],
    ['xxx', 'x'],
    ['xx', ''],
    ['x', 'x'],
    ['', ''],
    ['Fruits', 'Fruits'],
  ])('.without2("%s") would return "%s"', (str, expected) => {
    expect(without2(str)).toBe(expected);
  });
});
