const disemvowel = string => {
  const vowels = [ 'a', 'e', 'i', 'o', 'u' ]
  const slicedString = string.slice( '' ) //now we have [ 'm', 'o', 'n', 'i', 'c', 'a']

  for( let i = 0; i < slicedString.length ; i++ ) {
    for( let j = 0; i < vowels.length ; j++ ) {
    console.log(slicedString[i] === vowels[j])
  }
  }
  //loop through slicedString and compare that value to the value of vowels array
  //if value at any index equals the value of something in the vowels array
  //splice that value.
  //reconstruct the string by using slicedString.join('')
}



// ### 5: The Disemvowling
//
// Disemvoweling means removing the vowels (a, e, i, o, u) from text.
//
// **Input:**
//
// A string that contains several words to disemvowel. It will consist of all lowercase letters without punctuation. The only non a-z character you should handle is spaces.
//
// **Output:**
//
// The disemvowled text with spaces removed.
//
// ---

disemvowel('monica')

// const disemvowel = string => {
//   const vowels = [ 'a', 'e', 'i', 'o', 'u' ]
//   const slicedString = string.slice( '' ) //now we have [ 'm', 'o', 'n', 'i', 'c', 'a']
//
//   for ( let i = 0; i < slicedString.length; i++ ) {
//     console.log(slicedString[i] === vowels[i])
//   }}
