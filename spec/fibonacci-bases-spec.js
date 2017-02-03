const chai = require( 'chai' )
const { expect } = require( 'chai' )
const fibonacciBases = require('../src/fibonacci-bases')

describe( 'fibonacciBases', () => {
  'use strict'

  it( 'exists', () => {
    expect( 'fibonacciBases' ).to.be.a( 'function' )
  })
})
