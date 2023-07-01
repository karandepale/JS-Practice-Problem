/*
Write a program that takes a year as input and outputs the Year is a Leap Year or not
a Leap Year. A Leap Year checks for 4 Digit Number, Divisible by 4 and not 100 unless
divisible by 400.
*/

var readline = require("readline-sync");
var year = parseInt(readline.question("Enter a year: "));

var isLeapYear = false;

if (year % 4 === 0) {
  if (year % 100 === 0) {
    if (year % 400 === 0) {
      isLeapYear = true;
    }
  } else {
    isLeapYear = true;
  }
}

if (isLeapYear) {
  console.log(year + " is a Leap Year.");
} else {
  console.log(year + " is not a Leap Year.");
}
