// Count the number of Duplicates

// Write a function that will return the count of distinct case-insensitive
// alphabetic characters and numeric digits that occur more than once in the input string.
// The input string can be assumed to contain only alphanumeric characters, including digits,
// uppercase and lowercase alphabets.

// Example

// "abcde" -> 0 # no characters repeats more than once
// "aabbcde" -> 2 # 'a' and 'b'
// "aabbcdeB" -> 2 # 'a' and 'b'
// "indivisibility" -> 1 # 'i'
// "Indivisibilities" -> 2 # 'i' and 's'
// "aa11" -> 2 # 'a' and '1'


'use strict'

function duplicateCount(text){
  let characters = text.toLowerCase().split('');
  let obj = {};
  let count = 0;
  let vals = [];
  for (let i = 0; i < characters.length; i++){
    obj[characters[i]] = obj[characters[i]] ? obj[characters[i]] + 1 : 1
  }
  vals = Object.values(obj);
  return vals;
}


console.log(duplicateCount('abcde'));
console.log(duplicateCount('aabbcde'));
console.log(duplicateCount('aabbcdeB'));
console.log(duplicateCount('indivisibility'));
console.log(duplicateCount('indivisibilities'));
console.log(duplicateCount('aa11'));
