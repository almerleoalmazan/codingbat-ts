/* 27.
  Given 2 positive int values, return the larger value that is in the range 10..20
  inclusive, or return 0 if neither is in that range.

  max1020(11, 19) → 19
  max1020(19, 11) → 19
  max1020(11, 9) → 11
*/
export function max1020(a: number, b: number): number {
  let isAIn1020Range = a >= 10 && a <= 20;
  let isBIn1020Range = b >= 10 && b <= 20;

  if (!isAIn1020Range && !isBIn1020Range) {
    return 0;
  }

  if (isAIn1020Range && isBIn1020Range) {
    return Math.max(a, b);
  }

  if (isAIn1020Range && !isBIn1020Range) {
    return a;
  } else {
    return b;
  }
}
