// Utility functions for calculator operations

/**
 * Add two numbers
 * @param {number} a - First number
 * @param {number} b - Second number
 * @returns {number} Sum of a and b
 */
export const add = (a = 0, b = 0) => a + b;

/**
 * Subtract two numbers
 * @param {number} a - First number
 * @param {number} b - Second number
 * @returns {number} Difference of a and b
 */
export const subtract = (a = 0, b = 0) => a - b;

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
export const divide = (a = 0, b = 1) => {
    if (b === 0) {
        throw new Error('Cannot divide by zero');
    }
    return a / b;
};

/**
 * Perform calculation based on operator
 * @param {number} firstNum - First operand
 * @param {string} operator - Operation (+, -, *, /)
 * @param {number} secondNum - Second operand
 * @returns {number} Result of calculation
 */
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

export const showMessage = (result = 0) => {
    return 'The result is ${result}';
}

export const copyNumbers = (Numbers = []) => {
    const newNumbers = [...numbers];
    return newNumbers;
}

/**
 * Format number to remove trailing zeros
 * @param {number} num - Number to format
 * @returns {string} Formatted number
 */
export const formatNumber = (num = 0) => {
    return parseFloat(num.toFixed(10)).toString();
};


