/*
Write a program that takes a input and determines if the number is a prime.
*/

var readline = require("readline-sync");
var number = parseInt(readline.question("Enter a number: "));

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
  console.log(number + " is a prime number.");
} else {
  console.log(number + " is not a prime number.");
}
