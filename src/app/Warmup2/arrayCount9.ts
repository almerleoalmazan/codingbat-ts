/* 8.
  Given an array of ints, return the number of 9's in the array.

  arrayCount9([1, 2, 9]) → 1
  arrayCount9([1, 9, 9]) → 2
  arrayCount9([1, 9, 9, 3, 9]) → 3
 */
export function arrayCount9(nums: number[]): number {
  let counter = 0;

  for (let x = 0; x < nums.length; x++) {
    if (nums[x] === 9) {
      counter += 1;
    }
  }

  return counter;
}
