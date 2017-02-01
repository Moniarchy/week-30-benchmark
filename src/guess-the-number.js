const readlineSync = require('readline-sync')
const prompt = readlineSync.question

const guessTheNumber = guess => {
  const randomNumber = randomNumberGenerator()
    if ( guess > randomNumber ) {
      console.log ('Your guess was too high!')
    } else if ( guess < randomNumber ) {
      console.log ('Your guess was too low!')
    } else {
      console.log ('You got it!')
    }
    console.log( 'The computer says: ' + randomNumber )
}

const randomNumberGenerator = () => {
  return Math.floor( Math.random() * 100 )
}

const guess = prompt('Number, please: ')
guessTheNumber(guess)

module.exports = {
  guessTheNumber,
  randomNumberGenerator
}
