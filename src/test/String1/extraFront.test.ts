import { extraFront } from '../../app/String1/extraFront';

describe('String-1 > extraFront', () => {
  it.each([
    ['Hello', 'HeHeHe'],
    ['ab', 'ababab'],
    ['H', 'HHH'],
    ['', ''],
    ['Candy', 'CaCaCa'],
    ['Code', 'CoCoCo'],
  ])('.extraFront("%s") would return "%s"', (str, expected) => {
    expect(extraFront(str)).toBe(expected);
  });
});
