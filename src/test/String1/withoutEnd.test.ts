import { withouEnd } from '../../app/String1/withoutEnd';

describe('String-1 > withoutEnd', () => {
  it.each([
    ['Hello', 'ell'],
    ['java', 'av'],
    ['coding', 'odin'],
    ['code', 'od'],
    ['ab', ''],
    ['Chocolate!', 'hocolate'],
    ['kitten', 'itte'],
    ['woohoo', 'ooho'],
  ])('.withoutEnd("%s") would return "%s"', (input, expected) => {
    expect(withouEnd(input)).toBe(expected);
  });
});
