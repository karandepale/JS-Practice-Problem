/*
Write a program that takes day and month from the command line and prints true if
day of month is between March 20 and June 20, false otherwise.
*/ 

var readline = require("readline-sync");


var day = parseInt(readline.question("Enter Day/Date: "));
var month = parseInt(readline.question("Enter Month: "));

// Check if the day is between March 20 and June 20
var isBetween = false; 

if (month === 3 && day >= 20) {
  isBetween = true;
} else if (month > 3 && month < 6) {
  isBetween = true;
} else if (month === 6 && day <= 20) {
  isBetween = true;
}

console.log(isBetween);
