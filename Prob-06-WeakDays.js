/*
Read a Number and Display the week day (Sunday, Monday,...)
*/

var readline = require("readline-sync");
var weekdayNumber = parseInt(readline.question("Enter a number (1-7) representing the weekday: "));
var dayOfWeek = "";

switch (weekdayNumber) {
  case 1:
    dayOfWeek = "Sunday";
    break;
  case 2:
    dayOfWeek = "Monday";
    break;
  case 3:
    dayOfWeek = "Tuesday";
    break;
  case 4:
    dayOfWeek = "Wednesday";
    break;
  case 5:
    dayOfWeek = "Thursday";
    break;
  case 6:
    dayOfWeek = "Friday";
    break;
  case 7:
    dayOfWeek = "Saturday";
    break;
  default:
    dayOfWeek = "Invalid input";
}

console.log("Day of the week: " + dayOfWeek);
