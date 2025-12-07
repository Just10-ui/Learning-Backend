/*
  * Conditional Statements
  * Conditional Statements allow us to perform different actions for different conditions.
  * Conditional statements run different code depending on true or false      conditions.
   
  * Conditional statements include:
  - if
  - if...else
  - if...else if...else
  - switch
  - ternary (? :)

  * When to use Conditionals
  - Use if to specify a code block to be executed, if a specified condition is true
  - Use else to specify a code block to be executed, if the same condition is false
  - Use else if to specify a new condition to test, if the first condition is false
  - Use switch to specify many alternative code blocks to be executed
  - Use (? :) (ternary) as a shorthand for if...else
*/

//Example of using if statement
if (condition) {
  // code to be executed if condition is true
}

//Example of using if...else statement
if (condition) {
  // code to be executed if the condition is true
} else {
  // code to be executed if the condition is false
}

//Example of using else if statement
if (condition1) {
  // code to be executed if the condition is true
} else if (condition2) {
  // code to be executed if the first condition is false
} else {
  // code to be executed if both condition is false
}

//Example of using switch statement
switch(expression) {
  case x:
    // code block
    break;
  case y:
    // code block
    break;
  default:
    // code block
}

//Example of ternary operator as a shorthand for else if
condition ? expression1 : expression2