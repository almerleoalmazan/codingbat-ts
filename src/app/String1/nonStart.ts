/* 10.
 * Given 2 strings, return their concatenation, except omit the first char of each.
 * The strings will be at least length 1.
 *
 * nonStart("Hello", "There") → "ellohere"
 * nonStart("java", "code") → "avaode"
 * nonStart("shotl", "java") → "hotlava"
 */
export function nonStart(a: string, b: string): string {
  let firstWord = a.substring(1);
  let secondWord = b.substring(1);

  return firstWord + secondWord;
}
