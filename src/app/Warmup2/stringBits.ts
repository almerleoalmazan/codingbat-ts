/* 5.
  Given a string, return a new string made of every other char starting with the first,
  so "Hello" yields "Hlo".


  stringBits("Hello") → "Hlo"
  stringBits("Hi") → "H"
  stringBits("Heeololeo") → "Hello"
 
 */
export function stringBits(str: string): string {
  let word: string = '';

  for (let x = 0; x < str.length; x += 2) {
    word += str[x];
  }

  return word;
}
