import { endsLy } from '../../app/String1/endsLy';

describe('String-1 > endsLy', () => {
  it.each([
    ['oddly', true],
    ['y', false],
    ['oddy', false],
    ['oddl', false],
    ['olydd', false],
    ['ly', true],
    ['', false],
    ['falsey', false],
    ['evenly', true],
  ])('.endsLy("%s") would return %s', (str, expected) => {
    expect(endsLy(str)).toBe(expected);
  });
});
