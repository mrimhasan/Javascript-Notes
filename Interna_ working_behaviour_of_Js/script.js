
        /**some technical words */
      // Hoisting  => it means a varaible want to access before innitialization
      // lexical environment => heirarcy of varaible or function in scope 
      // Scope chain => it means if we want to access a variable or func. inside a function and not present then search in global space it is known as scope chain
        
    //     console.log(x);
    //     function name1(){  // lexical environment of name is global space 
    //         console.log(x); // x is inside the lexicl env. of name
    //         console.log("imran")
    //         function name2(){
    //             console.log(x) // here x is not find in name2 then search in name1 if not find there then search in global space this searching is scope chain
    //         }
    //       name2();
    //     }
    //    // let x=7;// in this case we can't access inside the name function gives error can't access before initialization beacuse hoisting of let and const are different 
    //     var x=7;
    //     //name2()// not defined
    //      name1();
    //     // console.log(hey())
    //     let hey = ()=>{ 
    //         console.log("hello")
    //             console.log(x);
    //             name1()  // name is inside the lexical environment of hey
    //     }
    //     hey();


    /*******Hoisting of let and const ********/
   // here we learn temporal dead zone
    // temporal dead zone

    // console.log(b) // access but undefined
    // console.log(a) // can't access before initialization becuase the let and const are store in different memory space other than global space. so we can't access that memory space before initialization
     //let a = 10
   //console.log(a) // so when a untill assign value(initialization) till that time is called temporal dead zone after assigning value a is available to global space so we can access
    //var b = 20

    // so when a variable inside a temporal dead zone and want to access them it gives an error but only we access for initialization

    // const c = 30;
    // let d;
    // d=30;  // we can not do same thing with const


    /*******************types of error **************/
    // type error 
    // const p = 10;
    // p = 20; // it gives here type error we can not re assign in const we can't update const value
    // console.log(p)

    // syntax error in this error program will not run a single command
    // let q=100;
    // let q=1000;
    // console.log(q)// gives syntax error due to re decleration
    
    //Reference error
    // it is due to temporal dead zone
    //  console.log(r) // reference error
    // let r=20;


    /*************************Block Scope ******************/
    // { //this is the block
    //     let l = 40;
    //     const m = 50;
    //     var n = 60;
    //     console.log(l)
    //     console.log(m)
    //     console.log(n)
    // }

    // console.log(n) // wwe can access  // it is present in global scope
    // console.log(m) // reference error // it is present in block scope
    // console.log(l) // refference error // it is present in block scope

    // conlusion let and const are block scoped variable and can not access from outside of block

    // function are behave different in block scope
    // by default our js is in non-strict mode so function inside the block scope is accessible for all
    // but if we use strict mode it only available inside the scope
    {
      function fun(){
          console.log("hello");
      }   
     }
     fun(); // output : hello;


    /**********************************Shadow variable ***********/
    // let l = 100;
    // const m = 500;
    // var n = 600;
    //    { //this is the block
    //         let l = 40;
    //         const m = 50;
    //         var n = 60;
    //         console.log(l) // present in block scope  // output is 40 // so this variable is shadowing of global l variable similarly for others
    //         console.log(m) // present in block scope  // output is 50
    //         console.log(n) // present in global scope  //output is 60
    //     }
    //         console.log(l)  // present in other than global and block scope //output is 100
    //         console.log(m) // present in other than global and block scope  //output is 500
    //         console.log(n) // presen in global scope //output is 60

            /*************************** illegal shadowing ****************/

            // let h = 80;
            // {
            //     var h=90; // we cannot shadowing it. known as illegal shadowing but its vice versa is true 
            // }