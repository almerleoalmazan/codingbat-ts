import { frontTimes } from '../../app/Warmup2/frontTimes';

describe('Warmup-2 > frontTimes', () => {
  it.each([
    ['Chocolate', 2, 'ChoCho'],
    ['Chocolate', 3, 'ChoChoCho'],
    ['Abc', 3, 'AbcAbcAbc'],
    ['Ab', 4, 'AbAbAbAb'],
    ['A', 4, 'AAAA'],
    ['', 4, ''],
    ['Abc', 0, ''],
  ])('.frontTimes("%s", %i) would result to "%s"', (str, n, expected) => {
    expect(frontTimes(str, n)).toBe(expected);
  });
});
