/* 13.
 * Given a string, return a string length 1 from its front, unless front is false,
 * in which case return a string length 1 from its back. The string will be non-empty.
 *
 * theEnd("Hello", true) → "H"
 * theEnd("Hello", false) → "o"
 * theEnd("oh", true) → "o"
 */
export function theEnd(str: string, front: boolean): string {
  let firstChar = str[0];
  let lastChar = str[str.length - 1];

  return front ? firstChar : lastChar;
}
