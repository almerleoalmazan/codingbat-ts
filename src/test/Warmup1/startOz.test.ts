import { startOz } from '../../app/Warmup1/startOz';

describe('Warmup-1 > startOz', () => {
  it.each([
    ['oz', 'ozymandias'],
    ['z', 'bzoo'],
    ['o', 'oxx'],
    ['oz', 'oz'],
    ['o', 'ounce'],
    ['o', 'o'],
    ['', 'abc'],
    ['', ''],
    ['', 'zoo'],
    ['z', 'aztec'],
    ['z', 'zzzz'],
    ['oz', 'oznic'],
  ])('should return "%s" when the input is "%s"', (expected, input) => {
    expect(startOz(input)).toBe(expected);
  });
});
