/*
Find the Magic Number
a. Ask the user to think of a number n between 1 to 100
b. Then check with the user if the number is less then n/2 or greater
c. Repeat till the Magic Number is reached..
*/

const readline = require('readline-sync');

console.log('Think of a number between 1 and 100.');

let low = 1;
let high = 100;
let guess;
let userInput;

while (low <= high) {
  guess = Math.floor((low + high) / 2);
  userInput = readline.question(`Is your number less than ${guess}? (yes/no): `);

  if (userInput.toLowerCase() === 'yes') {
    high = guess - 1;
  } else if (userInput.toLowerCase() === 'no') {
    low = guess + 1;
  } else {
    console.log('Invalid input. Please enter "yes" or "no".');
  }
}

console.log(`The magic number is ${guess}!`);
