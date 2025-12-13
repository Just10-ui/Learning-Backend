//* The indexOf() method returns the index (position) of the first occurrence of a string in a string, or it returns -1 if the string is not found:
let text = "Please locate where 'locate' occurs!";
console.log(text.indexOf("locate")); //output 7

//* The lastIndexOf() method returns the index of the last occurrence of a specified text in a string:
console.log(text.lastIndexOf('locate')); //output 21

//? Both indexOf(), and lastIndexOf() return -1 if the text is not found:
console.log(text.lastIndexOf('john')); //output -1

//? Both methods accept a second parameter as the starting position for the search:
console.log(text.indexOf('locate', 15)); //output 21

//* The search() method searches a string for a string (or a regular expression) and returns the position of the match:
//example of using string
console.log(text.search('locate')); //output 7

//example of using regular expression
console.log(text.search(/locate/)); //output 7

//* The match() method returns an array containing the results of matching a string against a string (or a regular expression).

text = 'The rain in SPAIN stays mainly in the plain';

//example of using string
console.log(text.match('ain')); //output array of objects

//example of using regular expression
console.log(text.match(/ain/)); //output array of objects
console.log(text.match(/ain/g)); //output [ 'ain', 'ain', 'ain' ]
console.log(text.match(/ain/gi)); //output [ 'ain', 'AIN', 'ain', 'ain' ]

//* The matchAll() method returns an iterator containing the results of matching a string against a string (or a regular expression).

text = 'I love cats. Cats are very easy to love. Cats are very popular.';

console.log(text.matchAll('Cats')); //output Object [RegExp String Iterator] {}

//example of using regular expression
console.log(text.matchAll(/ain/g)); //output Object [RegExp String Iterator] {}
console.log(text.matchAll(/ain/gi)); //output Object [RegExp String Iterator] {}

//* The includes() method returns true if a string contains a specified value.Otherwise it returns false.
text = 'Hello world, welcome to the universe.';

//- Check if a string includes "world":
console.log(text.includes('world')); //output true

//- Check if a string includes "world". Start at position 12:
console.log(text.includes('world', 12)); //output false

//* The startsWith() method returns true if a string begins with a specified value. Otherwise it returns false:
//- returns true
console.log(text.startsWith('Hello')); //output true

//- returns false
console.log(text.startsWith('world')); //output false

//? A start position for the search can be specified:
console.log(text.startsWith("world", 6)); //output true

//* The endsWith() method returns true if a string ends with a specified value. Otherwise it returns false:
//- returns true
console.log(text.endsWith('universe.')); //output true

//- returns false
console.log(text.endsWith('universe')); //output false

//- added second parameter
console.log(text.endsWith('world', 11)); //output true