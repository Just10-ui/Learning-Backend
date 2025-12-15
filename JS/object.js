/*
  * An Object is a variable that can hold many variables.
  * Objects are collections of key-value pairs, where each key (known as property names) has a value.
  * Objects can describe anything like houses, cars, people, animals, or any other subjects. 
*/

//example of an object
const car = {
  type: 'Fiat', 
  model: '500', 
  color: 'white'
};

//* An object literal is a list of key : value pairs inside curly braces { }:
//example of an object literal
const person = {
  name: 'Justin',
  surName: 'Apolong',
  age: 22
};

//* You can also create an empty object, and add the properties later:
//example 
const fruits = {};

fruits.first = 'orange';
fruits.second = 'banana';

//* You can access object properties in two ways:
fruits.third = 'grapes';
fruits['4th'] = 'apple';
console.log(fruits);

//* Object methods are function definitions stored as property values:
//example of object method

const greet = {
  username: 'Justin',
  greetings: 'Hello',
  calling: function() {
    return `${this.greetings} ${this.username}`;
  }
};
console.log(greet.calling());

/*
  * Object Constructor Functions
  * Sometimes we need to create many objects of the same type.
  * To create an object type we use an object constructor function.
  * It is considered good practice to name constructor functions with an upper-case first letter. 
*/

//example of object constructor function
function users(first, last, age) {
  this.firstName = first;
  this.lastName = last;
  this.age = age;
};

const firstUser = new users('Justin', 'Apolong', 22);
console.log(firstUser);

//? destructuring objects
const {type, model, color} = car;