// //Arrays
// In JavaScript, arrays aren't primitives but are instead Array objects with the following core characteristics:

// JavaScript arrays are resizable and can contain a mix of different data types. (When those characteristics are undesirable, use typed arrays instead.)
// JavaScript arrays are not associative arrays and so, array elements cannot be accessed using arbitrary strings as indexes, but must be accessed using nonnegative integers (or their respective string form) as indexes.
// JavaScript arrays are zero-indexed: the first element of an array is at index 0, the second is at index 1, and so on — and the last element is at the value of the array's length property minus 1.
// JavaScript array-copy operations create shallow copies. (All standard built-in copy operations with any JavaScript objects create shallow copies, rather than deep copies).

/******Decleration*************** */
//"Both an array created with [] and new Array() are reference types, meaning they store memory references rather than actual values. Modifying one affects all variables pointing to the same reference."
// If you want to create a new copy (not just a reference), use the spread operator (...) or slice().

// Creating an array using array literal
let arr1 = [1, 2, 3];

// Assign arr1 to arr2 (both now reference the same array)
let arr2 = arr1;

console.log("Before modification:");
console.log("arr1:", arr1); // [1, 2, 3]
console.log("arr2:", arr2); // [1, 2, 3]

// Modifying arr2 (this also affects arr1)
arr2.push(4);

console.log("After modification:");
console.log("arr1:", arr1); // [1, 2, 3, 4]
console.log("arr2:", arr2); // [1, 2, 3, 4]


const arr = [0,1,2,true,"imran"]
const myarr = ["captain","iron"]
const actualCopy = [...arr] 
const newarr = new Array(1,2,3,4)
arr.push(5)
newarr.push(5)
// console.log(arr);
// console.log(newarr)
// arr.shift()
// console.log(arr)
// console.log(typeof arr);
// console.log(typeof newarr);
 //console.log(arr[4])//The 4 in arr[4] is coerced into a string by the JavaScript engine through an implicit toString conversion
// console.log(myarr['0'])//use this
// console.log(arr.length)
// console.log(newarr[2])

/********ARRAY METHODS******** */

let methodarr = new Array(1,2,3,4,5)

/***push and pop *** */
// methodarr.push(5)
// console.log(methodarr)
// methodarr.pop()
// console.log(methodarr)

/***shift and unshift*** */
// methodarr.unshift(0)
// console.log(methodarr)
// methodarr.shift()
// console.log(methodarr)

/**ask Question from array ** */
// console.log(methodarr.includes(6))
// console.log(methodarr.indexOf(5))
// console.log(methodarr.reverse())
// console.log( methodarr.join('-'))//join(),join('')  //string type
// console.log(methodarr);
/***Slice And Splice****/

 const newmethodarr = methodarr
 console.log("A",newmethodarr)
const newm1 = newmethodarr.slice(1,3)
console.log(newm1)

 console.log("B",newmethodarr)

const newm2 = newmethodarr.splice(1,3)
console.log(newm2)

  console.log("C",newmethodarr)
  console.log("Original",methodarr)


/************Some Special notes********** */

//  let methodarr = new Array(1,2,3,4)
// if(!methodarr.length)
// console.log("array is empty")
// if(methodarr.length)
// console.log("array is not empty")

//  console.log(methodarr.slice(-2))     //last element
//  console.log(methodarr.splice(-2))     //last element
// console.log(methodarr[methodarr.length-1])    //last element