const {
  findSmallestMultiple,
  findSmallestMultipleSimple,
} = require("../src/smallestMultiple");

describe("smallestMultiple", () => {
  test("finds smallest multiple up to 10", () => {
    expect(findSmallestMultiple(10)).toBe(2520);
    expect(findSmallestMultipleSimple(10)).toBe(2520);
  });

  test("finds smallest multiple up to 20", () => {
    expect(findSmallestMultiple(20)).toBe(232792560);
    expect(findSmallestMultipleSimple(20)).toBe(232792560);
  });

  test("handles small numbers", () => {
    expect(findSmallestMultiple(1)).toBe(1);
    expect(findSmallestMultiple(2)).toBe(2);
    expect(findSmallestMultiple(3)).toBe(6);
    expect(findSmallestMultiple(4)).toBe(12);
    expect(findSmallestMultiple(5)).toBe(60);
  });

  test("verifies divisibility for result", () => {
    const result = findSmallestMultiple(10);
    for (let i = 1; i <= 10; i++) {
      expect(result % i).toBe(0);
    }
  });

  test("handles invalid inputs", () => {
    expect(findSmallestMultiple(0)).toBe(0);
    expect(findSmallestMultiple(-1)).toBe(0);
  });
});
