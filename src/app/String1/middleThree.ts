/* 19.
 * Given a string of odd length, return the string length 3 from its middle, so
 * "Candy" yields "and". The string length will be at least 3.
 *
 * middleThree("Candy") → "and"
 * middleThree("and") → "and"
 * middleThree("solving") → "lvi"
 */
export function middleThree(str: string): string {
  let strLength = str.length;

  if (strLength === 3) {
    return str;
  }

  let startIndex = Math.floor(strLength / 2 - 1);

  return str.substring(startIndex, startIndex + 3);
}
