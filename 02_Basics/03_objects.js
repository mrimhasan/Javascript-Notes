//objects can be declare in two forms (1)literals (2)constructor
//objects making from constructor is singleton (singleton ka matlb hai ki ye object ek hi rahega class m agar hum same instance(object) create karenge to same instance call ho kar ayega )

/****objects literals**** */

const mysym = Symbol("key1")

const user = {
    name : "imran",  //name behind the scene treat as string
    "fullname":"imran hasan", //not access by dot form
    age:22,
    location:"agra",  //key value formet
    mysym: "mykey1",
    [mysym]: "mykey2",
    isloggedin:false,
    lastloggedindays:["monday","sunday"],
    myfun:function () {
        console.log("hello js user")
     }
}

//number of ways to access objects member
/*(1)*/  //console.log(user.name) 
/*(2)*/  //console.log(user["name"])
/*(3)*/  //console.log(user.fullname)
/*(4)*/  //console.log(user."fullname")   //not access
/*(5)*/ //console.log(user["fullname"])
/*(6)*/  //user.myfun()
/******************Symbole access and typeof*******/
    //   console.log( user.mysym)
    //   console.log( user[mysym]) 
    //   console.log(typeof user.mysym) 
    //   console.log(user[mysym]) 
    //   console.log(typeof user[mysym]) 
    //   console.log(user)

    /***change and freez values ***/
    // user["age"]=18
    // console.log(user.age)
    // Object.freeze(user)  //freez all memeber you can't change in values
    // user.age=20
    // console.log(user.age)
    // user.name = "injmam"
    // console.log(user.name)

 /** function as a value**/
//  user.myfun = function () {
//     console.log("hello js users")
//  }
//  user.myfun2 = function(){
//     console.log(`hey ${this.name}`)  //string interpelation
//  }
//   console.log(user.myfun)  
//   console.log(user.myfun())  
//   console.log(user.myfun2)
//   console.log(user.myfun2())

   