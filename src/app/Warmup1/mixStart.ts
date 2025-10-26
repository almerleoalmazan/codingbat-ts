/* 22.
  Return true if the given string begins with "mix", except the 'm' can be anything,
  so "pix", "9ix" .. all count.


  mixStart("mix snacks") → true
  mixStart("pix snacks") → true
  mixStart("piz snacks") → false
 */
export function mixStart(str: string): boolean {
  return str.startsWith('ix', 1);
}
