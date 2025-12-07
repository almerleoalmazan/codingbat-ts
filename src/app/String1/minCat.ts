/* 27.
 * Given two strings, append them together (known as "concatenation") and return the
 * result. However, if the strings are different lengths, omit chars from the longer
 * string so it is the same length as the shorter string.
 *
 * So "Hello" and "Hi" yield "loHi". The strings may be any length.
 *
 * minCat("Hello", "Hi") → "loHi"
 * minCat("Hello", "java") → "ellojava"
 * minCat("java", "Hello") → "javaello"
 */
export function minCat(a: string, b: string): string {
  if (a.length > b.length) {
    let aWord = a.substring(a.length - b.length);
    return aWord + b;
  }

  return a + b.substring(b.length - a.length);
}
