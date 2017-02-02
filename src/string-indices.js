const stringIndices = ( string, index ) => {
  const result = string.split(' ')

  if ( index < 1 || index > result.length ) {
    return ''
  } else {
    return( result[ index -1 ])
    }
  }

stringIndices('Cash me outside', 3)

module.exports = {stringIndices}
