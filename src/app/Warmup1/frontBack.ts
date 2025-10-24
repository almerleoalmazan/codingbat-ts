/* 11.
  Given a string, return a new string where the first and last chars have been exchanged.

  frontBack("code") → "eodc"
  frontBack("a") → "a"
  frontBack("ab") → "ba"
*/
export function frontBack(str: string): string {
  if (str.length <= 1) {
    return str;
  }

  if (str.length === 2) {
    return str[1] + str[0];
  }

  return (
    str.substring(str.length - 1) + str.substring(1, str.length - 1) + str[0]
  );
}
