"use strict"


// FUNCTION EXPRESSION && FUNCTION DECLARATION ;
// you cant hoist with function expression and they are also called annoymous function; but you can't with function declaration(named function).

// FUNCTION EXPRESSION
const check = function (name) {

};
// console.log(check(name))
// ARROW FUNCTION.
// => is called the FAT ARROW
// const hi = (name) => {
//      return `hello ${name}`;
// }
// console.log(hi('john'));
// // OR
// const hello = (name) => `hello ${name}`;
// console.log(hello('uche'));


const checkFactorial = (number, factor) => {
     if (number % factor === 0 && typeof (number) === 'number') {
          return `${factor} is a factor of ${number}`;
     } else {
          return `${factor} is not a factor of ${number}`;
     }
}

//var arr = [1, 2, 3, 4, 5, 6, 7];
// const callback = (age) => console.log(age);

// arr.forEach(callback);

