/* PROBLEM:- Write a program that reads 5 Random 3 Digit values and then outputs the minimum
and the maximum value */

function Random3Digit(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function findMinAndMax() {
  var numbers = [];

  for (var i = 0; i < 5; i++) {
    numbers.push(Random3Digit(100, 999));
  }

  console.log("Generated numbers:", numbers);

  var min = Math.min(...numbers);
  var max = Math.max(...numbers);

  console.log("Minimum value:", min);
  console.log("Maximum value:", max);
}

findMinAndMax();
