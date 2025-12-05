/* 20.
 * Given a string, return true if "bad" appears starting at index 0 or 1 in the
 * string, such as with "badxxx" or "xbadxx" but not "xxbadxx".
 * The string may be any length, including 0. Note: use .equals() to compare 2 strings.
 *
 * hasBad("badxx") → true
 * hasBad("xbadxx") → true
 * hasBad("xxbadxx") → false
 */
export function hasBad(str: string): boolean {
  let indexOne = 1;
  let indexZero = 0;

  return (
    str.indexOf('bad', indexZero) === indexZero ||
    str.indexOf('bad', indexOne) === indexOne
  );
}
