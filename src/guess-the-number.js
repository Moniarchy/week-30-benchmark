const readlineSync = require('readline-sync')
const prompt = readlineSync.question

//write a function that uses math.random to generate a random number n between 0 - 100
//console log and ask for user's input g
//have the terminal record g
//if g > n console.log('Your guess was too high')
//if g < n console.log('Your guess was too low')
//if g === n console.log('You're right! Play again?)

const guessTheNumber = guess => {
  if ( typeof guess !== 'number' ) {
    return 'Please input a proper number.'
  } else {
    if ( guess > randomNumberGenerator() ) {
      console.log ('Your guess was too high!')
    } else if ( guess < randomNumberGenerator() ) {
      console.log ('Your guess was too low!')
    } else {
      console.log ('You got it!')
    }
    console.log(randomNumberGenerator())
  }
}

const randomNumberGenerator = () => {
  return Math.floor( Math.random() * 100 )
}


module.exports = {
  guessTheNumber,
  randomNumberGenerator
}
