/* 13.
  Given a string, return a string made of the chars at indexes 0,1, 4,5, 8,9 ...
  so "kittens" yields "kien".

  altPairs("kitten") → "kien"
  altPairs("Chocolate") → "Chole"
  altPairs("CodingHorror") → "Congrr"
*/
export function altPairs(str: string): string {
  let newWord = '';

  for (let x = 0; x < str.length; x++) {
    if (x % 4 < 2) {
      newWord += str[x];
    }
  }

  return newWord;
}