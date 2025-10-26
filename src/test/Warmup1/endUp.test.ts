import { endUp } from '../../app/Warmup1/endUp';

describe('Warmup-1 > endUp', () => {
  it.each([
    ['Hello', 'HeLLO'],
    ['hi there', 'hi thERE'],
    ['hi', 'HI'],
    ['woo hoo', 'woo HOO'],
    ['xyz12', 'xyZ12'],
    ['x', 'X'],
    ['', ''],
  ])('.endUp("%s") --> "%s"', (input, expected) => {
    expect(endUp(input)).toBe(expected);
  });
});
