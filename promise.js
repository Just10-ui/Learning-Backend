//Example
//* Do these chores
//- 1. Walk the Dog
//- 2. Clean your Room
//- 3. Feed the Fish

const walkDog = () => {
 return new Promise((resolve, reject) => {
  setTimeout(() => {
    const dog = true;
  if (dog) {
    resolve('You have walked the dog');
  } else {
    reject('You did not walked the dog');
  }
  }, 3000)
 }) 
}

const cleanRoom = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const clean = true;
      if (clean) {
        resolve('You have cleaned your room');
      } else {
        reject('You have not cleaned your room');
      }
    }, 3000)
  })
}

const feedFish = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const feed = false;
      if (feed) {
        resolve('You have feed the fish')
      } else {
        reject('You have not feed the fish')
      }
    }, 3000)
  })
}

// walkDog().then(value => {console.log(value); return cleanRoom()})
//        .then(value => {console.log(value); return feedFish()})
//        .then(value => {console.log(value); return setTimeout(() => {
//         console.log('Finished all task');
//        }, 3000)})
//        .catch(error => {console.log(error);})

module.exports = {
  walkDog,
  cleanRoom,
  feedFish
};