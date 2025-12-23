const { walkDog, cleanRoom, feedFish } = require('./promise');

async function doChores() {
  try {
    const walked = await walkDog();
    console.log(walked);

    const cleaned = await cleanRoom();
    console.log(cleaned);
    
    const feed = await feedFish();
    console.log(feed);

    setTimeout(() => {
      console.log('Finished all my chores');
    }, 3000)

  } catch (error) {
    console.log(error);
    setTimeout(() => {
      console.log('You did not do all your chores');
    }, 2000)
  }
}
doChores();