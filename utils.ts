export function isPrime(num: number) {
  if (num < 2) {
    return false;
  }
  let i = 2;
  while (Math.pow(i, 2) <= num) {
    if (num % i === 0) {
      return false;
    }
    i++;
  }
  return true;
}
