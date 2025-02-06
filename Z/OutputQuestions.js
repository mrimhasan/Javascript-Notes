  /************ Always Remember The global execution context, Memory creation phase, Code Execution phase in case of Output Questions *******************  AKA Hoisting ********/

  //console.log('5' + 3); // The + operator, when one operand is a string, converts the other operand to a string and concatenates them
  // console.log('5' - 3);
  // console.log('5' * 3);
  // console.log('5' / 3);
  // console.log('5' % 3);
  // Other Arithmetic Operators (-, *, /, %):

  // They always attempt to convert operands to numbers.
  // If the conversion fails (e.g., 'abc' - 3), the result is NaN (Not-a-Number).


// console.log(age);
// var age = 25;
// console.log(age)
// age = 100; // reference error due to Temporal dead zone
// console.log(age);
// let age = 25;


//myfun();

// var myfun = function(){
//     console.log("first");
// }

// myfun();

//  function myfun(){
//     console.log("second");
// }

// myfun();

// Foo = 30; // work as let;
// console.log("Foo", Foo);
// var Foo = 100;
// console.log("Foo",Foo);


//  variable = 10;

// (()=>{
//     // local space
// foo = 100;
// console.log(variable); 
// var foo = 100;
// variable = 20;
// console.log(variable)
// })();

// console.log(foo);
// console.log(variable);
// var variable = 30;

// for(var i = 0; i<10 ; i++){
//     setTimeout(()=> console.log(i),0);
// }
// for(let i = 0; i<10 ; i++){ // A new i is created for each iteration.
//     setTimeout(()=> console.log(i),0);
// }

const piyush = {
    name: "imran hasan",
    sayName:function(){
        console.log(this.name);
    }
};
// console.log(piyush.name)
 //setTimeout(()=>console.log(piyush.name),3*1000);

 //setTimeout(piyush.name,3*1000); // yaha error isliye hai kyu ki setTimeout callback function ko as a argument leta hai but hum variable paas kar rhe hai 

 // setTimeout(piyush.sayName,3*1000); // yaha undefined isliye hai kyu ki setTimeout ek web API hai to jo this keyword hai usko function ka scope access nhi hai ya hum kahe use pta nhi hai kise point kare 

// setTimeout(piyush.sayName.bind(piyush),3*1000); // yaha humne function k scope ko bind kardiya hai isliye this keyword sahi kaam kar rha hai

//  setTimeout(()=>console.log(piyush.sayName.bind(piyush)),3*1000);
  //setTimeout(()=>piyush.sayName.bind(piyush),3*1000); // koi output nhi milega 

  // setTimeout(()=>piyush.sayName(),3*1000) // passing as a closure function

  // const obj = {
  //   height: 30
  // };
  // console.log(obj.height);
  // delete obj.height;
  // console.log(obj);

  // const obj1 = Object.create({
  //   height: 60,
  // }); // jab ese hum object ko create karte hai to vo values ko prototype m daal deta hai isliye delete operation work nhi kar rha hai
  // console.log(obj1.height);
  // delete obj1.height; // ab delete Object ki property hai na ki obj1 ki
  // // delete Object.getPrototypeOf(obj1).height;
  // console.log(obj1.height);

  // d = 8 // work as let
  // console.log(d);