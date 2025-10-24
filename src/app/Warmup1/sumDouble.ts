/* 3.
  Given two int values, return their sum. Unless the two values are the same, then return
  double their sum.

  sumDouble(1, 2) → 3
  sumDouble(3, 2) → 5
  sumDouble(2, 2) → 8
*/
export function sumDouble(a: number, b: number): number {
  return a !== b ? a + b : (a + b) * 2;
}
