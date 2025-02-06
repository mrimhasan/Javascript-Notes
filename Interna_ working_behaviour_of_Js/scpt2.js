/**************Closure****** */
//Function along with their lexical scope known as closure

// function a(){
//     console.log("a")
//     //var p = 7;
//      let p = 7;
//     function b(){
//         console.log("b")
//         if(p)
//         console.log(p)
//         p=0 // setting funtion execute one time
//     }
//     return b;
//     // p=100
//     // return b;
// }
// //a();
//  let x = a();
// // console.log(x);
//  x(); // the value of p=7 or 100 here comes from closure because the return b function return along with their lexical scope
// x()
// Use of closures

// 1 module design pattern
// 2 currying
// 3 functions like once
// 4 memoize
// 5 maintaining state in async world
// 6 iterators
// 7 setTimeouts


/*************************CALL, APPLY AND BIND METHOD ***************/
// All these are sharing function or function borrowing
// let name1 = {
//     firstname:"imran",
//     lastname:"hasan",
//     fullname:function(){
//         console.log(this.firstname+" "+this.lastname)
//     }
// }

//name1.fullname();

// let name2 = {
//     firstname:"Injmamul",
//     lastname:"haq",
// }

 // Function Borrowing

//name2.fullname(); // typeerror come
// name1.fullname.call(name2); // name2 argument is reference this variable inside the method
// name1.fullname.call(this); // here this target nodejs global object so it comes undefined

/*************better way to use */
// let name1 = {
//     firstname:"imran",
//     lastname:"hasan",
// }

// let fullname=function(){
//     console.log(this.firstname+" "+this.lastname)
// }

// let name2 = {
//     firstname:"Injmamul",
//     lastname:"haq",
// }

// fullname.call(name1)
// fullname.call(name2)

 /*********what if we had  parameters in the function */
// let name1 = {
//     firstname:"imran",
//     lastname:"hasan",
// }

// let fullname=function(country, city){
//     console.log(this.firstname+" "+this.lastname)
//     console.log(country+" "+city)
// }

// let name2 = {
//     firstname:"Injmamul",
//     lastname:"haq",
// }

// fullname.call(name1,"India","agra")
// fullname.call(name2,"India","Mirzapur")

     // What if more argument pass then we use apply method
     // here com apply method when we pass argument in more quantity 
     // fullname.apply(name1,["India","agra"]) // passing argument in array 
     // fullname.apply(name2,["India","Mirzapur"])


     // BIND it gives you a copy which invoke letar 
     // Sometimes the bind() method has to be used to prevent losing this.
     //let printfullname = fullname.bind(name2,["India","Mirzapur"]) // not use array passing arguments
     //  let printfullname = fullname.bind(name2,"India","Mirzapur")
    //  console.log(printfullname)
      // printfullname()


    /*****************Currying *****************/

// Function currying is a technique in functional programming where a function with multiple arguments is transformed into a sequence of functions, each taking a single argument

    //currying allows you to break down functions into more granular, reusable pieces, giving you more flexibility in how you compose and use functions.

    // Benefits of Currying:

    // Partial application of functions
    // Create more specialized functions
    // Improved function reusability
    // Helps in function composition
    // Enables more functional programming paradigms

// Use Cases:    
//Configuration functions
// Creating specialized functions
// Dependency injection
// Function composition
// Event handling
// Middleware creation

// Limitations and Considerations:

// Can make code more complex
// Performance overhead
// Less readable for developers unfamiliar with functional programming

    //done by two methods 1 => by bind  2=> by closure
    // let multiply = function(x,y){
    //     console.log(x*y);
    // }

    // // let multiplyByTwo = multiply.bind(this,2)
    // // multiplyByTwo(5) //Currying

    // let multiplyByTwo = multiply.bind(this,2,6)
    // multiplyByTwo(5)//it is ignore

    // by closure
    // let multiply = function(x){
    //     return function(y){
    //         console.log(x*y);
    //     }
    // }

    // let multiplyByTwo = multiply(2) // pre setting argument
    // multiplyByTwo(10)