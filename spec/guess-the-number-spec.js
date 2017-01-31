const chai = require( 'chai' )
const { expect } = require( 'chai' )
const chaiChange = require ( 'chai-change' )
const {
  guessTheNumber,
  randomNumberGenerator,
  getUserInput } = require ( '../src/guess-the-number' )

chai.use( chaiChange )

describe( 'guessTheNumber', () => {
  'use strict'

  it( 'exists', () => {
    expect( guessTheNumber ).to.be.a( 'function' )
  })

  context( 'randomNumberGenerator()', () =>
    it( 'generates a random number n', () => {
      expect( randomNumberGenerator() ).to.be.a( 'number' )
    }),
    it( 'generates a number whose value is between 0 and 100', () => {
      expect( randomNumberGenerator() ).to.be.within( 0 , 100 )
    })
  )
  context( 'getUserInput()', () =>
    it( 'captures a user input', () => {
      expect( getUserInput(88) ).to.equal( 88 )
    }),
    it( 'returns an error message if the user does not input a number', () => {
      expect( getUserInput('food') ).to.equal('Please input a proper number.' )
    })
  )
})

//write a function that uses math.random to generate a random number n between 0 - 100
//console log and ask for user's input g
//have the terminal record g
//if g > n console.log('Your guess was too high')
//if g < n console.log('Your guess was too low')
//if g === n console.log('You're right! Play again?)


//need to know how to capture user input in terminal
