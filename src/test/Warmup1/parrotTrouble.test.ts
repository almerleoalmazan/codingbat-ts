import { parrotTrouble } from '../../app/Warmup1/parrotTrouble';

describe('Warmup-1 > parrotTrouble', () => {
  it.each([
    [true, true, 6],
    [false, true, 7],
    [false, false, 6],
    [true, true, 21],
    [false, false, 21],
    [false, false, 20],
    [true, true, 23],
    [false, false, 23],
    [false, true, 20],
    [false, false, 12],
  ])(
    'should return %s if talking = %s and hour = %i',
    (expected, talking, hour) => {
      const result = parrotTrouble(talking, hour);
      expect(result).toBe(expected);
    }
  );
});
