/* 15.
 * Given a string of even length, return a string made of the middle two chars,
 * so the string "string" yields "ri". The string length will be at least 2.
 *
 * middleTwo("string") → "ri"
 * middleTwo("code") → "od"
 * middleTwo("Practice") → "ct"
 */
export function middleTwo(str: string): string {
  if (str.length <= 2) {
    return str;
  }

  let strLength = str.length / 2;

  return str.substring(strLength - 1, strLength + 1);
}
