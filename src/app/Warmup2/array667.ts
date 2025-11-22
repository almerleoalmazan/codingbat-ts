/* 15.
 * Given an array of ints, return the number of times that two 6's are next to each other in the array.
 * Also count instances where the second "6" is actually a 7.
 *
 * array667([6, 6, 2]) → 1
 * array667([6, 6, 2, 6]) → 1
 * array667([6, 7, 2, 6]) → 1
 */
export function array667(nums: number[]): number {
  let count = 0;

  for (let x = 0; x < nums.length; x++) {
    if (
      x + 1 < nums.length &&
      nums[x] === 6 &&
      (nums[x + 1] === 6 || nums[x + 1] === 7)
    ) {
      count += 1;
    }
  }

  return count;
}
