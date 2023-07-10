/*

What is the smallest positive number that is evenly divisible by all of the numbers from 1 to 20?

*/

const LARGEST_NUMBER = 20;

const numbers = Array.from(
  { length: LARGEST_NUMBER },
  (_, v) => v + 1
).reverse();

let start = LARGEST_NUMBER;

const numberIsEvenlyDisibleByAll = (number: number) => {
  return numbers.every((num) => number % num === 0);
};

while (true) {
  if (numberIsEvenlyDisibleByAll(start)) {
    console.log(start);
    break;
  }
  start += LARGEST_NUMBER;
}
