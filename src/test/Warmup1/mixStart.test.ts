import { mixStart } from '../../app/Warmup1/mixStart';

describe('Warmup-1 > mixStart', () => {
  it.each([
    [true, 'mix snacks'],
    [true, 'pix snacks'],
    [false, 'piz snacks'],
    [true, 'nix'],
    [false, 'ni'],
    [false, 'n'],
    [false, ''],
  ])('should return "%s" when the input value is "%s"', (expected, input) => {
    expect(mixStart(input)).toBe(expected);
  });
});
