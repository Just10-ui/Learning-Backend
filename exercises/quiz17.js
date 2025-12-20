//? medium
//* - Find max in [10,25,7,30,18]

const number = [10,25,7,30,18];

const Max = number.reduce((total, value) => {
  let max = total;
  if (max < value) return max = value;
  return max;
}, number[0]);
console.log(Max);