import { arrayCount9 } from '../../app/Warmup2/arrayCount9';

describe('Warmup-2 > arrayCount9', () => {
  it.each([
    [[1, 2, 9], 1],
    [[1, 9, 9], 2],
    [[1, 9, 9, 3, 9], 3],
    [[1, 2, 3], 0],
    [[], 0],
    [[4, 2, 4, 3, 1], 0],
    [[9, 2, 4, 3, 1], 1],
  ])('.arrayCount9(%s) would return %i', (input, expected) => {
    expect(arrayCount9(input)).toBe(expected);
  });
});
