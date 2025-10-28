/* 3.
  Count the number of "xx" in the given string. We'll say that overlapping is allowed, so "xxx" contains 2 "xx".


  countXX("abcxx") → 1
  countXX("xxx") → 2
  countXX("xxxx") → 3
 */
export function countXX(str: string): number {
  let counter = 0;

  for (let x = 0; x < str.length - 1; x++) {
    if (str[x] === 'x' && str[x + 1] === 'x') {
      counter++;
    }
  }

  return counter;
}
