//* The forEach() method calls a function (a callback function) once for each array element.
const numbers = [1, 2, 3, 4, 5];

const ForEach = (items, index, array) => {
  console.log(`item ${items}'s index is ${index} in the array [ ${array} ]`);
};
numbers.forEach(ForEach);

//* you can also do it like this
numbers.forEach((item, index, array) => {
  console.log(`${item} is at position ${index} in the [ ${array} ]`);
});

//* The map() method creates a new array by performing a function on each array element.
const twice = numbers.map(item => {
  return item * 2;
});
console.log(twice); //output [ 2, 4, 6, 8, 10 ]
console.log(numbers); //output [ 1, 2, 3, 4, 5 ]