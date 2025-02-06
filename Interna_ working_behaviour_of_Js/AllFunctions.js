

// a();
// b()
//b();// difference between function expression and statement just hoisting
// function statement aka function decleration 

function a(){
    console.log("a called")
}


// function expression

// var b = function(){
//     console.log("b called")
// }

// Anonymous function  // function without name
// it is only used in function expression or storing in variable or passing as an argument or parameter
// function (){
   
// }

// Named function expression

// var c = function named(){
//     console.log("c called")
//     console.log(named) // it will work fine 
// }
// c()
//named(); // we can't access it like that becuase this function is act as a local variable 

// Difference between Parameter and Argument

// function X(parameter){
//     console.log("X called", parameter)
// }

// X(5); // Argument

//First Class Function - Ability to be used like values /*this ability of function makes function First class citizens*/

// Arrow Function
//an arrow function is a concise way to write function expressions. They were introduced in ES6 and offer a more compact syntax compared to traditional function expressions.


// What is a callback function in javaScript
/* A function passing into another function that passing function is known as call back function*/

// Async behaviour of call back function
setTimeout(function callbackFunc(){
    console.log("timer")
   }, 5000)

// function p(q){
//  console.log("p called")
//  q();
// };
// p(function q() {
//     console.log("q called")
// }); // q is known as call back function


// JavaScript is a synchronous and single-threaded language and dynamically typed language {it means we don't have declared datatype during declaration of a variable}

// Blocking the main thread

// Power of callbacks ?

// Deep about Event Listeners

// Closures Demo with Event Listener

// Scope Demo with Event Listeners

// Garbage Collection & removeEventListener

// function attachEvenetListener(){
//     let count = 0;
//     document.getElementById("clickme")
//     .addEventListener("click", function xyz(){
//         console.log("clicked", ++count)
//     })
// }

// attachEvenetListener();

/********************** PURE AND IMPURE FUNCTION **********************/
//A Pure Function is a function (a block of code) that always returns the same result if the same arguments are passed
// function add(a, b) {
//     return a + b;
// }
// console.log(add(2, 3)); 
// console.log(add(2, 3));

//                      Characteristics of Pure Functions
// Deterministic Output: For a given set of inputs, the output is always the same.
// No Side Effects: The function does not:
// Modify variables outside its scope.
// Interact with external systems like APIs, databases, or DOM manipulation.
// Change mutable data.
// Immutability: Pure functions do not change the input values; instead, they return a new value or object.

// Impure Functions: What to Avoid
// Impure functions produce unpredictable results or affect external states, which can lead to bugs and make your code harder to test.

// let user = { name: "Meeta", age: 25 };

// function updated(newAge) {
//     user.age = newAge;
//     return user;
// }

// console.log(updated(26)); 
// // Alters the global `user` object
// console.log(user.age);


//                     Real-World Applications of Pure Functions
// Data Transformation: Use pure functions in map, filter, and reduce operations for processing data.
// State Management: Libraries like Redux emphasize pure functions for state updates.
// Unit Testing: Pure functions are ideal for unit tests because they have predictable outputs.
// Performance Optimization: Pure functions are easily memoized, as their outputs depend solely on inputs.