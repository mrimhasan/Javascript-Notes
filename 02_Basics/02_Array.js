const marvel = ["ironman","captain","thor"]
const dc = ["superman","batman","flash"]
              /***merging***/
//  marvel.push(dc)
//  console.log(marvel)  //array inside array

// marvel.concat(dc)
// console.log(marvel)  //not work give same array as before

// const all_heroes = marvel.concat(dc)
// console.log(all_heroes)

/****Spread operator **** */
// The spread operator is break down an array or object into individual elements or properties
// You can use the spread operator to combine multiple arrays or objects, duplicate array content, copy arrays, and pass array elements as function arguments. 
//You can also use it to perform shallow copying and merging of objects in object literals
const firstArray = [5, 10, 15, 20, 25, 30]; 
const newArray=[... firstArray, 35, 40];
// const allnewheroes = [...marvel,...dc]
// console.log(allnewheroes)

/*****array inside multiple array to convert simple form****** */
// const multiplearr = [1,2,3,[4,5,6],[7,8,[1,2,[3,4,5]]]]
// const simpleform = multiplearr.flat(Infinity)//infinity is depth
// console.log(simpleform)

/***convertin in array from other data types ***/
// console.log(Array.isArray("imran"))
// console.log(Array.from("imran"))
// console.log(Array.of("imran"))
//  console.log(Array.from("imran"))
//  console.log(Array.from({name:"imran"}))//interesting  //key value pair type
let one = 100
let two = 200
let three = 300
// console.log(Array.of(one,two,three))
// console.log(Array.from(one,two,three))  //error


