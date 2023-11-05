"Use Strict";

/*

  QUESTION 1 :-

  Implement a function `isPalindrome` which takes a string as argument and returns true/false as its result.

  Note: the input string is case-insensitive which means 'Nan' is a palindrom as 'N' and 'n' are considered case-insensitive.

  Once you've implemented the logic, test your code by running
  - `npm run test-palindrome`
*/

function isPalindrome(str) {
  let stringArray = str.split("");
  stringArray.reverse();

  for (let i = 0; i < str.length; i++) {
    if (
      stringArray[0].charCodeAt(0) - str[0].charCodeAt(0) !== 32 &&
      stringArray[0].charCodeAt(0) - str[0].charCodeAt(0) !== 0
    ) {
      return false;
    }
  }

  return true;
}

// const ans = isPalindrome("Madam");
// console.log(ans);

/*
QUESTION:- 2

Write a function that calculates the time (in seconds) it takes for the JS code to calculate sum from 1 to n, given n as the input.
Try running it for
1. Sum from 1-100
2. Sum from 1-100000
3. Sum from 1-1000000000
Hint - use Date class exposed in JS
*/

function calculateTime(n) {
  let sum = 0;

  let startTime = new Date().getTime(); //will give time in milliseconds

  for (let i = 1; i <= n; i++) {
    sum += i;
  }

  let endTime = new Date().getTime();

  //conerting it into seconds before returning
  return (endTime - startTime) / 1000;
}

console.log(`1-100 :-  ${calculateTime(100)}`);
console.log(`1-100000 :- ${calculateTime(100000)}`);
console.log(`1-1000000000 :-  ${calculateTime(1000000000)}`);
