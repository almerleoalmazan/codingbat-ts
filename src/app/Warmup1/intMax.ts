/* 24. 
  Given three int values, a b c, return the largest.

  intMax(1, 2, 3) → 3
  intMax(1, 3, 2) → 3
  intMax(3, 2, 1) → 3
*/
export function intMax(a: number, b: number, c: number): number {
  let max = 0;

  if (a > b) {
    max = a;
  } else {
    max = b;
  }

  if (c > max) {
    max = c;
  }

  return max;
}
