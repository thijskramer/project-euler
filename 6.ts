/*

Find the difference between the sum of the squares of the first 100 natural numbers and the square of the sum.

*/

{
  const numbers = Array.from({ length: 100 }, (_, n) => n + 1);
  const sumOfSquares = numbers
    .map((num) => num * num)
    .reduce((a, b) => a + b, 0);

  const squareOfSums = Math.pow(
    numbers.reduce((a, b) => a + b, 0),
    2
  );

  console.log(squareOfSums - sumOfSquares);
}
