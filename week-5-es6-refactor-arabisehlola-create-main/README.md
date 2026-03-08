[![Review Assignment Due Date](https://classroom.github.com/assets/deadline-readme-button-22041afd0340ce965d47ae6ef1cefeee28c7c493a6346c4f15d667ab976d596c.svg)](https://classroom.github.com/a/yTwCLTmJ)
# week-5-es6-refactor-starter

This is a simple calculator that performs basic operations such as addition, subtraction, multiplication, and division. The project was refactored using modern ES6+ Javascript features to improve readability, maitainability, and structure.
 
 ES6 Features Used

 1. const and let
 replaced 'var' with 'const' and 'let'
 'const' is used for values that do not change.
 'let' is used for variables that may change.
 
 2. Arrow Functions
 Traditional function were converted into arrow functions to make the code shorter and cleaner.

 3. Template Literals 
 Template literal were used instead of string concatenation.

 4. Destucturing 
 Destructuring was used to extract values from array or object more easily.

 5. Spread Operator 
 The spread operator '...' was used to copy or combine arrays.

 6. Funtion were given default value for parameters.

 7. Utilities Files
 A separate 'utilities.js' file was created to store reusable calculator function such as :
 - add
 - subtract
 - multiply
 - divide
  This makes the code more organized and easier to maitain.

  ES6 Modules (Import and Export)
  A separate utilities,js file was created to store calculator functions.
  These function were exported from utilities.js and imported into calculator.js

Using ES6 features makes Javascript code cleaner,easier to read, and more modular. Separating logic into utility function improves code organization and reuse.


