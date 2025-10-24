/* 8.
  Given 2 int values, return true if one is negative and one is positive. Except if the
  parameter "negative" is true, then return true only if both are negative.

  posNeg(1, -1, false) → true
  posNeg(-1, 1, false) → true
  posNeg(-4, -5, true) → true
*/
export function posNeg(a: number, b: number, negative: boolean): boolean {
  let result: boolean = false;

  if (a < 0 && b < 0 && negative) {
    result = true;
  }

  if (((a < 0 && b > 0) || (a > 0 && b < 0)) && !negative) {
    result = true;
  }

  return result;
}
