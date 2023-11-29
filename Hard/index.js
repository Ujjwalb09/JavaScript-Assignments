"Use strict";

/*
  Implement a class `Calculator` having below methods
    - initialise a result variable in the constructor and keep updating it after every arithmetic operation
    - add: takes a number and adds it to the result
    - subtract: takes a number and subtracts it from the result
    - multiply: takes a number and multiply it to the result
    - divide: takes a number and divide it to the result
    - clear: makes the `result` variable to 0
    - getResult: returns the value of `result` variable
    - calculate: takes a string expression which can take multi-arithmetic operations and give its result
      example input: `10 +   2 *    (   6 - (4 + 1) / 2) + 7`
      Points to Note: 
        1. the input can have multiple continuous spaces, you're supposed to avoid them and parse the expression correctly
        2. the input can have invalid non-numerical characters like `5 + abc`, you're supposed to throw error for such inputs

  Once you've implemented the logic, test your code by running
  - `npm run test-calculator`
*/

class calculator {
  constructor(result) {
    this.result = result;
  }

  add(number) {
    this.result = number + this.result;
  }

  substract(number) {
    this.result = this.result - number;
  }

  multiply(number) {
    this.result = number * this.result;
  }

  divide(number) {
    this.result = this.result / number;
  }

  clear() {
    this.result = 0;
  }

  calculate(string) {
    //1. Remove extra spaces from the string expression
    let parsedString = string.replace(/\s+/g + "");

    //2. checking for invalid non numerical character in a string
    if (!/^[\d\s\+\-\*\/\(\)]+$/.test(parsedString)) {
      throw new Error(
        "Invalid input expression. Please enter a valid expression"
      );
    }

    this.result = eval(parsedString);

    return this.getResult();
  }

  getResult() {
    return this.result;
  }
}

const calc = new calculator(0);
// calc.add(10);
// calc.add(20);

// console.log(calc.getResult());

// calc.clear();

// console.log(calc.getResult());

console.log(calc.calculate(`10 +   2 *    (   6 - (4 + 1) / 2) + 7`));
