/* 6.
  Given a non-empty string like "Code" return a string like "CCoCodCode".


  stringSplosion("Code") → "CCoCodCode"
  stringSplosion("abc") → "aababc"
  stringSplosion("ab") → "aab"
 */
export function stringSplosion(str: string): string {
  let word = '';

  for (let x = 0; x < str.length; x++) {
    for (let y = 0; y < x; y++) {
      word += str[y];
    }
  }

  return word + str;
}
