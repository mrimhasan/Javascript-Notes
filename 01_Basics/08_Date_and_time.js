//DATE

 const myDate = new Date()
  //console.log(typeof myDate)
//   console.log(myDate.toString())
//   console.log(myDate.toTimeString())
//   console.log(myDate.toDateString())
//  console.log(myDate.toISOString())
//  console.log(myDate.toJSON())
//  console.log(myDate.toLocaleString())
// console.log(myDate.toLocaleDateString())
// console.log(myDate.toLocaleTimeString())
// console.log(myDate.toUTCString())
// console.log(myDate.getDate())
// console.log(myDate.getDay())
// console.log(myDate.getHours())
// console.log(myDate.getMinutes())
// console.log(myDate.getFullYear())
// console.log(myDate.getTime())
// console.log(myDate.getUTCDate())
// console.log(myDate.getUTCDay())
// console.log(myDate.getUTCHours())

// let mycreatedDate = new Date(2023,5,1)//month zero se start hote hai
// console.log(mycreatedDate.toDateString())

//other syntax according to your date formate

let newcreatdate = new Date("6-1-2023")
console.log(newcreatdate.toLocaleString())
console.log(newcreatdate)
let myTimeStamp = Date.now()
// console.log(myTimeStamp)//give us millisecond since 1970
// console.log(myTimeStamp.getTime())//not work any method ?

// let newdate = new Date()
// console.log(newdate.getMonth())