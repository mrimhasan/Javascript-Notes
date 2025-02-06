// all things appen after ES6

class User{
    constructor(username,email,password){
        this.username = username
        this.password = password
        this.email = email
    }

    encryptPassword(){
        return `${this.password}abc`
    }
}

const chai = new User("chai","@gmail","123")
console.log(typeof User); 
// Internally, a class in JavaScript is just a function with some additional behavior:
// It cannot be called like a regular function (e.g., abc()).
// The class creates a special kind of function called a constructor function.

console.log(chai.encryptPassword())

/********if class is not use ******/
function user(username,email,password){
   
        this.username = username
        this.password = password
        this.email = email
    
}

user.prototype.encryptPassword = function(){
    return `${this.password}abs`
}

const tea = new User("tea","@gmail","123")
console.log(tea.encryptPassword())
