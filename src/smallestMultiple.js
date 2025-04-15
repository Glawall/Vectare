// First version
function findSmallestMultipleSimple(limit) {
  let number = limit;

  // Keep incrementing until we find a number divisible by all
  while (true) {
    let isDivisibleByAll = true;

    for (let i = 1; i <= limit; i++) {
      if (number % i !== 0) {
        isDivisibleByAll = false;
        break;
      }
    }

    if (isDivisibleByAll) {
      console.log("Smallest multiple (simple method):", number);
      return number;
    }

    number += limit;
  }
}

// Second version - checks divisibility more efficiently
function findSmallestMultiple(limit) {
  if (limit <= 0) return 0;

  let result = 1;
  // Start from 2 since 1 doesn't affect the result
  for (let i = 2; i <= limit; i++) {
    // If result isn't divisible by i, multiply result by smallest number needed
    if (result % i !== 0) {
      result *= i;
    }
  }

  console.log("Smallest multiple second method:", result);
  return result;
}

module.exports = { findSmallestMultiple, findSmallestMultipleSimple };
