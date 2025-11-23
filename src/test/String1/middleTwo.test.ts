import { middleTwo } from '../../app/String1/middleTwo';

describe('String-1 > middleTwo', () => {
  it.each([
    ['string', 'ri'],
    ['code', 'od'],
    ['Practice', 'ct'],
    ['ab', 'ab'],
    ['0123456789', '45'],
  ])('.middleTwo("%s") would return "%s"', (str, expected) => {
    expect(middleTwo(str)).toBe(expected);
  });
});
