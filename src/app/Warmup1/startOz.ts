/* 23.
  Given a string, return a string made of the first 2 chars (if present),
  however include first char only if it is 'o' and include the 
  second only if it is 'z', so "ozymandias" yields "oz".

  startOz("ozymandias") → "oz"
  startOz("bzoo") → "z"
  startOz("oxx") → "o"
*/
export function startOz(str: string): string {
  let result = '';

  if (str[0] === 'o') {
    result += 'o';
  }

  if (str[1] === 'z') {
    result += 'z';
  }

  return result;
}
