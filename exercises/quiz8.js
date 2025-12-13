//? medium

//- Write a program in JavaScript that prints a right-angled triangle made of * characters. The triangle should have 5 rows.

for (let x = 0; x < 5; x++) {
  let char = ''
  for (let y = 0; y <= x; y++) {
    char += '*';
  }
  console.log(char);
}