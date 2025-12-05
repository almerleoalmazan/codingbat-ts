import { seeColor } from '../../app/String1/seeColor';

describe('String-1 > seeColor', () => {
  it.each([
    ['redxx', 'red'],
    ['xxred', ''],
    ['blueTimes', 'blue'],
    ['NoColor', ''],
    ['red', 'red'],
    ['re', ''],
    ['blu', ''],
    ['blue', 'blue'],
    ['a', ''],
    ['', ''],
    ['xyzred', ''],
  ])('.seeColor("%s") would return "%s"', (str, expected) => {
    expect(seeColor(str)).toBe(expected);
  });
});
