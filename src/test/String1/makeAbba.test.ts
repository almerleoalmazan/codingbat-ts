import { makeAbba } from '../../app/String1/makeAbba';

describe('String-1 > makeAbba', () => {
  it.each([
    ['Hi', 'Bye', 'HiByeByeHi'],
    ['Yo', 'Alice', 'YoAliceAliceYo'],
    ['What', 'Up', 'WhatUpUpWhat'],
    ['aaa', 'bbb', 'aaabbbbbbaaa'],
    ['x', 'y', 'xyyx'],
    ['x', '', 'xx'],
    ['', 'y', 'yy'],
    ['Bo', 'Ya', 'BoYaYaBo'],
    ['Ya', 'Ya', 'YaYaYaYa'],
  ])('.makeAbba("%s", "%s") would return "%s"', (a, b, expected) => {
    expect(makeAbba(a, b)).toBe(expected);
  });
});
