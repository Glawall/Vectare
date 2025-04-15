function findEvenFibSum(limit) {
  if (limit < 0) return 0;

  let sum = 0;
  let prev = 1;
  let current = 2;

  while (current <= limit) {
    if (current % 2 === 0) {
      sum += current;
    }

    const next = prev + current;
    prev = current;
    current = next;
  }

  return sum;
}

module.exports = findEvenFibSum;
