const getNextNumber = (index: number): number => {
  if (index === 0) {
    return 1;
  }
  if (index === 1) {
    return 1;
  }
  return getNextNumber(index - 1) + getNextNumber(index - 2);
};

const getFibonacciSequence = (limit: number) => {
  const sequence: number[] = [];
  let i = 0;
  while (true) {
    const number = getNextNumber(i);
    if (number > limit) {
      break;
    }
    sequence.push(number);
    i++;
  }
  return sequence;
};

if (import.meta.main) {
  console.log(
    getFibonacciSequence(4_000_000)
      .filter((x) => x % 2 === 0)
      .reduce((a, b) => a + b)
  );
}
