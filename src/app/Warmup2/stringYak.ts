/* 14.
  Suppose the string "yak" is unlucky. Given a string, return a version where all the "yak" are removed, 
  but the "a" can be any char. The "yak" strings will not overlap.

  stringYak("yakpak") → "pak"
  stringYak("pakyak") → "pak"
  stringYak("yak123ya") → "123ya"
*/
export function stringYak(str: string): string {
  let result = '';

  for (let x = 0; x < str.length; x++) {
    if (str[x] === 'y' && str[x + 1] === 'a' && str[x + 2] === 'k') {
      x += 2;
      continue;
    }

    result += str[x];
  }

  return result;
}
