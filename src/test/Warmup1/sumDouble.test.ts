import { sumDouble } from '../../app/Warmup1/sumDouble';

describe('Warmup-1 > sumDouble', () => {
  it('should return 3, adding 1 and 2', () => {
    const result = sumDouble(1, 2);
    expect(result).toBe(3);
  });

  it('should return 5, adding 3 and 2', () => {
    const result = sumDouble(3, 2);
    expect(result).toBe(5);
  });

  it('should return 8, adding 2 and 2', () => {
    const result = sumDouble(2, 2);
    expect(result).toBe(8);
  });

  it('should return -1, adding -1 and 0', () => {
    const result = sumDouble(-1, 0);
    expect(result).toBe(-1);
  });

  it('should return 12, adding 3 and 3', () => {
    const result = sumDouble(3, 3);
    expect(result).toBe(12);
  });

  it('should return 0, adding 0 and 0', () => {
    const result = sumDouble(0, 0);
    expect(result).toBe(0);
  });

  it('should return 1, adding 0 and 1', () => {
    const result = sumDouble(0, 1);
    expect(result).toBe(1);
  });

  it('should return 7, adding 3 and 4', () => {
    const result = sumDouble(3, 4);
    expect(result).toBe(7);
  });
});
