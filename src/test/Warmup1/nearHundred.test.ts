import { nearHundred } from '../../app/Warmup1/nearHundred';

describe('Warmup-1 > nearHundred', () => {
  it('should return true, if the value is 93', () => {
    const result = nearHundred(93);
    expect(result).toBeTruthy();
  });

  it('should return true, if the value is 90', () => {
    const result = nearHundred(90);
    expect(result).toBeTruthy();
  });

  it('should return false, if the value is 89', () => {
    const result = nearHundred(89);
    expect(result).toBeFalsy();
  });

  it('should return true, if the value is 110', () => {
    const result = nearHundred(110);
    expect(result).toBeTruthy();
  });

  it('should return false, if the value is 111', () => {
    const result = nearHundred(111);
    expect(result).toBeFalsy();
  });

  it('should return false, if the value is 121', () => {
    const result = nearHundred(121);
    expect(result).toBeFalsy();
  });

  it('should return false, if the value is -101', () => {
    const result = nearHundred(-101);
    expect(result).toBeFalsy();
  });

  it('should return false, if the value is -209', () => {
    const result = nearHundred(-209);
    expect(result).toBeFalsy();
  });

  it('should return true, if the value is 190', () => {
    const result = nearHundred(190);
    expect(result).toBeTruthy();
  });

  it('should return true, if the value is 209', () => {
    const result = nearHundred(209);
    expect(result).toBeTruthy();
  });

  it('should return false, if the value is 0', () => {
    const result = nearHundred(0);
    expect(result).toBeFalsy();
  });

  it('should return false, if the value is 5', () => {
    const result = nearHundred(5);
    expect(result).toBeFalsy();
  });

  it('should return false, if the value is -50', () => {
    const result = nearHundred(-50);
    expect(result).toBeFalsy();
  });

  it('should return true, if the value is 191', () => {
    const result = nearHundred(191);
    expect(result).toBeTruthy();
  });

  it('should return false, if the value is 189', () => {
    const result = nearHundred(189);
    expect(result).toBeFalsy();
  });

  it('should return true, if the value is 200', () => {
    const result = nearHundred(200);
    expect(result).toBeTruthy();
  });

  it('should return true, if the value is 210', () => {
    const result = nearHundred(210);
    expect(result).toBeTruthy();
  });

  it('should return false, if the value is 211', () => {
    const result = nearHundred(211);
    expect(result).toBeFalsy();
  });

  it('should return false, if the value is 290', () => {
    const result = nearHundred(290);
    expect(result).toBeFalsy();
  });
});
