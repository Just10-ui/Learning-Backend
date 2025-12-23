function greet() {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve('Hello World!');
    }, 3000)
  })
}

function isEven(num) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (num % 2 == 0) {
        resolve('Value is acceptable');
      } else {
        reject('Value is not acceptable!!');
      }
    }, 3000)
  })
}

function chainNum(num) {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve(num);
    }, 2000)
  })
}

function fetch(delay) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (delay > 0) {
        resolve('Data received');
      } else {
        reject('Invalid delay');
      }
    }, 2000)
  });
}

function promiseDelay(delay, message) {
  return new Promise (resolve => {
    setTimeout(() => {
    resolve(`${message} is done by ${delay} milliseconds`);
  }, delay)
  })
}

const promise1 = promiseDelay(1000, 'First promise');
const promise2 = promiseDelay(2000, 'Second promise');
const promise3 = promiseDelay(3000, 'Third promise');

Promise.all([promise1, promise2, promise3]).then(value => {
  console.log('The results are:');
  console.log(value);
})

greet().then(value => { console.log(value); return isEven(8)})
       .then(value => { console.log(value); return fetch(-2)})
       .then(value => { console.log(value);})
       .catch(error => { console.log(error);})

chainNum(4).then(value => {return value *= 2;})
          .then(value => {return value += 5})
          .then(value => { console.log(value);})