import { sleepIn } from '../../app/Warmup1/sleepIn';

describe('sleepIn', () => {
  // sleepIn(false, false) --> true
  it('should return true if not weekday or not vacation', () => {
    const result = sleepIn(false, false);
    expect(result).toBeTruthy();
  });

  // sleepIn(true, false) --> false
  it('should return false if weekday or not vacation', () => {
    const result = sleepIn(true, false);
    expect(result).toBeFalsy();
  });

  // sleepIn(false, true) --> true
  it('should return true if not weekday or vacation', () => {
    const result = sleepIn(false, true);
    expect(result).toBeTruthy();
  });

  // sleepIn(true, true) --> true
  it('should return true if weekday or vacation', () => {
    const result = sleepIn(true, true);
    expect(result).toBeTruthy();
  });
});
