import { altPairs } from "../../app/Warmup2/altPairs"

describe('Warmup-2 > altPairs', () => {
  it.each([
    ['kitten', 'kien'],
    ['Chocolate', 'Chole'],
    ['CodingHorror', 'Congrr'],
    ['yak', 'ya'],
    ['ya', 'ya'],
    ['y', 'y'],
    ['', ''],
  ])('.altPairs("%s") would return "%s"', (str, expected) => {
    expect(altPairs(str)).toBe(expected);
  })
})