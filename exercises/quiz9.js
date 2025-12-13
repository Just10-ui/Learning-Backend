//! hard

//- Write a program in JavaScript that prints the first 7 rows of Pascal’s Triangle using nested loops.

function factorial(num) {
  if (num === 1) {
    return 1;
  } else {
    return num * factorial(num - 1);
  }
}

function C(num1, num2) {
  let min = num1 - num2;
  if (num1 == 0 || num2 == 0 || num1 == num2) {
    return 1;
  } else {
    return factorial(num1) / (factorial(num2) * factorial(min));
  }
}

for (let i = 0; i <= 7; i++) {
  let str = '';
  for (let j = 0; j <= i; j++) {
    let r = C(i, j);
    str += r + ' ';
  }
  if (str.length > 10) {
    console.log(str);
  } else {
    console.log(' '.repeat(5 - i) + str);
  }
}