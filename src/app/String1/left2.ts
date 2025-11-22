/* 11.
 * Given a string, return a "rotated left 2" version where the first 2 chars return
 * moved to the end. The string length will be at least 2.
 *
 * left2("Hello") → "lloHe"
 * left2("java") → "vaja"
 * left2("Hi") → "Hi"
 */
export function left2(str: string): string {
  if (str.length <= 2) {
    return str;
  }

  let firstWord = str.substring(2);
  let lastWord = str.substring(0, 2);

  return firstWord + lastWord;
}
