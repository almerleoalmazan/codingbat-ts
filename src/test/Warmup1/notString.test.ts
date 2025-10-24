import { notString } from '../../app/Warmup1/notString';

describe('Warmup-1 > notString', () => {
  it.each([
    ['not candy', 'candy'],
    ['not x', 'x'],
    ['not bad', 'not bad'],
    ['not bad', 'bad'],
    ['not', 'not'],
    ['not is not', 'is not'],
    ['not no', 'no'],
  ])('should return "%s" when input is "%s"', (expected, input) => {
    expect(notString(input)).toBe(expected);
  });
});
