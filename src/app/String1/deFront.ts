/* 30.
 * Given a string, return a version without the first 2 chars. Except keep the
 * first char if it is 'a' and keep the second char if it is 'b'. The string
 * may be any length. Harder than it looks.
 *
 * deFront("Hello") → "llo"
 * deFront("java") → "va"
 * deFront("away") → "aay"
 */
export function deFront(str: string): string {
  let word = '';

  if (str.substring(0, 1) === 'a') {
    word += str.substring(0, 1);
  }

  if (str.substring(1, 2) === 'b') {
    word += str.substring(1, 2);
  }

  return word + str.substring(2);
}
