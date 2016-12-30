// Write a function that accepts an array of 10 integers (between 0 and 9), that
// returns a string of those numbers in the form of a phone number.

// createPhoneNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 0]) // => returns "(123) 456-7890"

'use strict';

function createPhoneNumber(numbers){
  let symbols = ['-', ') '];
  let output = ['('];
  for (var i = 0; i < 10; i++){
    if (i === 3 || i === 6){
      output.push(symbols.pop(), numbers[i]);
      continue;
    }
    output.push(numbers[i]);
  }
  return (output.join(''));
}


