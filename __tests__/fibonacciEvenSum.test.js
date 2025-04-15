const findEvenFibSum = require("../src/fibonacciEvenSum");

describe("findEvenFibSum", () => {
  test("should return 2 for limit of 2", () => {
    expect(findEvenFibSum(2)).toBe(2);
  });

  test("should return 10 for limit of 10", () => {
    // Even numbers are 2, 8
    expect(findEvenFibSum(10)).toBe(10);
  });

  test("should return 44 for limit of 100", () => {
    // Even numbers are 2, 8, 34
    expect(findEvenFibSum(100)).toBe(44);
  });

  test("should return correct sum for limit of 4 million", () => {
    expect(findEvenFibSum(4000000)).toBe(4613732);
  });

  test("should return 0 for negative numbers", () => {
    expect(findEvenFibSum(-10)).toBe(0);
  });
});
