/*
Extend the Flip Coin problem till either Heads or Tails wins 11 times.
*/

function flipCoin() {
    // Generate a random number between 0 and 1
    var randomNum = Math.random();
    
    if (randomNum < 0.5) {
      return "Heads";
    } else {
      return "Tails";
    }
  }
  
  var headsCount = 0;
  var tailsCount = 0;
  
  while (headsCount < 11 && tailsCount < 11) {
    var result = flipCoin();
    console.log("Result: " + result);
  
    if (result === "Heads") {
      headsCount++;
    } else {
      tailsCount++;
    }
  }
  
  if (headsCount === 11) {
    console.log("Heads wins!");
  } else {
    console.log("Tails wins!");
  }
  