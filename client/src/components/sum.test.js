import { sum } from "./sum"

test('what is a+b', () => {
  expect(sum(1, 5)).toEqual(6)
})
