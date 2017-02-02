

const scrabBag = tiles => {
  if ( typeof tiles !== 'string' ) {
  console.log( 'Help! I only work with a string!' )
} else {
  const bag = [
    'E', 'E', 'E', 'E', 'E', 'E', 'E', 'E', 'E', 'E', 'E', 'E', 'A', 'A', 'A',
    'A', 'A', 'A', 'A', 'A', 'A', 'I', 'I', 'I', 'I', 'I', 'I', 'I', 'I', 'I',
    'O', 'O', 'O', 'O', 'O', 'O', 'O', 'O', 'N', 'N', 'N', 'N', 'N', 'N', 'R',
    'R', 'R', 'R', 'R', 'R', 'T', 'T', 'T', 'T', 'T', 'T', 'L', 'L', 'L', 'L',
    'S', 'S', 'S', 'S', 'U', 'U', 'U', 'U', 'D', 'D', 'D', 'D', 'G', 'G', 'G',
    '_', '_', 'B', 'B', 'C', 'C', 'M', 'M', 'P', 'P', 'F', 'F', 'H', 'H', 'V',
    'V', 'W', 'W', 'Y', 'Y', 'K', 'J', 'X', 'Q', 'Z'
  ]
  const playedPieces = tiles.split('')

  for ( index = 0; index < playedPieces.length; index++ ) {
    bag.find()
    while ( bag[jindex] !== playedPieces[index] ) { //loop through second array while we have not found an instance of the value
      if ( playedPieces[index] === bag[index] ) {
        bag.splice( bag[jindex], 1)
        }
      }
    } console.log(bag)
  }
}


//now i have two arrays. i need to loop through the first array and record the value.
//then i need to loop through the second array and search the whole thing and take out the first instance of the value
//after all that, i have my updated array and can proceed

scrabBag('E')
//record how many of each letter there are in the bag
//cut the string into individual strings in an array
//iterate through the string and then find those values in the second, larger array. splice them
//add the amount of characters there are left of a certain value in the larger array
//if else or switch statement to print the numbers

//OR

//record how many of each letter there are in the bag
//cut the string into individual strings in an array
//count how many of each character are found in the shorter array
//subtract that from how many of each letter there were in the bag

//match up the number/letter pairs and console.log them
