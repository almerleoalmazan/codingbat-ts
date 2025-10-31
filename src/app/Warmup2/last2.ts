/* 7.
  Given a string, return the count of the number of times that a substring length 2
  appears in the string and also as the last 2 chars of the string,
  so "hixxxhi" yields 1 (we won't count the end substring).

  last2("hixxhi") → 1
  last2("xaxxaxaxx") → 1
  last2("axxxaaxx") → 2
 */
export function last2(str: string): number {
  let counter = 0;

  if (str.length <= 2) {
    return 0;
  }

  let end = str.substring(str.length - 2);

  for (let x = 0; x < str.length - 2; x++) {
    if (str[x] === end[0] && str[x + 1] === end[1]) {
      counter += 1;
    }
  }

  return counter;
}
