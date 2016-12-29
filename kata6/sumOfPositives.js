// You get an array of numbers, return the sum of all of the positives ones.

// Example [1,-4,7,12] => 1 + 7 + 12 = 20

// Note: array may be empty, in this case return 0.


'use strict'

let test = [1, 2, 3, -4, 7, -2, 5];

function positiveSum(arr) {
  let sum = 0;
  if (arr.length === 0) return 0;
  test.forEach(function(el) {
    if (el >= 0) sum += el;
  });
  return sum;
};

console.log (positiveSum(test));

