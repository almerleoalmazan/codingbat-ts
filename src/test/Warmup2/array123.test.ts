import { array123 } from '../../app/Warmup2/array123';

describe('Warmup-2 > array123', () => {
  it.each([
    [[1, 1, 2, 3, 1], true],
    [[1, 1, 2, 4, 1], false],
    [[1, 1, 2, 1, 2, 3], true],
    [[1, 1, 2, 1, 2, 1], false],
    [[1, 2, 3, 1, 2, 3], true],
    [[1, 2, 3], true],
    [[1, 1, 1], false],
    [[1, 2], false],
    [[1], false],
    [[], false],
  ])('.array123(%s) would return %s', (input, expected) => {
    expect(array123(input)).toBe(expected);
  });
});
