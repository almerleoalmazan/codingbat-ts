import { stringYak } from '../../app/Warmup2/stringYak';

describe('Warmup-2 > stringYak', () => {
  it.each([
    ['yakpak', 'pak'],
    ['pakyak', 'pak'],
    ['yak123ya', '123ya'],
    ['yak', ''],
    ['yakxxxyak', 'xxx'],
    ['HiyakHi', 'HiHi'],
    ['xxxyakyyyakzzz', 'xxxyyzzz'],
  ])('.stringYak("%s") would return "%s"', (str, expected) => {
    expect(stringYak(str)).toBe(expected);
  });
});
