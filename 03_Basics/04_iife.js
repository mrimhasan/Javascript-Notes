//Immidiately Invoked Function Expressions (IIFE)

//globel scope se pollution ki problem hoti hai kayi baar to  globel scope m jo variables hai ya jo bhi decleration hai uske pollution ko htane k liye hum use karte hai IIFE 
//jo function immidiately excute ho jaaye 

//first paranthese () for func. defi. second for execution () 

/*Named IIFE*/
(function chai(){
    console.log(`DB connected `)
})(); // this semi colon use when two iife is present for stoping func. execution

// chai()

// (function chai2(){
//     console.log(`DB connected `)
// })() //as far as we use iife func. we have to put ';' over preiife func.  

/*Arrow func. used as a IIFE */
// (() => {
//     console.log(`DB connected `)
// })(); //don't forget to put semi colon ';'

//arguments passing 
 ((name) => {
    console.log(`DB connected for ${name}`)
})("hitesh")

//is not a iife func.
const my = ((name) => {
    console.log(`DB connected for ${name}`)
})
  my("imran")




