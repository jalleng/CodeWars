
// Description:

// You have an array of numbers 1 through 10 (JS: 1 through 10 or less). The array needs to be formatted correctly for the person reading the countdown of a spaceship launch.

// Unfortunately, the person reading the countdown only knows how to read strings. After the array is sorted correctly make sure it's in a format he can understand.

// Between each number should be a space and after the final number (1) should be the word 'liftoff!'


function liftoff(instructions){
  var count = instructions.sort(function(a,b){
    return b-a;
  }).join(' ');
  return count + ' liftoff!';
}
