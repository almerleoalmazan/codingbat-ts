import { nearHundred } from '../../app/Warmup1/nearHundred';

describe('Warmup-1 > nearHundred', () => {
  it.each([
    [true, 93],
    [true, 90],
    [false, 89],
    [true, 110],
    [false, 111],
    [false, 121],
    [false, -101],
    [false, -209],
    [true, 190],
    [true, 209],
    [false, 0],
    [false, 5],
    [false, -50],
    [true, 191],
    [false, 189],
    [true, 200],
    [true, 210],
    [false, 211],
    [false, 290],
  ])('should return %s, if the value is %i', (expected, input) => {
    const result = nearHundred(input);
    expect(result).toBe(expected);
  });
});
