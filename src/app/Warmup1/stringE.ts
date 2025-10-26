/* 28.
  Return true if the given string contains between 1 and 3 'e' chars.

  stringE("Hello") → true
  stringE("Heelle") → true
  stringE("Heelele") → false
*/
export function stringE(str: string): boolean {
  let countChar = 0;

  for (const char of str) {
    if (char === 'e') {
      countChar++;
    }
  }

  return countChar === 1 || countChar === 3;
}
