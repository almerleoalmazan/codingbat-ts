/* 16.
 * Given an array of ints, we'll say that a triple is a value appearing 3 times in a row in the array.
 * Return true if the array does not contain any triples.
 *
 * noTriples([1, 1, 2, 2, 1]) → true
 * noTriples([1, 1, 2, 2, 2, 1]) → false
 * noTriples([1, 1, 1, 2, 2, 2, 1]) → false
 */
export function noTriples(nums: number[]): boolean {
  if (nums.length < 3) {
    return true;
  }

  for (let x = 0; x < nums.length; x++) {
    if (
      x + 2 < nums.length &&
      nums[x] === nums[x + 1] &&
      nums[x] === nums[x + 2]
    ) {
      return false;
    }
  }

  return true;
}
