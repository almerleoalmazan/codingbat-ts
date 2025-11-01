/* 11.
  Given 2 strings, a and b, return the number of the positions where they contain the same length 2
  substring. So "xxcaazz" and "xxbaaz" yields 3, since the "xx", "aa", and "az" substrings appear in
  the same place in both strings.

  stringMatch("xxcaazz", "xxbaaz") → 3
  stringMatch("abc", "abc") → 2
  stringMatch("abc", "axc") → 0
 */
export function stringMatch(a: string, b: string): number {
  if (a.length < 2 || b.length < 2) return 0;

  const strLength = Math.min(a.length, b.length);
  let counter = 0;

  for (let x = 0; x < strLength - 1; x++) {
    if (a.substring(x, x + 2) === b.substring(x, x + 2)) {
      counter++;
    }
  }

  return counter;
}
