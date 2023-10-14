function getTriangleNumber(n: number) {
  // Gauss' sum formula
  return (n * (n + 1)) / 2;
}

function getDivisors(n: number) {
  const divisors = [];
  let i = 1;
  while (i <= Math.sqrt(n)) {
    if (n % i === 0) {
      divisors.push(i);
      const p = Math.floor(n / i);
      if (i !== p) {
        divisors.push(p);
      }
    }
    i++;
  }
  return divisors.sort();
}

function getTriangleNumberWithDivisors(divisorCount: number) {
  let numDivisors = 1;
  let triangleWidth = 1;
  while (numDivisors < divisorCount) {
    const n = getTriangleNumber(triangleWidth);
    const divisors = getDivisors(n);
    numDivisors = divisors.length;
    if (numDivisors >= divisorCount) {
      return n;
    }
    triangleWidth++;
  }
}

if (import.meta.main) {
  const t0 = performance.now();
  const number = getTriangleNumberWithDivisors(500);
  const t1 = performance.now();
  console.log(`Found ${number}, it took ${Math.floor(t1 - t0)} ms.`);
}
