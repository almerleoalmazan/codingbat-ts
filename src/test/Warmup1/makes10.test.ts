import { makes10 } from '../../app/Warmup1/makes10';

describe('Warmup-1 > makes10', () => {
  it('should return true, if value is 9 and 10', () => {
    const result = makes10(9, 10);
    expect(result).toBeTruthy();
  });

  it('should return false, if value is 9 and 9', () => {
    const result = makes10(9, 9);
    expect(result).toBeFalsy();
  });

  it('should return true, if value is 1 and 9', () => {
    const result = makes10(1, 9);
    expect(result).toBeTruthy();
  });

  it('should return true, if value is 10 and 1', () => {
    const result = makes10(10, 1);
    expect(result).toBeTruthy();
  });

  it('should return true, if value is 10 and 10', () => {
    const result = makes10(10, 10);
    expect(result).toBeTruthy();
  });

  it('should return true, if value is 8 and 2', () => {
    const result = makes10(8, 2);
    expect(result).toBeTruthy();
  });

  it('should return false, if value is 8 and 3', () => {
    const result = makes10(8, 3);
    expect(result).toBeFalsy();
  });

  it('should return true, if value is 10 and 42', () => {
    const result = makes10(10, 42);
    expect(result).toBeTruthy();
  });

  it('should return true, if value is 12 and -2', () => {
    const result = makes10(12, -2);
    expect(result).toBeTruthy();
  });
});
