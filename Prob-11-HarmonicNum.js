/*
Write a program that takes a command-line argument n and prints the nth harmonic
number. Harmonic Number is of the form
*/


var readline = require("readline-sync");
var n = parseInt(readline.question("Enter a positive integer value for n: "));
if (isNaN(n) || n <= 0) {
  console.log("Invalid input. Please enter a positive integer value for n.");
} else {
  var harmonicNumber = 0;
  for (var i = 1; i <= n; i++) {
    harmonicNumber += 1 / i;
  }

  console.log("The " + n + "th harmonic number is: " + harmonicNumber.toFixed(2));
}
