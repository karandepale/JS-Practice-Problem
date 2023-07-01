/*
Write a program that takes User Inputs and does Unit Conversion of
different Length units
1. Feet to Inch     3. Inch to Feet
2. Feet to Meter    4. Meter to Feet
*/

var readline = require("readline-sync");

// Get the unit conversion choice from the user
var choice = parseInt(readline.question("Choose the conversion:\n1. Feet to Inch\n2. Feet to Meter\n3. Inch to Feet\n4. Meter to Feet\nEnter your choice: "));

// Get the value to convert from the user
var value = parseFloat(readline.question("Enter the value to convert: "));

// Perform the unit conversion based on the choice
var result = 0;

switch (choice) {
  case 1:
    result = feetToInch(value);
    console.log(value + " feet = " + result + " inches");
    break;
  case 2:
    result = feetToMeter(value);
    console.log(value + " feet = " + result + " meters");
    break;
  case 3:
    result = inchToFeet(value);
    console.log(value + " inches = " + result + " feet");
    break;
  case 4:
    result = meterToFeet(value);
    console.log(value + " meters = " + result + " feet");
    break;
  default:
    console.log("Invalid choice");
}

// Function to convert feet to inches
function feetToInch(feet) {
  return feet * 12;
}

// Function to convert feet to meters
function feetToMeter(feet) {
  return feet * 0.3048;
}

// Function to convert inches to feet
function inchToFeet(inches) {
  return inches / 12;
}

// Function to convert meters to feet
function meterToFeet(meters) {
  return meters / 0.3048;
}
