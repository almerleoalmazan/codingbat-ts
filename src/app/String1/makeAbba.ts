/* 2.
 * Given two strings, a and b, return the result of putting them together
 * in the order abba, e.g. "Hi" and "Bye" returns "HiByeByeHi".
 *
 * makeAbba("Hi", "Bye") → "HiByeByeHi"
 * makeAbba("Yo", "Alice") → "YoAliceAliceYo"
 * makeAbba("What", "Up") → "WhatUpUpWhat"
 */
export function makeAbba(a: string, b: string): string {
  return a + b + b + a;
}
