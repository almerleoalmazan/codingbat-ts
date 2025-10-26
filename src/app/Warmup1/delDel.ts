/* 21.
  Given a string, if the string "del" appears starting at index 1,
  return a string where that "del" has been deleted.
  Otherwise, return the string unchanged.

  delDel("adelbc") → "abc"
  delDel("adelHello") → "aHello"
  delDel("adedbc") → "adedbc"
*/
export function delDel(str: string): string {
  if (str.length <= 3 || !str.startsWith('del', 1)) {
    return str;
  }

  return str[0] + str.substring(4);
}
