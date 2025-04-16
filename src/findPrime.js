// First version
function findPrimeSimple(position) {
  if (position <= 0) return 0;

  let count = 0;
  let number = 1;

  while (count < position) {
    number++;
    let isPrime = true;

    for (let i = 2; i < number; i++) {
      if (number % i === 0) {
        isPrime = false;
        break;
      }
    }

    if (isPrime) {
      count++;
    }
  }

  console.log("Prime number (simple method):", number);
  return number;
}

// Second version - checks only up to square root and skips even numbers
function findPrime(position) {
  if (position <= 0) return 0;
  if (position === 1) return 2;

  let count = 1; // Start counting from 2
  let number = 1;

  while (count < position) {
    number += 2; // Check only odd numbers

    let isPrime = true;
    for (let i = 3; i <= Math.sqrt(number); i += 2) {
      if (number % i === 0) {
        isPrime = false;
        break;
      }
    }

    if (isPrime) {
      count++;
    }
  }

  console.log("Prime number:", number);
  return number;
}

module.exports = findPrime;
