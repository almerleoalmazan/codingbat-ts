import { middleThree } from '../../app/String1/middleThree';

describe('String-1 > middleThree', () => {
  it.each([
    ['Candy', 'and'],
    ['and', 'and'],
    ['solving', 'lvi'],
    ['Hi yet Hi', 'yet'],
    ['java yet java', 'yet'],
    ['Chocolate', 'col'],
    ['XabcxyzabcX', 'xyz'],
  ])('.middleThree("%s") would return "%s"', (str, expected) => {
    expect(middleThree(str)).toBe(expected);
  });
});
