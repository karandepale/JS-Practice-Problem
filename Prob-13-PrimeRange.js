/*
Extend the program to take a range of number as input and output the Prime
Numbers in that range.
*/

var readline = require("readline-sync");
var start = parseInt(readline.question("Enter the starting number of the range: "));
var end = parseInt(readline.question("Enter the ending number of the range: "));

console.log("Prime numbers in the range " + start + " to " + end + ":");

for (var number = start; number <= end; number++) {
  var isPrime = true;
  
  if (number <= 1) {
    isPrime = false;
  } else {
    for (var i = 2; i <= Math.sqrt(number); i++) {
      if (number % i === 0) {
        isPrime = false;
        break;
      }
    }
  }
  
  if (isPrime) {
    console.log(number);
  }
}
