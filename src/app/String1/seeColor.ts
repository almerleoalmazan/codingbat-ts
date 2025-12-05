/* 25.
 * Given a string, if the string begins with "red" or "blue" return that color
 * string, otherwise return the empty string.
 *
 * seeColor("redxx") → "red"
 * seeColor("xxred") → ""
 * seeColor("blueTimes") → "blue"
 */
export function seeColor(str: string): string {
  if (str.length >= 4 && str.startsWith('blue')) {
    return str.substring(0, 4);
  }

  if (str.length >= 3 && str.startsWith('red')) {
    return str.substring(0, 3);
  }

  return '';
}
