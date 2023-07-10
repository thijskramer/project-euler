/*

Find the sum of all the multiples of 3 or 5 below 1000.
.
*/

let num = 999;
const multiples: number[] = [];
while (num > 0) {
  if (num % 3 === 0 || num % 5 === 0) {
    multiples.push(num);
  }
  num--;
}

console.log(multiples.reduce((a, b) => a + b));
