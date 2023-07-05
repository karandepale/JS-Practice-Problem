/*
Write a function to check if the two numbers are Palindromes
*/

function isPalindrome(num1, num2) {
    var str1 = num1.toString();
    var str2 = num2.toString();
    
    var reversedStr1 = str1.split('').reverse().join('');
    var reversedStr2 = str2.split('').reverse().join('');
  
    if (reversedStr1 === str2 && reversedStr2 === str1) {
      return true; 
    } else {
      return false; 
    }
  }
  
  var number1 = 12321;
  var number2 = 34543;
  var result = isPalindrome(number1, number2);
  console.log("Are the numbers palindromes? " + result);
  