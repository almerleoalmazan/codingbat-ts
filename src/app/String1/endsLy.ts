/* 16.
 * Given a string, return true if it ends in "ly".
 *
 * endsLy("oddly") → true
 * endsLy("y") → false
 * endsLy("oddy") → false
 */
export function endsLy(str: string): boolean {
  return str.endsWith('ly');
}
