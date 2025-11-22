import { noTriples } from '../../app/Warmup2/noTriples';

describe('Warmup-2 > noTriples', () => {
  it.each([
    [[1, 1, 2, 2, 1], true],
    [[1, 1, 2, 2, 2, 1], false],
    [[1, 1, 1, 2, 2, 2, 1], false],
    [[1, 1, 2, 2, 1, 2, 1], true],
    [[1, 2, 1], true],
    [[1, 1, 1], false],
    [[1, 1], true],
    [[1], true],
    [[], true],
  ])('.noTriples(%s) would return %s', (input, expected) => {
    expect(noTriples(input)).toBe(expected);
  });
});
