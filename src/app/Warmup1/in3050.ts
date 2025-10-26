/* 26.
  Given 2 int values, return true if they are both in the range 30..40 inclusive,
  or they are both in the range 40..50 inclusive.

  in3050(30, 31) → true
  in3050(30, 41) → false
  in3050(40, 50) → true
 */
export function in3050(a: number, b: number): boolean {
  let is3040Inclusive = a >= 30 && a <= 40 && b >= 30 && b <= 40;
  let is4050Inclusive = a >= 40 && a <= 50 && b >= 40 && b <= 50;

  return is3040Inclusive || is4050Inclusive;
}
