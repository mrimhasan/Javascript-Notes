// Good part of callback is it is responsible or we can say Async task exist due to callback function

/*bad part of call back function*/
// 1 -> Call back hell (Dooms pyramid or pyramid of doom) - it occure or happen when one callback inside other callback and it is inside another callback again and again is called call back hell - the code goes horizonally instead of verically
// the callbach hell code is unmaintainable and unreadable

// const cart = ["pants", "jeans", "T-shirts"]

// api.createOrder(cart, function(){
//     api.proceedToPayment(function(){
//         api.showOrderSummary(function(){
//             api.updateWallet();
//         })
//     })
// })

// 2 -> Inversion of control - lose control over code
// whenever control of our pieace of code to some other code - like passing callback to another function 
// api.createOrder(cart, function(){
//     api.proceedToPayment()
// })

/******* Promises *******/
// The resolution of bad part of callback function is Promise
// What is promise - Promise is an Object that represent evantually completion or failure of Async Operation
// Promise has Three states 1 - Pending 2- Resolve or fulfill 3- reject or failure
// It resolve once

/****Resolution of Inversion of Control *****/
//  const promise = createOrder(cart); // createOrder is Async operation here
//  promise
//  .then(function(OrderId){
//     proceedToPayment(OrderId);
// })
// .catch(function(err){ // gracfully handling error
//     console.log(err.message);
// })

/********* Resolution of Callback Hell ******/
// it is resolve by promise chaining

// createOrder(cart)
// .then(function(OrderId){
//     return proceedToPayment(OrderId);
// })
// .then(function(paymentInfo){
//     return showOrderSummary(paymentInfo);
// })
// .then(function(paymentInfo){
//     updateWallet(paymentInfo);
// })


// const GITHUB_API = "https://api.github.com/users/imhasan"

// const user = fetch(GITHUB_API) // it return the promise object

// console.log(user) // in the web console it shows promise is pending because JS engine execute the code fast before resolving the promise but when we dropdown the arrow it show promise is fulfilled this happen beacuse browser show the current state of the promise which is resolved 

// Till here the promise consuming part is done 




// Promise Creating Part or Producer

// const promise = createOrder(cart); // createOrder is Async operation here
//  promise
//  .then(function(OrderId){
//     proceedToPayment(OrderId);
// })
// .catch(function(err){ // gracfully handling error and we attach failure callback function using catch to our promise ( here we use attach not passing function remember)
//     console.log(err.message);
// })

// function createOrder(cart){
//     const pr = new Promise(function(resolve, reject){ // new Promise is constructor here
//         // create Order 
//         // Valid cart 
//         // OrderId
//         if(!validateCart(cart)){
//             const err = new Error("Cart is not Valid")
//             reject(err);
//         }

//         // logic for Create order
//         OrderId = "123456"
//         if(OrderId){
//             setTimeout(function(){
//                 resolve(OrderId)
//             }, 5000)
           
//         }
//     });

//     return pr
// }




/*********** Async Await ***********/
// Async and Await are used to handle Promises
// Await is a keyword which is used only inside an Async function
/*** 
// what is Async 
// What is await 
// how async await works behind the scenes ?
// examples of using async await 
// Error Handling
// Interviews
// Async await vs Promise .then/.catch 
***/

// 1 async function always return the promises even we return a value or somthing other then promise this held because the async function wrape the value in promise
async function getData() {
    //return new Promise();
    // OR
    return "Imran"
}

// const dataPromise = getData();
// console.log(dataPromise) 

// dataPromise.then(function(data){
//     console.log(data)
// })



/*********** Handling Promise with Async Await and with normal function*******/

const p = new Promise(function (resolve, reject){
    resolve("Promisse is resolve !!")
})

// Handle with async await
// async function handlepromise(){
//     const data = await p;
//     console.log(data);
// }
// handlepromise()
// Handle with normal function 

// function Handlepromise(){
//     p.then(function(data){
//         console.log(data)
//     })
// }
// Handlepromise();

/*************** Difference Between Handling Promise with Async Await and with normal functionHandling Promise with Async Await and with normal function **********/

