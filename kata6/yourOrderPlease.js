// Your task is to sort a given string. Each word in the String will contain a single number. This number is the position the word should have in the result.

// Note: Numbers can be from 1 to 9. So 1 will be the first word (not 0).

// If the input String is empty, return an empty String. The words in the input String will only contain valid consecutive numbers.

// For an input: "is2 Thi1s T4est 3a" the function should return "Thi1s is2 3a T4est"
"use strict";

let thing = "is2 Thi1s T4est 3a";





function order1(words){
  let list = words.split(' ');
  let obj = {};
  let key;
  let output = [];
  list.forEach(function(el) {
    key = el.replace( /\D+/g, '');
    obj[key] = el;
  });
  for (var i = 1; i < 10 ; i++){
    if (obj[i])output.push(obj[i]);
  }
  return (output.join(' '));
}

function order(words){
  return words.split(' ').sort(function(a, b){
      return a.match(/\d/) - b.match(/\d/);
   }).join(' ');
}
