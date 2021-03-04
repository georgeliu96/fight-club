// returns undefined
// let potato;
// console.log(potato);


// returns an error 
// const needs an assignment (because it can't be reassigned later)
// const potato;
// console.log(potato);


// returns an error
// assignment to constant variable
// const food = 'potato';
// food = 'tomato';
// console.log(food);


// console logs the array correctly
// const foods = ['burgers', 'pizza'];
// foods.push('pasta');
// console.log(foods);


// console logs correctly
// var myNum = 42;
// console.log(myNum);


// returns an error - reference error (not defined)
// console.log(myNum);


// console logs undefined and then 42
// varaible hoisting
// var declared variables - they are hoisted
// console.log(myNum);
// var myNum = 42;
// console.log(myNum);

// code above is the following code under the hood:
// var myNum;
// console.log(myNum);
// myNum = 42;
// console.log(myNum);


// returns an error - reference error (let & const are not hoisted)
// console.log(myNum);
// let myNum = 42;
// console.log(myNum);