// The maximum sum subarray problem consists in finding the maximum sum of a contiguous subsequence in an array or list of integers:

// maxSequence([-2, 1, -3, 4, -1, 2, 1, -5, 4])
// // should be 6: [4, -1, 2, 1]
// Easy case is when the list is made up of only positive numbers and the maximum sum is the sum of the whole array.
// If the list is made up of only negative numbers, return 0 instead.

// Empty list is considered to have zero greatest sum. Note that the empty list or array is also a valid sublist/subarray.

"use strict"

let test = [-2, 1, -3, 4, -1, 2, 1, -5, 4];

let testNeg = [-1, -2, -4, -5, -2];

var maxSequence = function(arr){
  let max = 0;
  let data = {};
  let count = 0;

  for (let i = 0; i < arr.length; i++){
    if (Math.sign(arr[i]) === 1) break;
    count++;
  }

  if (arr.length === 0 || count === arr.length) return 0;

  function reducer (subarray) {
    max = [ subarray ].reduce( ( acc, cur ) => acc + cur, 0 );
  };



};

console.log (maxSequence(testNeg));
