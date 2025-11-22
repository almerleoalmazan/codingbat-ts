import { firstHalf } from '../../app/String1/firstHalf';

describe('String-1 > firstHalf', () => {
  it.each([
    ['WooHoo', 'Woo'],
    ['HelloThere', 'Hello'],
    ['abcdef', 'abc'],
    ['ab', 'a'],
    ['', ''],
    ['0123456789', '01234'],
    ['kitten', 'kit'],
  ])('.firstHalf("%s") would return "%s"', (input, expected) => {
    expect(firstHalf(input)).toBe(expected);
  });
});
