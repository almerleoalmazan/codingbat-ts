import { atFirst } from '../../app/String1/atFirst';

describe('String-1 > atFirst', () => {
  it.each([
    ['hello', 'he'],
    ['hi', 'hi'],
    ['h', 'h@'],
    ['', '@@'],
    ['kitten', 'ki'],
    ['java', 'ja'],
    ['j', 'j@'],
  ])('.atFirst("%s") should return "%s"', (str, expected) => {
    expect(atFirst(str)).toBe(expected);
  });
});
