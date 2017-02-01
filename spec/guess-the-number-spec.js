const chai = require( 'chai' )
const { expect } = require( 'chai' )
const chaiChange = require ( 'chai-change' )
const {
  guessTheNumber,
  randomNumberGenerator } = require ( '../src/guess-the-number' )

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
})
