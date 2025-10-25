/* 20.
  We'll say that a number is "teen" if it is in the range 13..19 inclusive.
  Given 2 int values, return true if one or the other is teen, but not both.

  loneTeen(13, 99) → true
  loneTeen(21, 19) → true
  loneTeen(13, 13) → false
*/
export function loneTeen(a: number, b: number): boolean {
  const aInTeen = a >= 13 && a <= 19;
  const bInTeen = b >= 13 && b <= 19;

  return (aInTeen && !bInTeen) || (!aInTeen && bInTeen);
}
