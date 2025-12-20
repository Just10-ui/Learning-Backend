//? medium
//* - Square each number in - Square each number in [1,3,5,7]

const number = [1,3,5,7];

const square = number.map(value => {
  return value ** 2;
});
console.log(square);