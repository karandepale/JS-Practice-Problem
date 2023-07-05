/*
Take a number from user and check if the number is a Prime then show
that its palindrome is also prime
a. Write function check if number is Prime
b. Write function to get the Palindrome.
c. Check if the Palindrome number is also prime
*/

const readline = require('readline-sync');

function isPrime(num) {
  if (num <= 1) {
    return false;
  }

  // Check divisibility from 2 to square root of num
  for (let i = 2; i <= Math.sqrt(num); i++) {
    if (num % i === 0) {
      return false; 
    }
  }

  return true; 
}

function getPalindrome(num) {
  const str = num.toString();
  const reversedStr = str.split('').reverse().join('');
  return parseInt(reversedStr, 10);
}

function checkPrimeAndPalindrome() {
  const number = parseInt(readline.question('Enter a number: '), 10);

  if (isPrime(number)) {
    const palindrome = getPalindrome(number);

    console.log(`${number} is a prime number.`);

    if (isPrime(palindrome)) {
      console.log(`Its palindrome ${palindrome} is also prime.`);
    } else {
      console.log(`Its palindrome ${palindrome} is not prime.`);
    }
  } else {
    console.log(`${number} is not a prime number.`);
  }
}

checkPrimeAndPalindrome();
