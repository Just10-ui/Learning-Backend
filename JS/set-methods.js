const mySet = new Set([1, 2, 3, 4, 5]);

//* The size property
console.log(mySet.size); //output 5

//* The has() method returns true if a specified value exists in a set.
console.log(mySet.has(3)); //output true

//* The forEach() method invokes a function for each Set element:
const twice = new Set();
mySet.forEach(value => {
  twice.add(value * 2);
})
console.log(twice); //output Set(5) { 2, 4, 6, 8, 10 }

