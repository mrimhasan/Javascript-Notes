/************************ parseInt *****************/

//The parseInt() function in JavaScript parses a string and returns an integer
// It extracts as many numeric characters as possible from the beginning
//  of the string until it encounters a non-numeric character.
console.log(parseInt('10+2'))
console.log(parseInt('7FM'))

/********* isNaN() ***************/
//The isNaN() function is used to check whether a value is Not a Number (NaN). It returns true if the value is NaN, otherwise, it returns false
console.log(isNaN(10));         // false (10 is a number)
console.log(isNaN('Hello'));    // true  ('Hello' cannot be converted to a number)
console.log(isNaN(NaN));        // true  (NaN is Not a Number)
console.log(isNaN(undefined));  // true  (Cannot convert to a valid number)  // Problem is not a NaN still give true output
console.log(isNaN('123'));      // false ('123' is converted to number 123)
console.log(isNaN('123abc'));   // true  ('123abc' cannot be converted to a number)
console.log(isNaN(true));       // false (true is converted to 1)
console.log(isNaN(false));      // false (false is converted to 0)

// 🚨 Problem with isNaN()
// The isNaN() function has a flaw: it converts values before checking.
// This means some non-numeric values may return false, even though they are not numbers.
//✅ Solution: Use Number.isNaN() (Safer Alternative)
console.log(Number.isNaN(undefined));  // false (undefined is not NaN)
console.log(Number.isNaN('123abc'));