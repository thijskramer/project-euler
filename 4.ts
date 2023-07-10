/*

Find the largest palindrome made from the product of two 3-digit numbers.

*/

const isPalindrome = (num: number) => {
  // Check whether num is a palindrome.
  const numString = num.toString();
  const numStringReversed = numString.split("").reverse().join("");
  return numString === numStringReversed;
};

const getLargestPalindrome = () => {
  const palindromes: number[] = [];
  for (let i = 999; i >= 100; i--) {
    for (let j = 999; j >= 100; j--) {
      const product = i * j;
      if (isPalindrome(product)) {
        palindromes.push(product);
      }
    }
  }
  return Math.max(...palindromes);
};

console.log(getLargestPalindrome());
