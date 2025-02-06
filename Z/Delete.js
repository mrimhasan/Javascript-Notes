
// The delete operator is used to remove a property from an object.
// It operates only on object properties (it cannot delete variables declared with var, let, or const).


/************************* Behavior *****************/
// delete will return true if the deletion is successful or if the property does not exist.
// It will return false if the property cannot be deleted (for example, if it is non-configurable).


/******************** Difference between an Operator and a Keyword: ********************/

// 1 => Operator:
// An operator is a symbol or a keyword that performs operations on one or more operands (values, variables, expressions).
// Operators are part of the execution or expression of code, and they can be used to manipulate data (like arithmetic operators, comparison operators, and logical operators).
// Example of delete (Operator):
// let obj = { a: 1, b: 2 };
// delete obj.a; // Removes the 'a' property from the object
// console.log(obj); // { b: 2 }

// const arr = [1,2,3,4];
// delete arr[1];
// console.log(arr); // Output : [ 1, <1 empty item>, 3, 4 ]



// 2 => Keyword:

// A keyword is a reserved word in JavaScript that has a specific meaning and is part of the language's syntax.
// Keywords define the structure and behavior of JavaScript programs (like if, for, function, let, etc.). Keywords cannot be used as identifiers (like variable names or function names).
