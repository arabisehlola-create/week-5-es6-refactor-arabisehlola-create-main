// Utility functions for calculator operations

/**
 * Add two numbers
 * @param {number} a - First number
 * @param {number} b - Second number
 * @returns {number} Sum of a and b
 */
// ES6 arrow function 
export const add = (a, b = 0) => a + b;

/**
 * Subtract two numbers
 * @param {number} a - First number
 * @param {number} b - Second number
 * @returns {number} Difference of a and b
 */
export const subtract = (a, b = 0) => a - b;

/**
 * Multiply two numbers
 * @param {number} a - First number
 * @param {number} b - Second number
 * @returns {number} Product of a and b
 */
export const multiply = (a = 1, b = 1) => a * b;

/**
 * Divide two numbers
 * @param {number} a - First number (dividend)
 * @param {number} b - Second number (divisor)
 * @returns {number} Quotient of a and b
 */
export const divide = (a, b = 1) => {
    if (b === 0)
        throw new Error(`Cannot divide by zero`);
        return a/ b;    
};

/**
 * Perform calculation based on operator
 * @param {number} firstNum - First operand
 * @param {string} operator - Operation (+, -, *, /)
 * @param {number} secondNum - Second operand
 * @returns {number} Result of calculation
 */
// Template literal
export const calculate = (firstNum = 0, operator = '+', secondNum = 0) => {
    switch(operator) {
        case '+':
            return add(firstNum, secondNum);
        case '-':
            return subtract(firstNum, secondNum);
        case '*':
            return multiply(firstNum, secondNum);
        case '/':
            return divide(firstNum, secondNum);
        default:
            throw new Error(`Unknown operator: ${operator}`);
    }
};

/** add multiple numbers using spread operator 
 * @param {...number} nums -numbers to add
 * @returns {number} Sum of all numbers 
 */
export const addMultiple = (...nums) =>
    nums.reduce((acc, n) => acc + n, 0);

/**
 * Format number to remove trailing zeros
 * @param {number} num - Number to format
 * @returns {string} Formatted number
 */
export const formatNumber = (num = 0) => `$ {parsefloat(num.tofixed(10))}`;



