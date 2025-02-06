const user={
    name:"imran",
    price:99,

    welcome:function(){
        console.log(`${this.name} current context reffered`)
        // console.log(`${user.name} current context reffered`)
        console.log("this wala hai",this)
        console.log("user wala hai",user)
    }   
}
//console.log(user)
//user.welcome()
// user.name="hitesh"
// user.welcome()
// console.log(user)

    //console.log(this)    // inside the browser globel object is window object
    //but here is empty object 

function chai1(){
    let username = "imran"
    //console.log(this) // inside this there is somthing
    //console.log(this.username) ///not work
}

//chai1()
//const variable = function chai2(){   //not work in case of chai2() excution
const variable = function () {
    let username = "imran"
    //console.log(this) // inside this there is somthing
    //console.log(this.username) ///not work
}
//chai2()
//variable()


                    /*****Arrow function*****/
// const Arrow =  () => {
//     let username = "imran"
//     console.log(this) // inside this nothing but {}
//     console.log(this.username) ///not work
// }

// Arrow()

//Number of ways to use arrow function

// /*(1)*/  const addtwonum = (num1,num2) => {
//                return num1+num2
//          }
//  console.log(addtwonum(3,4))

/*(2)*/  //const addnum = (num1,num2) => num1+num2 //not use return for single statement
// const addnum = (num1,num2) => (num1+num2)
const addnum = (num1,num2) => ({name:"imran"})
//console.log(addnum(7,5))