/* 17.
  Given two temperatures, return true if one is less than 0 and the other is greater than 100.


  icyHot(120, -1) → true
  icyHot(-1, 120) → tr
  icyHot(2, 120) → false
 * */
export function icyHot(temp1: number, temp2: number): boolean {
  return (temp1 < 0 && temp2 > 100) || (temp1 > 100 && temp2 < 0);
}
