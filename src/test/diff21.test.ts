import { diff21 } from '../app/Warmup1/diff21';

describe('diff21', () => {
  it('should return 2, if the value is 19', () => {
    const result = diff21(19);
    expect(result).toBe(2);
  });

  it('should return 11, if the the value is 10', () => {
    const result = diff21(10);
    expect(result).toBe(11);
  });

  it('should return 0, if the the value is 21', () => {
    const result = diff21(21);
    expect(result).toBe(0);
  });

  it('should return 2, if the the value is 22', () => {
    const result = diff21(22);
    expect(result).toBe(2);
  });

  it('should return 8, if the the value is 25', () => {
    const result = diff21(25);
    expect(result).toBe(8);
  });

  it('should return 18, if the the value is 30', () => {
    const result = diff21(30);
    expect(result).toBe(18);
  });

  it('should return 21, if the the value is 0', () => {
    const result = diff21(0);
    expect(result).toBe(21);
  });

  it('should return 20, if the the value is 1', () => {
    const result = diff21(1);
    expect(result).toBe(20);
  });

  it('should return 19, if the the value is 2', () => {
    const result = diff21(2);
    expect(result).toBe(19);
  });

  it('should return 22, if the the value is -1', () => {
    const result = diff21(-1);
    expect(result).toBe(22);
  });

  it('should return 23, if the the value is -2', () => {
    const result = diff21(-2);
    expect(result).toBe(23);
  });

  it('should return 58, if the the value is 50', () => {
    const result = diff21(50);
    expect(result).toBe(58);
  });
});
