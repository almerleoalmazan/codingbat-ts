import { lastTwo } from '../../app/String1/lastTwo';

describe('String-1 > lastTwo', () => {
  it.each([
    ['coding', 'codign'],
    ['cat', 'cta'],
    ['ab', 'ba'],
    ['a', 'a'],
    ['', ''],
  ])('.lastTwo("%s") would return "%s"', (str, expected) => {
    expect(lastTwo(str)).toBe(expected);
  });
});