const promise = new Promise(function (resolve, reject){
    setTimeout(()=>{
        resolve("Promisse is resolve value !!")
    },5000)
    
})
const promise2 = new Promise(function (resolve, reject){
    setTimeout(()=>{
        resolve("Promisse is resolve value !!")
    },10000)
    
})

// Here JS engine will not wait for promise to be resolved
// function getData(){
//     promise.then(val => console.log(val))

//     console.log("it print before 10 seconds")
// }
// getData()


// Here JS engine is waiting(pretend to be waiting) for promise to be resolved
// how pretend to be waiting - the function execution is suspended but not program after given time the function again come in call stack (Resume) and execute where they left the execution
async function Getdata(){
    console.log("it will not wait")

    const data = await promise
    console.log(data)
    
    console.log("It wait for 10 seconds to promise resolved")

    const data2 = await promise
    console.log(data2)
    console.log("It wait for 10 seconds to promise resolved 2")
}
//Getdata();

/******** Real world example *******/

const GITHUB_API = "https://api.github.com/users/akshaymarch7"

async function HandleAPI() {
    try {const returnPromise = await fetch(GITHUB_API)
    const JsonPromise = await returnPromise.json()

    // fetch(GITHUB_API).then(()=> returnPromise.json()).then((result)=>console.log(result))
    console.log(JsonPromise)}
    catch(err){
        console.log(err, "Try after sometime")
    }
}
//HandleAPI(); // second way to handle the error => HandleAPI().catch((err)=> console.log(err));






/********************** Promise API's *********************/

// 1 Promise.all (Fast Fail)
// this api is used to send parallel API call and it give the collection of all API result
// we pass all api in iterable form generally in array 
     /************* resolved Case *************/
// suppose we call three api's p1,p2,p3 and p1 takes 1 sec, p2 takes 2 sec and p3 takes 3 sec to be resolved 
// Promise.all will wait for api who has greater time here it wait for 3 sec to be resolved
 
/******** rejected Case ******************/
// if p1 rejected before 1 sec all other api show same error here p2 and p3 show same error and it will not wait for p2 p3 resolved or not
// and we don't have to concern about p2 and p3 resolve or not
// if p2 rejected then the p1 result will not show any error but p3 show same error as p2



// 2 Promise.allSetteled
/***************** resolved case *********/
// same as Promise.all

/**************** rejected case ***********/
// this show error on those Promise to whom are failed but it wait for greater time api setteled (setteled means it can be resolve or rejected)



// 3 Promise.race

/******************* resolved Case ***************/
// It will give the value of first setteled Promise i.e after 1sec it give the value of p1 value


/*********************** Reject case *************/
// it will throw error after setteled first promise it will not wait for other promises to be setteled



// 4 Promise.any
// it is much similar to Promise.race api but in this api it wait for first promise to be resolved(success) if any one of them rejected it will not throw an error but wait for other to be resolved(success)
// if all promises are rejected then it will show us error in respective manner like [err1,err2,err3]


/*********** Examples ***********/

const p1  = new Promise((resolve, reject)=>{
    setTimeout(()=>{
        resolve("P1 is resolve")
    }, 1000)
});

const p2  = new Promise((resolve, reject)=>{
    setTimeout(()=>{
        resolve("P2 is resolve")
    }, 2000)
    
});

const p3  = new Promise((resolve, reject)=>{
    setTimeout(()=>{
        reject("P3 is reject")
    }, 3000)
});

Promise.all([p1, p2, p3])
.then((result)=>{
    console.log(result);
})
.catch((err)=> console.error(err));


// Promise.allSettled([p1, p2, p3])
// .then((result)=>{
//     console.log(result);
// })
// .catch((err)=> console.error(err));


// Promise.race([p1, p2, p3])
// .then((result)=>{
//     console.log(result);
// })
// .catch((err)=> console.error(err));


// Promise.any([p1, p2, p3])
// .then((result)=>{
//     console.log(result);
// })
// .catch((err)=> console.error(err));
