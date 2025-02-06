

/***************** For Of Loop**************************/


// Best for iterating over iterable objects (arrays, strings)
// Provides values directly
// Cannot be used to modify the original array

/* NOTE */ 
//plain objects are not iterable by default. This means you cannot directly use them in constructs like for...of loops
//  you can make an object iterable by implementing the iterable protocol. This involves defining a Symbol.iterator method on the object
const fruits = ['apple', 'banana', 'cherry'];

// for...of (recommended for arrays)
for (const fruit of fruits) {
    console.log(fruit);
}

const str1 = "Hello";

// for...of (works great with strings)
for (const char of str1) {
    console.log(char);
}
// if you just want the index and character: Use traditional for loop

// we cannot use for(const [key,value] array) directly it gives error{TypeError: .for is not iterable} but in case of string it gives undefined at each key. it works well with new Map().
// for...of on an array directly doesn't support destructuring like [key,char]
// To get both key (index) and value, you need to use .entries(){it return new array iterator object contains the key/value pair at each index}

// Correct way with destructuring: Using entries() to get both index and value
for (const [key, char] of str.entries()) {
    console.log(char);  // value
    console.log(key);   // index
}

const str = "hello";

// Correct way to get both index and character
for (const [key, char] of [...str].entries()) {
    console.log(char);  // Outputs: h, e, l, l, o
    console.log(key);   // Outputs: 0, 1, 2, 3, 4
}

// Alternatively, you can use spread operator inside entries()
for (const [key, char] of Object.entries(str)) {
    console.log(char);
    console.log(key);
}

      /*********** For In Loop ***********/

// Used primarily for objects
// Iterates over all enumerable properties
// Can include inherited properties
// Not recommended for arrays (can include additional properties)
const person = {
    name: "John",
    age: 30,
    city: "New York"
};

// for...in (iterates over object properties)
for (const key in person) {
    console.log(key, person[key]);
}

// for...in can be used with arrays, it's generally not recommended due to its unpredictable behavior and potential to include unintended properties.

/* Key Issues with for...in for Arrays: */

// Iterates over all enumerable properties, including:

// Custom added properties
// Prototype chain properties


// Returns indices as strings
// Slower performance compared to other iteration methods
// Does not guarantee order of iteration
// Can include inherited properties from the prototype chain

const arr = [1, 2, 3];
arr.customProperty = "extra";
for (const index in arr) {
    console.log(typeof index);  // Outputs: "string" (not number)
    console.log(index);         // Outputs indices as strings: "0", "1", "2" and "extra"
}

// for...in can iterate over a string, it's not the recommended method. for...of provides a cleaner, more direct way to iterate through string characters.
// Prefer for...of for strings
// Use traditional for loop if you need index
// Avoid for...in with strings due to:

// Returns string indices
// Potential prototype chain issues
// Less explicit iteration
// Adding a custom property
String.prototype.customMethod = function() {};

const str2 = "hello";
for (const index in str2) {
    console.log(index);  // Might include additional properties
}

/***************** forEach Loop *******************/
// Array method
// Callback function for each element
// Cannot break the loop (no break or return)
// Always returns undefined

fruits.forEach((fruit, index) => {
    console.log(fruit, index);
});

[...str].forEach(char => {
    console.log(char);
});

Object.keys(person).forEach(key => {
    console.log(key, person[key]);
});

Object.entries(person).forEach(([key, value]) => {
    console.log(key, value);
});