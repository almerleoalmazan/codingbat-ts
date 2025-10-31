/* 10.
  Given an array of ints, return true if the sequence of numbers 
  1, 2, 3 appears in the array somewhere.

  array123([1, 1, 2, 3, 1]) → true
  array123([1, 1, 2, 4, 1]) → false
  array123([1, 1, 2, 1, 2, 3]) → true
 */
export function array123(nums: number[]): boolean {
  let is123 = false;

  if (nums.length < 3) {
    return false;
  }

  let numsLength = nums.length - 2;

  for (let x = 0; x < numsLength; x++) {
    if (nums[x] === 1 && nums[x + 1] === 2 && nums[x + 2] === 3) {
      is123 = true;
    }
  }

  return is123;
}
