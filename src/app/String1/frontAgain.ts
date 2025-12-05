/* 26.
 * Given a string, return true if the first 2 chars in the string also appear at
 * the end of the string, such as with "edited".
 *
 * frontAgain("edited") → true
 * frontAgain("edit") → false
 * frontAgain("ed") → true
 */
export function frontAgain(str: string): boolean {
  if (str.length >= 2) {
    let firstTwoChar = str.substring(0, 2);
    let lastTwoChar = str.substring(str.length - 2);

    return firstTwoChar === lastTwoChar;
  }

  return false;
}
