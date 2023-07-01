/*
Write a program to simulate a coin flip and print out "Heads" or "Tails" accordingly.
*/

// Simulate a coin flip
function flipCoin() {
    // Generate a random number between 0 and 1
    var randomNum = Math.random();
    console.log("random number is: "+ randomNum);
  
    // Return "Heads" if the random number is less than 0.5, otherwise return "Tails"
    if (randomNum < 0.5) {
      return "Heads";
    } else {
      return "Tails";
    }
  }
  
  var result = flipCoin();
  console.log(result);
  