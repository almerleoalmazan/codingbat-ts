/* 6.
  Given 2 ints, a and b, return true if one if them is 10 or if their sum is 10.

  makes10(9, 10) → true
  makes10(9, 9) → false
  makes10(1, 9) → true
*/
export function makes10(a: number, b: number): boolean {
  return a === 10 || b === 10 || a + b === 10;
}
