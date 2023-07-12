/*

What is the 10001st prime number?

*/

import { isPrime } from "./utils.ts";

if (import.meta.main) {
  let i = 1;
  let primeCounter = 0;
  while (true) {
    if (isPrime(i)) {
      primeCounter++;
    }
    if (primeCounter === 10001) {
      console.info(i);
      break;
    }
    i++;
  }
}
