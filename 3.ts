/*

What is the largest prime factor of the number 600851475143?

*/

const COMPOSITE = 600_851_475_143;

const isPrime = (num: number) => {
  // Check whether num is a prime number.
  if (num < 2) {
    return false;
  }
  for (let i = 2; i < num; i++) {
    if (num % i === 0) {
      return false;
    }
  }
  return true;
};

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
