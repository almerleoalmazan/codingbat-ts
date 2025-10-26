import { delDel } from '../../app/Warmup1/delDel';

describe('Warmup-1 > delDel', () => {
  it.each([
    ['abc', 'adelbc'],
    ['aHello', 'adelHello'],
    ['adedbc', 'adedbc'],
    ['abcdel', 'abcdel'],
    ['add', 'add'],
    ['ad', 'ad'],
    ['a', 'a'],
    ['', ''],
    ['del', 'del'],
    ['a', 'adel'],
    ['aadelbb', 'aadelbb'],
  ])('should return "%s" when the input value is "%s"', (expected, input) => {
    expect(delDel(input)).toBe(expected);
  });
});
