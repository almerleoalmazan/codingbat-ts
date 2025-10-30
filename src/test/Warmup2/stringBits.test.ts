import { stringBits } from '../../app/Warmup2/stringBits';

describe('Warmup-2 > stringBits', () => {
  it.each([
    ['Hello', 'Hlo'],
    ['Hi', 'H'],
    ['Heeololeo', 'Hello'],
    ['HiHiHi', 'HHH'],
    ['', ''],
    ['Greetings', 'Getns'],
    ['Chocoate', 'Coot'],
    ['pi', 'p'],
    ['Hello Kitten', 'HloKte'],
    ['hxaxpxpxy', 'happy'],
  ])('.stringBits("%s") would return "%s"', (str, expected) => {
    expect(stringBits(str)).toBe(expected);
  });
});
