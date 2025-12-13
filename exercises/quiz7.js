//* easy

//- Write a program in JavaScript that prints a multiplication table from 1 to 5 using nested loops.

let result = '';

for (let i = 1; i < 6; i++) {
  for (let j = 1; j < 6; j++) {
    result += i * j + ' ';
  }
  result += '\n';
}
console.log(result);