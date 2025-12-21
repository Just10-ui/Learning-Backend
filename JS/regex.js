//* The clear() method removes all the elements from a map:
let text = 'Visit W3schools';
console.log(text.match(/W3schools/));

//* Using String replace()
console.log(text.replace(/W3schools/i, 'Microsoft'));

//* Using String search()
console.log(text.search(/W3schools/));

//* An alteration matches any of the alternatives separated with |.
text = "Black, white, red, green, blue, yellow.";
console.log(text.match(/red|green|blue/g));

//* regex flag
//* Flag	     Description
//- /g	  |    Performs a global match (find all)
//- /i	  |    Performs case-insensitive matching
//- /u	  |    Enables Unicode support (new 2015)

//* The /g flag matches all occurrences of the pattern, rather than just the first one.
text = "Is this all there is?";
let pattern = /is/g;
console.log(text.match(pattern));

//* The /i flag makes a match case-insensitive: /abc/i matches "abc", "AbC", "ABC".
text = "Visit W3Schools";
pattern = /w3schools/i;
console.log(text.match(pattern));

/* 
  * Metacharacters are characters with a special meaning.
  * They can be used to match digits, words, spaces, and more.
  * These are the most common:
  * Meta	       Description
  - \d	    |    Matches Digits
  - \w	    |    Matches Words
  - \s	    |    Matches Spaces
*/

//* The \d metacharacter matches digits.
text = "Give 100%!";
console.log(text.match(/\d/g));

//* The \w metacharacter matches word characters.
console.log(text.match(/\w/g));
