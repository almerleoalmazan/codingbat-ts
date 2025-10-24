import { parrotTrouble } from '../../app/Warmup1/parrotTrouble';

describe('Warmup-1 > parrotTrouble', () => {
  it('should return true, if talking and hour is 6', () => {
    const result = parrotTrouble(true, 6);
    expect(result).toBeTruthy();
  });

  it('should return false, if talking and hour is 7', () => {
    const result = parrotTrouble(true, 7);
    expect(result).toBeFalsy();
  });

  it('should return false, if not talking and hour is 6', () => {
    const result = parrotTrouble(false, 6);
    expect(result).toBeFalsy();
  });

  it('should return true, if talking and hour is 21', () => {
    const result = parrotTrouble(true, 21);
    expect(result).toBeTruthy();
  });

  it('should return false, if not talking and hour is 21', () => {
    const result = parrotTrouble(false, 21);
    expect(result).toBeFalsy();
  });

  it('should return false, if not talking and hour is 20', () => {
    const result = parrotTrouble(false, 20);
    expect(result).toBeFalsy();
  });

  it('should return true, if talking and hour is 23', () => {
    const result = parrotTrouble(true, 23);
    expect(result).toBeTruthy();
  });

  it('should return false, if not talking and hour is 23', () => {
    const result = parrotTrouble(false, 23);
    expect(result).toBeFalsy();
  });

  it('should return false, if talking and hour is 20', () => {
    const result = parrotTrouble(true, 20);
    expect(result).toBeFalsy();
  });

  it('should return false, if not talking and hour is 12', () => {
    const result = parrotTrouble(false, 12);
    expect(result).toBeFalsy();
  });
});
