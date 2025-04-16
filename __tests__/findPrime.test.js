const findPrime = require("../src/findPrime");

describe("findPrime", () => {
  test("finds first few prime numbers", () => {
    expect(findPrime(1)).toBe(2);
    expect(findPrime(2)).toBe(3);
    expect(findPrime(3)).toBe(5);
    expect(findPrime(4)).toBe(7);
    expect(findPrime(5)).toBe(11);
    expect(findPrime(6)).toBe(13);
  });

  test("finds larger prime numbers", () => {
    expect(findPrime(10)).toBe(29);
    expect(findPrime(100)).toBe(541);
  });

  test("verifies numbers are actually prime", () => {
    const result = findPrime(10);
    for (let i = 2; i < result; i++) {
      expect(result % i).not.toBe(0);
    }
  });

  test("handles invalid inputs", () => {
    expect(findPrime(0)).toBe(0);
    expect(findPrime(-1)).toBe(0);
  });
});
