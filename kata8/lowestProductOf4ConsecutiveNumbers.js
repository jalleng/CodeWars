
// Description:

// Create a function that returns the lowest product of 4 consecutive numbers in a given string of numbers.

// This should only work is the number has 4 digits of more. If not, return "Number is too small".

function LowestProduct(input) {
  var arr = input.split('');
  var products = [];
  if (arr.length > 3){
    for(var i = 0; i < arr.length-3; i++){
      products.push(arr[i] * arr[i+1] * arr[i+2] * arr[i+3])
    }
    products.sort(function(a,b){
      return a-b;
    })
    return products[0];
  }else{
    return "Number is too small"
  }
}
