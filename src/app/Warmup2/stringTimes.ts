/* 1.
  Given a string and a non-negative int n, return a larger string that 
  is n copies of the original string.


  stringTimes("Hi", 2) → "HiHi"
  stringTimes("Hi", 3) → "HiHiHi"
  stringTimes("Hi", 1) → "Hi"
 */
export function stringTimes(str: string, n: number): string {
  return str.repeat(n);
}
