const findSum = require("../src/multiplesSum");

describe("findSum", () => {
  test("should return 23 for numbers below 10", () => {
    expect(findSum(10)).toBe(23);
  });

  test("should return 0 for limit of 0", () => {
    expect(findSum(0)).toBe(0);
  });

  test("should return 0 for negative numbers", () => {
    expect(findSum(-10)).toBe(0);
  });

  test("should return correct sum for numbers below 1000", () => {
    expect(findSum(1000)).toBe(233168);
  });
});
