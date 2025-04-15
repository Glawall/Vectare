function findLargestPalindrome(digits) {
  if (!digits || digits < 1 || !Number.isInteger(digits)) {
    return 0;
  }

  const start = Math.pow(10, digits) - 1;
  const end = Math.pow(10, digits - 1);
  let max = 0;

  for (let i = start; i >= end && i * i > max; i--) {
    for (let j = i; j >= end; j--) {
      const result = i * j;
      if (result <= max) break;

      if (result === Number(result.toString().split("").reverse().join(""))) {
        max = result;
      }
    }
  }

  console.log("Largest palindrome:", max);
  return max;
}

module.exports = findLargestPalindrome;
