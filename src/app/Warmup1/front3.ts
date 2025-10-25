/* 12.
  Given a string, we'll say that the front is the first 3 chars of the string. If the string length
  is less than 3, the front is whatever is there. Return a new string which is 3 copies of the front.

  front3("Java") → "JavJavJav"
  front3("Chocolate") → "ChoChoCho"
  front3("abc") → "abcabcabc"
*/
export function front3(str: string): string {
  let value: string;

  if (str.length < 3) {
    value = str.substring(0);
  } else {
    value = str.substring(0, 3);
  }

  return value + value + value;
}
