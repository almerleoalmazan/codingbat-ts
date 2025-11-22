import { comboString } from '../../app/String1/comboString';

describe('String-1 > comboString', () => {
  it.each([
    ['Hello', 'hi', 'hiHellohi'],
    ['hi', 'Hello', 'hiHellohi'],
    ['aaa', 'b', 'baaab'],
    ['b', 'aaa', 'baaab'],
    ['aaa', '', 'aaa'],
    ['', 'bb', 'bb'],
    ['aaa', '1234', 'aaa1234aaa'],
    ['aaa', 'bb', 'bbaaabb'],
    ['a', 'bb', 'abba'],
    ['bb', 'a', 'abba'],
    ['xyz', 'ab', 'abxyzab'],
  ])('.comboString("%s", "%s") would return "%s"', (a, b, expected) => {
    expect(comboString(a, b)).toBe(expected);
  });
});
