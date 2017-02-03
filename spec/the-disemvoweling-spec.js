const chai = require( 'chai' )
const { expect } = require( 'chai' )
const disemvowel = require( '../src/the-disemvoweling')

describe( 'The Disemvoweling', () => {
  'use strict'

  it( 'exists', () => {
    expect( disemvowel ).to.be.a( 'function' )
  })
  it( 'removes the vowels a, e, i, o, and u from a string.', () => {
    expect( disemvowel( 'sanctum' )).to.equal( 'snctm' )
  })
  it( 'removes the spaces from a string that has multiple words.', () => {
    expect( disemvowel( 'Oh happy day')).to.equal( 'hhppydy')
  })
})
