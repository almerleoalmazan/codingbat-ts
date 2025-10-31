import { stringSplosion } from '../../app/Warmup2/stringSplosion';

describe('Warmup-2 > stringSplosion', () => {
  it.each([
    ['Code', 'CCoCodCode'],
    ['abc', 'aababc'],
    ['ab', 'aab'],
    ['x', 'x'],
    ['fade', 'ffafadfade'],
    ['There', 'TThTheTherThere'],
    ['Kitten', 'KKiKitKittKitteKitten'],
    ['Bye', 'BByBye'],
    ['Good', 'GGoGooGood'],
    ['Bad', 'BBaBad'],
  ])('.stringSplosion("%s") would return "%s"', (str, expected) => {
    expect(stringSplosion(str)).toBe(expected);
  });
});
