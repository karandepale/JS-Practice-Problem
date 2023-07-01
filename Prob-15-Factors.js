/*
Write a program to compute Factors of a number N using prime factorization method.
Logic -> Traverse till i*i <= N instead of i <= N for efficiency.
O/P -> Print the prime factors of number N.
*/

var readline = require("readline-sync");
var number = parseInt(readline.question("Enter a number: "));

function computeFactors(num) {
  console.log("Prime factors of " + num + ":");
  
  // Check if the number is divisible by 2 repeatedly
  while (num % 2 === 0) {
    console.log(2);
    num /= 2;
  }
  
  // Check for other prime factors starting from 3
  for (var i = 3; i * i <= num; i += 2) {
    while (num % i === 0) {
      console.log(i);
      num /= i;
    }
  }
  
  // If the remaining number is greater than 2, it must be a prime factor
  if (num > 2) {
    console.log(num);
  }
}

computeFactors(number);
