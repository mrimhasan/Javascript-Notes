// let useremail = "imran@gmail.com"
// if(useremail){
//     console.log("got the email")

// }
// else{
//     console.log('not found an email')
// }

//falsy values 
// false,0,-0,BigInt 0n,"",'',null,undefined,NaN

//truthy values 
//true ,1 , " ","1","0",'false',[],{},function (){}

/*Nullish Coalesing operator ?? to handling null and undefined values*/

let val;
 //val = 5 ?? 10
// val = null ?? 5
// val = undefined ?? 10
//  val = null ?? undefined ?? 5
//val = null ?? undefined 
val = undefined ?? null 
console.log(val)

/*Ternary operator*/
//condition ? true : false;
