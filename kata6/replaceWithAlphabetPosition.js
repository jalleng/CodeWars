//Welcome. In this kata you are required to, given a string, replace every letter with its position in the alphabet.
//If anything in the text isn't a letter, ignore it and don't return it. a being 1, b being 2, etc. As an example:

// alphabet_position("The sunset sets at twelve o' clock.")

// Should return "20 8 5 19 21 14 19 5 20 19 5 20 19 1 20 20 23 5 12 22 5 15 3 12 15 3 11" (As a string.)


"use strict"

function alphabetPosition(text) {
  let lowerIndex = '';
  let index = {};
  let output = [];

  for(var i=97;i<123;)lowerIndex+=String.fromCharCode(i++);

  lowerIndex = lowerIndex.split('');

  for (i=0; i<26; i++){
    index[lowerIndex[i]] = i+1;
  }

  text = text.toLowerCase().split('').filter(function(el){
    if (index[el]){
      return el;
    }
  }).map(function(el){
    return index[el];
  }).join(' ');

  return text;
}

