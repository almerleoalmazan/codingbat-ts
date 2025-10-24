import { sleepIn } from '../../app/Warmup1/sleepIn';

describe('Warmup-1 > sleepIn', () => {
  it('should return true if not weekday or not vacation', () => {
    const result = sleepIn(false, false);
    expect(result).toBeTruthy();
  });

  it('should return false if weekday or not vacation', () => {
    const result = sleepIn(true, false);
    expect(result).toBeFalsy();
  });

  it('should return true if not weekday or vacation', () => {
    const result = sleepIn(false, true);
    expect(result).toBeTruthy();
  });

  it('should return true if weekday or vacation', () => {
    const result = sleepIn(true, true);
    expect(result).toBeTruthy();
  });
});
