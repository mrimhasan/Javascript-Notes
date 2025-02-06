// //Arrays
// In JavaScript, arrays aren't primitives but are instead Array objects with the following core characteristics:

// JavaScript arrays are resizable and can contain a mix of different data types. (When those characteristics are undesirable, use typed arrays instead.)
// JavaScript arrays are not associative arrays and so, array elements cannot be accessed using arbitrary strings as indexes, but must be accessed using nonnegative integers (or their respective string form) as indexes.
// JavaScript arrays are zero-indexed: the first element of an array is at index 0, the second is at index 1, and so on — and the last element is at the value of the array's length property minus 1.
// JavaScript array-copy operations create shallow copies. (All standard built-in copy operations with any JavaScript objects create shallow copies, rather than deep copies).

/******Decleration*************** */
//One key difference between an array and a new array is that an array is a reference type, while a new array is a value type. This means that when you assign an array to a variable, you are actually assigning a reference to the array. If you modify the array, the changes will be reflected in the variable. However, when you assign a new array to a variable, you are actually assigning a copy of the array. If you modify the new array, the changes will not be reflected in the variable

const arr = [0,1,2,true,"imran"]
const myarr = ["captain","iron"]

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