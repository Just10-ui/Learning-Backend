/*
  * The Continue Statement
  * The continue statement skips the current iteration in a loop.
  * The remaining code in the iteration is skipped and processing moves to the next iteration. 
*/

// ? continue in loop
for (let i = 1; i < 10; i++) {
  if (i === 3) { continue; }
  text += "The number is " + i + "<br>";
}

// ? using label with continue
let text = "";

loop1: for (let j = 1; j < 5; j++) {
  loop2: for (let i = 1; i < 5; i++) {
    if (i === 3) { continue loop1; }
    text += i;
   }
}