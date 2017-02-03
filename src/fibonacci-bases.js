const fibonacciBases = ( number, base ) => {
  if ( base === 'decimal' ) {
    //capture the number
    //separate it out into an array
    //perform an operation on each integer in the array
    //the above operation does the following:
      //
    //convert it to fibonacci
  } else if ( base === 'fibonacci' ) {
    //convert it to decimal
  } else {
    console.log( 'Please provide either decimal or fibonacci as the second parameter to this function.')
  }
}


module.exports = fibonacciBases
// Binary (base 2) numbers use `1` and `0` to represent the powers of two that can be summed to yield a base 10 (or decimal) result.
//
// For example:
//
// | 16| 8 | 4 | 2 | 1 |
// |---|---|---|---|---|
// | 1 | 0 | 1 | 0 | 1 |
//
// `10101 = 16 + 4 + 1 = 21`
//
// So `10101` is binary for `21`.
//
// The [Fibonacci Sequence](https://en.wikipedia.org/wiki/Fibonacci_number) has a similar property: any positive integer can be written in the form of Fibonacci numbers.
//
// For example:
//
// | 21| 13| 8 | 5 | 3 | 2 | 1 | 1 |
// |---|---|---|---|---|---|---|---|
// | 0 | 1 | 1 | 0 | 0 | 0 | 0 | 0 |
//
// `1100000 = 13 + 8 = 21`
//
// So `1100000` is base Fibonacci for `21`
//
// Write a program that converts from **decimal to base Fibonacc**i and from **Fibonacci to decimal**.
//
// **Example Inputs** (the `decimal` and `fib` labels describe the state the number is currently in):
//
// `decimal 16`
// `decimal 31`
// `fib 10`
// `fib 1`
// `fib 11111`
//
// **Example Outputs:**
//
// `1001000`
// `10100100`
// `1`
// `1`
// `12`
//
// **NOTE:** there can be more than one possible representation of a decimal integer in base Fibonacci (as seen in the 3rd and 4th cases above).
