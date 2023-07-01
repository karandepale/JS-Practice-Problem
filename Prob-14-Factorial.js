/*
Write a program that computes a factorial of a number taken as input.
5 Factorial – 5! = 1 * 2 * 3 * 4 * 5
*/

var readline = require("readline-sync");
var number = parseInt(readline.question("Enter a number: "));

function factorial(num) {
  if (num === 0 || num === 1) {
    return 1;
  } else {
    var result = 1;
    for (var i = 2; i <= num; i++) {
      result *= i;
    }
    return result;
  }
}

var factorialResult = factorial(number);
console.log(number + " factorial (!" + number + ") is: " + factorialResult);
