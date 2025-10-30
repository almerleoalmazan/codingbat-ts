/* 4.
  Given a string, return true if the first instance of "x" in the string is immediately followed by another "x".


  doubleX("axxbb") → true
  doubleX("axaxax") → false
  doubleX("xxxxx") → true
*/
export function doubleX(str: string): boolean {
  for (let x = 0; x < str.length - 1; x++) {
    if (str[x] !== 'x') {
      continue;
    }

    if (str[x] === 'x') {
      return str[x + 1] === 'x';
    }
  }

  return false;
}
