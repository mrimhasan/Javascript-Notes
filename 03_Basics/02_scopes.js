
let a=200
if(true){
     let a=300
    //const b = 400
    var c = 100
    console.log('inner :', a)
}

console.log(a)
//console.log(b)
console.log(c)

// function one(){
//     const name = 'imran'
//     function two(){
//         const webname = 'ecommerce'
//         console.log(name)
//     }
//     //console.log(webname) //not accesible
//     two()
// }
// one()

       //same things apply over if else 

       /**Interesting example **/

       //console.log(addone(5))
  function addone(num){
    return num+1
  }   
//   console.log(addone(5))
  

  const addtwo = function addone(num){ 
    var d = 400  //ye bhi function hai ise expression bhi kehte hain
       return num+2
  }
  console.log(d)
  //variables are more powerful in js they can store any thing

//   console.log(addtwo(6))