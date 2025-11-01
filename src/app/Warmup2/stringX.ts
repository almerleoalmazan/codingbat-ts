/* 12.
  Given a string, return a version where all the "x" have been removed.
  Except an "x" at the very start or end should not be removed.

  stringX("xxHxix") → "xHix"
  stringX("abxxxcd") → "abcd"
  stringX("xabxxxcdx") → "xabcdx"
 */
export function stringX(str: string): string {
  let modifiedString = '';

  for (let x = 0; x < str.length; x++) {
    if (
      (str[x] === 'x' && x === 0) ||
      (str[str.length - 1] === 'x' && x === str.length - 1)
    ) {
      modifiedString += str[x];
      continue;
    }

    if (str[x] !== 'x') {
      modifiedString += str[x];
    }
  }

  return modifiedString;
}
