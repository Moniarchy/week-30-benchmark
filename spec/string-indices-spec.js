const chai = require( 'chai' )
const { expect } = require( 'chai' )
const {stringIndices} = require( '../src/string-indices' )

describe( 'stringIndices', () => {
  'use strict'

  it( 'exists', () => {
    expect( stringIndices ).to.be.a( 'function' )
  })
  it('returns an empty string if the supplied index is longer or shorter than the length of the string.', () => {
    expect( stringIndices('It is such a lovely day.', -3)).to.equal( '' )
  })
  it('returns the word at the specified index.', () => {
    expect( stringIndices('I mean really a gorgeous day.', 2)).to.equal( 'mean' )
  })
})
