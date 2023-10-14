// Longest Collatz Sequence

function getNextNumber(n: number) {
  if (n % 2 === 0) {
    return n / 2;
  }
  return 3 * n + 1;
}

function getSequence(startingNumber: number) {
  const sequence = [startingNumber];
  let lastNumber = startingNumber;
  while (true) {
    const nextNumber = getNextNumber(lastNumber);
    sequence.push(nextNumber);
    if (nextNumber === 1) {
      break;
    }
    lastNumber = nextNumber;
  }
  return sequence;
}

function getLongestSequence(limit: number) {
  let longestSequence = 0;
  let longestSequenceStartingNumber = 0;
  let startingNumber = 1;
  while (startingNumber < limit) {
    const sequence = getSequence(startingNumber);
    if (sequence.length > longestSequence) {
      longestSequence = sequence.length;
      longestSequenceStartingNumber = startingNumber;
    }
    startingNumber++;
  }
  return [longestSequenceStartingNumber, longestSequence];
}

if (import.meta.main) {
  const t0 = performance.now();
  const [startingNumber, longest] = getLongestSequence(1_000_000);
  const t1 = performance.now();
  console.log(
    `Found it in ${Math.round(
      t1 - t0
    )}ms: ${longest} terms for ${startingNumber}`
  );
}
