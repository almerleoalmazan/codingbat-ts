import { last2 } from '../../app/Warmup2/last2';

describe('Warmup-2 > last2', () => {
  it.each([
    ['hixxhi', 1],
    ['xaxxaxaxx', 1],
    ['axxxaaxx', 2],
    ['xxaxxaxxaxx', 3],
    ['xaxaxaxx', 0],
    ['xxxx', 2],
    ['13121312', 1],
    ['11212', 1],
    ['13121311', 0],
    ['1717171', 2],
    ['hi', 0],
    ['h', 0],
    ['', 0],
  ])('.last2("%s") would return %i', (str, expected) => {
    expect(last2(str)).toBe(expected);
  });
});
