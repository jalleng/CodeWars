// In the following 6 digit number:

// 283910
// 91 is the greatest sequence of 2 digits.

// Complete the solution so that it returns the largest five digit number found within the number given..
// The number will be passed in as a string of only digits. It should return a five digit integer.
// The number passed may be as large as 1000 digits.
'use strict';

let string = '283910456857'

//91045






function solution(digits){
  let max = 0;
  let sub = 0;
  for (var i = 0; i < (digits.length - 4); i++) {
    sub = Number(digits.substr(i,5));
    max = sub > max ? sub : max;
  }
  return max;
}

console.log(solution(string));




assert.deepEqual(solution('283910456857'), 91045);






// TODO: Replace examples and use TDD development by writing your own tests

// These are some CW specific test methods available:
//    Test.expect(boolean, [optional] message)
//    Test.assertEquals(actual, expected, [optional] message)
//    Test.assertSimilar(actual, expected, [optional] message)
//    Test.assertNotEquals(actual, expected, [optional] message)

// NodeJS assert is also automatically required for you.
//    assert(true)
//    assert.strictEqual({a: 1}, {a: 1})
//    assert.deepEqual({a: [{b: 1}]}, {a: [{b: 1}]})

// You can also use Chai (http://chaijs.com/) by requiring it yourself
// var expect = require("chai").expect;
// var assert = require("chai").assert;
// require("chai").should();

// describe("Solution", function(){
//   it("should test for something", function(){
//     Test.assertEquals("actual", "expected", "This is just an example of how you can write your own TDD tests");
//   });
// });
