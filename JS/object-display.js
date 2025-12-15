//* The properties of an object can be collected in a loop:
const person = {
  name: "John",
  age: 30,
  city: "New York"
};

// Build a Text
let text = "";
for (let x in person) {
  text += person[x] + " ";
};
console.log(text);

//* Object.values() creates an array from the property values:
//example usage
const myArray = Object.values(person);
console.log(myArray);

//example of making it a string
console.log(myArray.toString());

//* Object.entries() makes it simple to use objects in loops:
//example
const fruits = {Bananas:300, Oranges:200, Apples:500};

text = "";
for (let [fruit, value] of Object.entries(fruits)) {
  text += fruit + ": " + value + ', ';
}
console.log(text);