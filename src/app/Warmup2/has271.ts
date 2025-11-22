/* 17.
 * Given an array of ints, return true if it contains a 2, 7, 1 pattern: a value,
 * followed by the value plus 5, followed by the value minus 1.
 * Additionally the 271 counts even if the "1" differs by 2 or less from the correct value.
 *
 * has271([1, 2, 7, 1]) → true
 * has271([1, 2, 8, 1]) → false
 * has271([2, 7, 1]) → true
 */
export function has271(nums: number[]): boolean {
  for (let x = 0; x < nums.length; x++) {
    if (x + 2 < nums.length && nums[x + 1] === nums[x] + 5) {
      let valueOfX = nums[x] - 1;
      let lowerRange = valueOfX - 2;
      let highRange = valueOfX + 2;

      if (nums[x + 2] <= highRange && nums[x + 2] >= lowerRange) {
        return true;
      }
    }
  }

  return false;
}
