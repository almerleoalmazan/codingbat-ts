import { helloName } from '../../app/String1/helloName';

describe('String-1 > helloName', () => {
  it.each([
    ['Bob', 'Hello Bob!'],
    ['Alice', 'Hello Alice!'],
    ['X', 'Hello X!'],
    ['Dolly', 'Hello Dolly!'],
    ['Alpha', 'Hello Alpha!'],
    ['Omega', 'Hello Omega!'],
    ['Goodbye', 'Hello Goodbye!'],
    ['ho ho ho', 'Hello ho ho ho!'],
    ['xyz!', 'Hello xyz!!'],
    ['Hello', 'Hello Hello!'],
  ])('.helloName("%s") would return "%s"', (input, expected) => {
    expect(helloName(input)).toBe(expected);
  });
});
