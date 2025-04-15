const findLargestPalindrome = require("../src/palindromeProduct");

describe("findLargestPalindrome", () => {
  test("handles single digit numbers", () => {
    expect(findLargestPalindrome(1)).toBe(9);
  });

  test("finds largest palindrome from two digits", () => {
    expect(findLargestPalindrome(2)).toBe(9009);
  });

  test("finds largest palindrome from three digits", () => {
    expect(findLargestPalindrome(3)).toBe(906609);
  });

  test("handles invalid inputs", () => {
    expect(findLargestPalindrome(0)).toBe(0);
    expect(findLargestPalindrome(-1)).toBe(0);
  });

  test("handles edge cases", () => {
    expect(findLargestPalindrome(1.5)).toBe(0);
    expect(findLargestPalindrome(null)).toBe(0);
    expect(findLargestPalindrome(undefined)).toBe(0);
  });
});
