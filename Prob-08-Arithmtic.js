/*
Enter 3 Numbers do following arithmetic operation and find the one that
is maximum and minimum
1. a + b * c   3. c + a / b
2. a % b + c   4. a * b + c
*/

var readline = require("readline-sync");

// Get the three numbers from the user
var a = parseFloat(readline.question("Enter number a: "));
var b = parseFloat(readline.question("Enter number b: "));
var c = parseFloat(readline.question("Enter number c: "));

// Perform the arithmetic operations
var result1 = a + b * c;
var result2 = a % b + c;
var result3 = c + a / b;
var result4 = a * b + c;

var maxResult = Math.max(result1, result2, result3, result4);
var minResult = Math.min(result1, result2, result3, result4);

console.log("Maximum result: " + maxResult);
console.log("Minimum result: " + minResult);
