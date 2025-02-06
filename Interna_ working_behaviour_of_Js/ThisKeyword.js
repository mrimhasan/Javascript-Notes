// this keyword behave differently in strict and non strict node


 //*use strict*;
// this in global space
 //console.log(this) // global Object - window, Node js global
// this inside a function
 function x(){
    console.log(this) 
 }
 //x() // the value is depend on strict and non strict node here undefined if we use strict node 

// this in strict node - (this substitution)
/* if the value of this keyword is undefined or null this keyword will be replaced with globalobject only in non strict node */


// this value depends on how this is called (window)
//window.x(); 

//this inside a object's method
  
 const obj = {
    a: 10,
    method: function(){
        console.log(this.a)
    },
 };
 //obj.method();// 10

// call apply bind methods (sharing methods)
const obj1 = {
    name:"imran",
    printName: function(){
        console.log(this.name)
    },
};
//obj1.printName()

const obj2 = {
    name: "hasan",
};
//obj1.printName.call(obj2)
// this inside arrow function
const obj3 = {
    y:20,
    m: ()=>{
        console.log(this) // window object because arrow func. does not have their own binding (it retains the this value of the enclosing lexical context)
    }
}
obj3.m()
// this inside nested arrow function
const obj4 = {
    z:30,
    M: function(){
        // console.log(this) arrow function this is same as this // it is the enclosing lexical context
      const arrow = ()=>{
            console.log(this)// it retains the this value of the enclosing lexical context
        }
        arrow();
    },
}
obj4.M();
// this insed DOM
// the value of this in DOM reference to HTMLelement like <button onclick="alert(this)">clickME<button>