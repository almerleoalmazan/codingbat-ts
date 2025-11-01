import { stringX } from '../../app/Warmup2/stringX';

describe('Warmup-2 > stringX', () => {
  it.each([
    ['xxHxix', 'xHix'],
    ['abxxxcd', 'abcd'],
    ['xabxxxcdx', 'xabcdx'],
    ['xKittenx', 'xKittenx'],
    ['Hello', 'Hello'],
    ['xx', 'xx'],
    ['x', 'x'],
    ['', ''],
  ])('.stringX("%s") would return "%s"', (str, expected) => {
    expect(stringX(str)).toBe(expected);
  });
});
