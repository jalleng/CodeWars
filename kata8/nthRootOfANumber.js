
// Description:

// Given two numbers x and n, calculate the nth root of x.

// This means that being r = result, r^n = x;

function root(x, n) {
  var r = Math.pow(x, 1/n);
  return r;
}
