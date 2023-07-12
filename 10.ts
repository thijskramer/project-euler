/*

Find the sum of all primes below 2 million.

*/

import { isPrime } from "./utils.ts";

if (import.meta.main) {
  const TRESHOLD = 2_000_000;
  const primes = Array.from({ length: TRESHOLD }, (_, v) => v).filter(isPrime);
  const answer = primes.reduce((a, b) => a + b, 0);
  console.log(answer);
}
