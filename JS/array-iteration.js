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

//* The flatMap() method first maps all elements of an array and then creates a new array by flattening the array.
numbers.push([6]);
const newArr = numbers.flatMap((items) => items * 2);
console.log(newArr); //output [ 2, 4, 6, 8, 10, 12 ]
//? combines flat() and math() methods

//* The filter() method creates a new array with array elements that pass a test.
numbers.pop();
const four = numbers.filter(items => {
  return items < 4;
});
console.log(four); //output [ 1, 2, 3 ]

//* The reduce() method runs a function on each array element to produce a single value.

const sum = numbers.reduce((total, items) => {
  return total + items;
}); 
console.log(sum); //output 15

//* The every() method checks if all array values pass a test.
let allOver4 = numbers.every(myFunction);
function myFunction(value, index, array) {
  return value > 4;
}
console.log(allOver4); //output false

//* The some() method checks if some array values pass a test.
let someNumbers = numbers.some(value => {
  return value < 4;
});
console.log(someNumbers); //output true

//* The Array.from() method returns an Array object from:
//- Any iterable object
//- Any object with a length property
let text = 'string';
console.log(Array.from(text)); //output [ 's', 't', 'r', 'i', 'n', 'g' ]

//* The entries() method returns an Array Iterator object with key/value pairs:
console.log(numbers.entries());

//* the Array with() method as a safe way to update elements in an array without altering the original array.
const months = ["Januar", "February", "Mar", "April"];
const myMonths = months.with(2, "March");
console.log(myMonths); //output [ 'Januar', 'February', 'March', 'April' ]

//* The ... operator expands an array into individual elements.
const arr1 = [1, 2, 3];
const arr2 = [4, 5, 6];
const arr3 = [...arr1, ...arr2];
console.log(arr3); //output [ 1, 2, 3, 4, 5, 6 ]
