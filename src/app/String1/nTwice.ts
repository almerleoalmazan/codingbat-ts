/* 17.
 * Given a string and an int n, return a string made of the first and last n chars
 * from the string. The string length will be at least n.
 *
 * nTwice("Hello", 2) → "Helo"
 * nTwice("Chocolate", 3) → "Choate"
 * nTwice("Chocolate", 1) → "Ce"
 */
export function nTwice(str: string, n: number): string {
  if (n === 0) {
    return '';
  }

  let firstWord = str.substring(0, n);
  let lastWord = str.substring(str.length - n);

  return firstWord + lastWord;
}
