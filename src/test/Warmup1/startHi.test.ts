import { startHi } from '../../app/Warmup1/startHi';

describe('Warmup-1 > startHi', () => {
  it.each([
    [true, 'hi there'],
    [true, 'hi'],
    [false, 'hello hi'],
    [false, 'he'],
    [false, 'h'],
    [false, ''],
    [false, 'ho hi'],
    [true, 'hi ho'],
  ])('should return %s when the input value is "%s"', (expected, input) => {
    expect(startHi(input)).toBe(expected);
  });
});
