     /*Understanding EXecution of javascript file*/

     /*Javascript execution context*/

     //there are two excution context

     // 1. Global execution context
     // 2. Function execution context 

     /*Javascript file runs in two phase*/
     // 1. Memory creation phase 
     // 2. execution phase

  // Ha bhai Chrom workspace se add kiya hai ye comment
   //   let val_1=10
   //   let val_2=5
   //   function addnum(num1,num2){
   //      let total = num1+num2
   //      return total
   //   }
   //   let result1 = addnum(val_1,val_2)
   //   let result2 = addnum(10,2)

     // 1.Global execution (which is assign in this variable)
     // Now in 2. memory creation phase (collect all varaibles and take place in memory)

     /* val_1 -> undefined */
     /* val_2 -> undefined */
     /* addnum -> defination */
     /* result1 -> undefined */
     /* result2 -> undefined */

     // 3.Execution phase

     /* val_1 -> 10 */
     /* val_2 -> 5 */
     /* addnum -> it is just hold func. defi. (nothing there is no value for execution) */
     /* result1 -> hold func. so new (new varaible environment + execution thread)*/
     // now new memory phase create for result1 val_1 -> undefined , val_2 -> undefined and total -> undefined
    // new execution context for result1
    // val_1->10 , val_2 ->5 and total -> 15
    // return it to golbal context

    // now the new envoronment which is created for result1 is deleted 

    /* result2 -> Similar to result1 */

    /*  Call Stack Working */
    // Global execution fall in call stack
    // it work in lifo base sinerio a function which come in last out it first

   //console.log(result1);


   /********************** chaar cheez **************************/
   // call stack (it is the js enging which execute the code or programe)
   // web api {handle web apis like setTimeout and Promises}
   // call back queue or task queue
   // micro task queue (higher priority than task queue) all Promises related task comes under micro task queue
   // event loop {which check conineously callstack if empty than task queue or micro task queue item comes in callstack to execte}

   console.log("A")

   Promise.resolve().then(()=> console.log("B")) // micro task queue work here

   console.log("C")

   setTimeout(()=>{  // task queue work here
      console.log("D")
   },0)


   /************************ Starvation *******************/
   // Starvation of the callback queue in JavaScript occurs when tasks in the
   //  microtask queue continuously get priority over tasks in the callback queue,
   //  preventing the callback queue tasks from ever executing.

//    console.log("A")

//    Promise.resolve().then(()=> { // it create starvation task queue Task waiting for callstack because microtask queue is full
//      Promise.resolve().then(()=> {
//        Promise.resolve().then(()=> {
//         Promise.resolve().then(()=> {
//            Promise.resolve().then(()=> {})

//       });
//     });
//   });
// });

//    console.log("C")

//    setTimeout(()=>{  // task queue work here
//       console.log("D")
//    },0)