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

// Second version - using GCD to find LCM
function gcd(a, b) {
  while (b) {
    let temp = b;
    b = a % b;
    a = temp;
  }
  return a;
}

function findSmallestMultiple(limit) {
  if (limit <= 0) return 0;

  let result = 1;
  for (let i = 2; i <= limit; i++) {
    result = (result * i) / gcd(result, i);
  }

  console.log("Smallest multiple second method:", result);
  return result;
}

module.exports = { findSmallestMultiple, findSmallestMultipleSimple };
