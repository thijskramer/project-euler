/*

A pythagorean triplet is a set of three natural numbers a < b < c for which
a² + b² = c² .
Find the product of abc where a + b + c === 1000.

*/

function isValidTriplet(a: number, b: number, c: number) {
  return Math.pow(a, 2) + Math.pow(b, 2) == Math.pow(c, 2);
}

if (import.meta.main) {
  for (let a = 1; a < 1000; a++) {
    for (let b = a; b < 1000; b++) {
      const c = 1000 - (a + b);
      if (isValidTriplet(a, b, c)) {
        console.log(a, b, c, "Product:", a * b * c);
        break;
      }
    }
  }
}
