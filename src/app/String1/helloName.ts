/* 1.
 * Given a string name, e.g. "Bob", return a greeting of the form "Hello Bob!".
 *
 * helloName("Bob") → "Hello Bob!"
 * helloName("Alice") → "Hello Alice!"
 * helloName("X") → "Hello X!"
 */
export function helloName(name: string): string {
  return `Hello ${name}!`;
}
