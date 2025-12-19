//!hard
//* Given an array of integers, use foreach to print the sum of only the prime numbers.

const numbers = [10, 3, 5, 8, 11, 15, 17];
let sumOfNumbers = 0;

numbers.forEach(items => {
  let prime = 0;
  for (let i = 2; i <= items; i++) {
    for (let j = 2; j <= items; j++) {
      if (j * i == items) prime += 1;
    }
  }
  if (prime <= 1) sumOfNumbers += items;
});
console.log(sumOfNumbers);