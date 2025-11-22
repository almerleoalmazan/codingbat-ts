import { array667 } from '../../app/Warmup2/array667';

describe('Warmup-2 > array667', () => {
  it.each([
    [[6, 6, 2], 1],
    [[6, 6, 2, 6], 1],
    [[6, 7, 2, 6], 1],
    [[6, 6, 2, 6, 7], 2],
    [[1, 6, 3], 0],
    [[6, 1], 0],
    [[], 0],
    [[3, 6, 7, 6], 1],
    [[3, 6, 6, 7], 2],
    [[6, 3, 6, 6], 1],
    [[6, 7, 6, 6], 2],
    [[1, 2, 3, 4, 5, 6], 0],
    [[1, 2, 3, 4, 6, 6], 1],
  ])('.array667(%s) would return %d', (input, expected) => {
    expect(array667(input)).toBe(expected);
  });
});
