function saymyname(){
    console.log("I")
    console.log("M")
    console.log("R")
    console.log("A")
    console.log("N")
}
//saymyname //reference 
//saymyname() //excution

// function addtwonumbers(num1,num2){  //parameters
//     console.log(num1+num2)
// }
// addtwonumbers(3,4)   //arguments 

// function addtwonumbers(num1,num2){
//     return num1+num2
// }

// const result = addtwonumbers(3,4)
// console.log("reasult->", result)

// function logginguser(username){
//     if(!username){  // empty string and undefined treat as false
//         console.log('please enter your name')
//         return
//     }
//     return `${username} just logged in`
// }
//     logginguser()
//     //console.log(logginguser())
//     console.log(logginguser('imran'))

/**Rest operator (use for passing number of unknown arguments return in array)**/

// function calculateCartPrice(...num1){
//     return num1
// }

// function calculateCartPrice2(val1,val2,...num1){ // skip value 1,2
//     return num1
// }
// console.log(calculateCartPrice(100,200,300,400,500))

                /*passing objects */
const user={
    name:"imran",
    age:22,
    email:'nksnjaj.com'
    }
 function objpassing(anyobject){
        console.log(`user name is ${anyobject.name} user age is ${anyobject.age}`)
 } 
   
//  objpassing(user)  
//  objpassing({name:"imran",age:22}) //direct object passing

                /*Array passing */
// const array = [100,200,300,400]
// function arraypassing(pass){
//     return pass[0]
// } 
// //  const array = [100,200,300,400]
// console.log(arraypassing(array))
// console.log(arraypassing([100,200,300,400]))

