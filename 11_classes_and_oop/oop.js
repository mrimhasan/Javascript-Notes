   // object literals

// const user = {
//     username: "imran",
//     logincount: 8,
//     sugnedin: true,

//     getuserdetails: function(){
//          //console.log("got user detail from database")
//          console.log(`${user.username}`)
//          console.log(`${this.username}`)
//          console.log(this)
//     }
// }

// console.log(user.username)
// //console.log(user.getuserdetails())
// //user.getuserdetails()
// console.log(this)


          /*******constructor function********/
   function User(username,logincount,isloggedin){
    this.username=username
    this.logincount = logincount
    this.isloggedin = isloggedin
   // return this  // if you not return this it return implicitly 
   }       

  const userOne = new User("imran",12,true)  // if you not use new the value overwrite there // it create new object and also call a constructor function
  const usertwo  = new User("hasan",13,false)
//    console.log(userOne)
//    console.log(usertwo)
 console.log(userOne.constructor) // nothing but a reference of yourself