import { frontAgain } from '../../app/String1/frontAgain';

describe('String-1 > frontAgain', () => {
  it.each([
    ['edited', true],
    ['edit', false],
    ['ed', true],
    ['jj', true],
    ['jjj', true],
    ['jjjj', true],
    ['jjjk', false],
    ['x', false],
    ['', false],
    ['java', false],
    ['javaja', true],
  ])('.frontAgain("%s") would return "%s"', (str, expected) => {
    expect(frontAgain(str)).toBe(expected);
  });
});
