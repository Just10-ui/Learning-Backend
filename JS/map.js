/*
  * Map Characteristics
  - Key Types
    * Map keys can be any type (strings, numbers, objects, etc).
  - Insertion Order
    * The Map remembers the original insertion order of the keys.
  - Size
    * The number of items in a Map is easily retrieved using the size property.
  - Performance
    * Maps are optimized for frequent additions and removals of key-value pairs.
  - Iteration
    * Maps are iterable, allowing for direct use of for...of loops or methods like forEach().
  - Iteration Order
    * The original order is preserved during iteration. 
*/
//* You create a JavaScript Map by:
//- Create a new Map and add elements with Map.set()
//- Passing an existing Array to the new Map() constructor
const fruits = new Map();

//* add elements with Map.set()
fruits.set('Apple', 200);
console.log(fruits); //output Map(1) { 'Apple' => 200 }

//* The set() method can also be used to change existing Map values:
fruits.set('Apple', 300);
console.log(fruits); //output Map(1) { 'Apple' => 300 }

//* The get() method gets the value of a key in a Map:
console.log(fruits.get('Apple')); //output 300