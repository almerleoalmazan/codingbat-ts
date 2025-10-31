/* 9.
  Given an array of ints, return true if one of the first 4 elements in the array is a 9.
  The array length may be less than 4.

  arrayFront9([1, 2, 9, 3, 4]) → true
  arrayFront9([1, 2, 3, 4, 9]) → false
  arrayFront9([1, 2, 3, 4, 5]) → false
 */
export function arrayFront9(nums: number[]): boolean {
  let numsLength = nums.length;

  if (numsLength > 4) {
    numsLength = 4;
  }

  for (let x = 0; x < numsLength; x++) {
    if (nums[x] === 9) {
      return true;
    }
  }

  return false;
}
