/*

What is the largest prime factor of the number 600851475143?

*/

import { isPrime } from "./utils.ts";

const COMPOSITE = 600_851_475_143;

if (import.meta.main) {
  // create a list of all the numbers that could be factors of the composite number.
  // Use the square root of the composite number as the upper limit,
  // because the largest factor of a number cannot be larger than its square root.
  const listOfPossibleFactors = Array.from(
    { length: Math.floor(Math.sqrt(COMPOSITE)) },
    (_, i) => i + 1
  ).reverse();

  // Iterate through the list of possible factors,
  // and check whether each one is both a factor and a prime number.
  listOfPossibleFactors.every((prime) => {
    if (COMPOSITE % prime === 0 && isPrime(prime)) {
      console.log(prime); // found it!
      return false;
    }
    return true;
  });
}
