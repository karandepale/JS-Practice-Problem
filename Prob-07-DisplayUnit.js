/*
Read a Number 1, 10, 100, 1000, etc and display unit, ten, hundred,...
*/

var readline = require("readline-sync");

// Get the number from the user
var number = parseInt(readline.question("Enter a number: "));

var numDigits = number.toString().length;
var placeNames = ["unit", "ten", "hundred", "thousand", "ten thousand", "hundred thousand", "million", "ten million", "hundred million"];

var highestPlaceIndex = numDigits - 1;

for (var i = highestPlaceIndex; i >= 0; i--) {
  console.log(placeNames[i] + ": " + getDigitAtPlace(number, i));
}

function getDigitAtPlace(num, place) {
  var divisor = Math.pow(10, place);
  return Math.floor((num / divisor) % 10);
}
