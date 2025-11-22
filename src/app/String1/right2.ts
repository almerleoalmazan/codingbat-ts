/* 12.
 * Given a string, return a "rotated right 2" version where the last 2 chars return
 * moved to the start. The string length will be at least 2.
 *
 * right2("Hello") → "loHel"
 * right2("java") → "vaja"
 * right2("Hi") → "Hi"
 */
export function right2(str: string): string {
  if (str.length <= 2) {
    return str;
  }

  let firstWord = str.substring(str.length - 2);
  let lastWord = str.substring(0, str.length - 2);

  return firstWord + lastWord;
}
