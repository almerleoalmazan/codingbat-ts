/* 23.
 * Given two strings, append them together (known as "concatenation") and return
 * the result. However, if the concatenation creates a double-char, then omit
 * one of the chars, so "abc" and "cat" yields "abcat"
 *
 * conCat("abc", "cat") → "abcat"
 * conCat("dog", "cat") → "dogcat"
 * conCat("abc", "") → "abc"
 */
export function conCat(a: string, b: string): string {
  let lastCharOfWord = a.substring(a.length - 1);
  let firstCharOfWord = b.substring(0, 1);

  if (lastCharOfWord === firstCharOfWord) {
    return a + b.substring(1);
  }

  return a + b;
}
