//import fetch from "node-fetch";

//There are two things one is consuming promise other is creating promise 
// promises is a object

                    /********* promise create*******/
//const promiseOne = new Promise(function(resolve,reject){
    //Do an async task
    //DB calls, Cryptography, network
//     setTimeout(function(){
//         console.log("Async task is compelete")
//         resolve() // it connect then to resolve parameter
//     },1000)
//  })//.then(function(){
//     console.log("Promise is consumed")
// })

            /****************Second Way********** */
// promiseOne.then(function(){
//     console.log("Promise is consumed")
// })

// const promiseThree = new Promise(function(resolve,reject){
//       setTimeout(function(){
//         resolve({name:"imran",email:"imran8.hasan@gmail.com"})  // data pass to then
//       },1000)
// })

// promiseThree.then(function(user){
//     console.log(user)
// })

// const promiseFour = new Promise(function(resolve,reject){
//    setTimeout(function(){
//        let error = true
//        if(!error)
//        resolve({user:"imran",password:"Hasan"})
//        else
//        reject('Error: Somthing went wrong')
//    },1000)
// })

// promiseFour.then(function(user){
//     console.log(user)
//     return user.name               // Can't store in variable only return to another then (callback hell)
//  }).then(function(username){        // Chaining
//     console.log(username)
//  }).catch(function(error){          //for rejecting promises
//     console.log(error)
//  }).finally(function(){             //by default
//     console.log('Your promise either resolved or reject')
//  })

                /************Async and await*************/    // does not handle error directly 
// const promiseFive = new Promise(function(resolve,reject){
//     setTimeout(function(){
//         let error = true
//         if(error)
//         resolve({user:"imran",password:"Hasan"})
//         else
//         reject('Error: Somthing went wrong')
//     },1000)
// })

// async function consume_promiseFive(){   
//     try{
//         const response = await promiseFive
//         console.log(response)
//      }
//     catch(error){
//         console.log(error)
//     }finally{
//         console.log("done")
//     }
// }

// consume_promiseFive()


// async function getAllusers(){
    
//     const response = await fetch('https://api.github.com/users/mrimhasan');
//     const data = await response.json()
//     console.log(data) 
// }
//    getAllusers() 

// fetch('https://api.github.com/users/mrimhasan')
// .then((response)=>{
//    return response.json()
// }).then((final)=>{
//     console.log(final)
// })


