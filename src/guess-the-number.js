//write a function that uses math.random to generate a random number n between 0 - 100
//console log and ask for user's input g
//have the terminal record g
//if g > n console.log('Your guess was too high')
//if g < n console.log('Your guess was too low')
//if g === n console.log('You're right! Play again?)


//need to know how to capture user input in terminal

const readline = require('readline');

const guessTheNumber = () => {
  return 1
}

const randomNumberGenerator = () => {
  return Math.floor( Math.random() * 10 )
}

const getUserInput = guess => {
  if ( typeof guess !== 'number' ) {
    return 'Please input a proper number.'
  } else { return guess }
}


module.exports = {
  guessTheNumber,
  randomNumberGenerator,
  getUserInput
}
