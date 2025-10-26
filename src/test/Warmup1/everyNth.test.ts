import { everyNth } from '../../app/Warmup1/everyNth';

describe('Warmup-1 > everyNth', () => {
  it.each([
    ['Miracle', 2, 'Mrce'],
    ['abcdefg', 2, 'aceg'],
    ['abcdefg', 3, 'adg'],
    ['Chocolate', 3, 'Cca'],
    ['Chocolates', 3, 'Ccas'],
    ['Chocolates', 4, 'Coe'],
    ['Chocolates', 100, 'C'],
  ])('.everyNth("%s", %i) --> "%s"', (str, a, expected) => {
    expect(everyNth(str, a)).toBe(expected);
  });
});
