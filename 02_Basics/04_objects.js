/*************SINGLETON OBJECTS*********** */
const singleton = new Object()
const literals = {}
//  console.log(singleton)
//  console.log(literals)
literals.id=1
literals.name="talib"
literals.age=22
literals.isloggedin=false
// console.log(literals)
// singleton.id=1
// singleton.name="talib"
// singleton.age=22
// singleton.isloggedin=false
// console.log(singleton)

/**object inside object **/

const hasan = {
    email:'imran8.hasan@gmail.com',
    fullname:{
        userfullname:{
            firstname:'injmam',
            lastname:'haq'
        }
    }
}
//console.log(hasan.fullname.userfullname.firstname)

/**marging of two objects **/

const obj1 = {1:"a",2:"b"}
const obj2 = {3:"c",4:"d"}
//const obj3 = {obj1,obj2}
//console.log(obj3)  // object inside object

//  const obj3 = Object.assign(obj1,obj2)  // 'concat function' not work in object case
//  console.log(obj3)
// const obj3 = Object.assign({},obj2,obj1)
// console.log(obj3)

// const obj3 = {...obj2,...obj1} // order doesn't matter 
// console.log(obj3)


/***********find out keys and values****** */
// console.log(Object.keys(literals))   //literals obj defined on top
// console.log(Object.values(literals))
// console.log(Object.entries(literals))

/**to check key present or not * */
//console.log(literals.hasOwnProperty('name')) 

/**Destructuring of objects and array here only objects  **/

// console.log(literals.name)
// const {name} = literals
// console.log(name)
// const {name:oye} = literals
// console.log(oye)
// console.log(literals.oye)

/* intro of  API's  (jason formate) */
// {
//     "name" : "imran",
//     "age" : "18"
//     "email" : "dnnsls"
// }
// [
//     {},
//     {},
//     {}
// ]