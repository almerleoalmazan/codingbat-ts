/* 24.
 * Given a string of any length, return a new string where the last 2 chars, if
 * present, are swapped, so "coding" yields "codign".
 *
 * lastTwo("coding") → "codign"
 * lastTwo("cat") → "cta"
 * lastTwo("ab") → "ba"
 */
export function lastTwo(str: string): string {
  if (str.length >= 2) {
    let secondToTheLastChar = str.charAt(str.length - 2);
    let lastChar = str.charAt(str.length - 1);

    let index = str.indexOf(secondToTheLastChar);

    return str.substring(0, index) + lastChar + secondToTheLastChar;
  }

  return str;
}
