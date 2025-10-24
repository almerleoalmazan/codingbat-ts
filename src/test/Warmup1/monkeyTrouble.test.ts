import { monkeyTrouble } from '../../app/Warmup1/monkeyTrouble';

describe('Warmup-1 > monkeyTrouble', () => {
  it('should return true if they are both smiling', () => {
    const result = monkeyTrouble(true, true);
    expect(result).toBeTruthy();
  });

  it('should return true if they are both not smiling', () => {
    const result = monkeyTrouble(false, false);
    expect(result).toBeTruthy();
  });

  it('should return false if smiling and not smiling', () => {
    const result = monkeyTrouble(true, false);
    expect(result).toBeFalsy();
  });

  it('should return false if not smiling and smiling', () => {
    const result = monkeyTrouble(false, true);
    expect(result).toBeFalsy();
  });
});
