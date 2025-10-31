import { arrayFront9 } from '../../app/Warmup2/arrayFront9';

describe('Warmup-2 > arrayFront9', () => {
  it.each([
    [[1, 2, 9, 3, 4], true],
    [[1, 2, 3, 4, 9], false],
    [[1, 2, 3, 4, 5], false],
    [[9, 2, 3], true],
    [[1, 9, 9], true],
    [[1, 2, 3], false],
    [[1, 9], true],
    [[5, 5], false],
    [[2], false],
    [[9], true],
    [[], false],
    [[3, 9, 2, 3, 3], true],
  ])('.arrayFront9(%s) would return %s', (input, expected) => {
    expect(arrayFront9(input)).toBe(expected);
  });
});
