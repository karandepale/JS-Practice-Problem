/*
Write a program that takes a command-line argument n and prints a table of the
powers of 2 that are less than or equal to 2^n.
*/

var readline = require("readline-sync");
var n = parseInt(readline.question("Enter a non-negative integer value for n: "));

// Validate the input
if (isNaN(n) || n < 0) {
  console.log("Invalid input. Please enter a non-negative integer value for n.");
} else {
  console.log("Powers of 2 up to 2^" + n + ":");
  for (var i = 0; i <= n; i++) {
    var power = Math.pow(2, i);
    console.log("2^" + i + " = " + power);
  }
}
