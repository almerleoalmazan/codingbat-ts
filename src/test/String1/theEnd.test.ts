import { theEnd } from '../../app/String1/theEnd';

describe('String-1 > theEnd', () => {
  it.each([
    ['Hello', true, 'H'],
    ['Hello', false, 'o'],
    ['oh', true, 'o'],
    ['oh', false, 'h'],
    ['x', true, 'x'],
    ['x', false, 'x'],
    ['java', true, 'j'],
    ['chocolate', false, 'e'],
    ['1234', true, '1'],
    ['code', false, 'e'],
  ])('.theEnd("%s", %s) would return "%s"', (str, front, expected) => {
    expect(theEnd(str, front)).toBe(expected);
  });
});
