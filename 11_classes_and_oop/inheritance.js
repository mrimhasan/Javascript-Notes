
class User{
    constructor(username){
        this.username = username
    }

    logedMe(){
        console.log(`Username ${this.username}`);
    }
}

class Teacher extends User{
    constructor(username,email,password){
        super(username) // remember
        this.email = email
        this.password = password
    }
    addcourse(){
     console.log(`a new course added by ${this.username}`)
    }
}

const chai = new Teacher("imran","@gmail","123")
//console.log(chai)
chai.addcourse()

const tea = new User("imran")
tea.logedMe()
console.log(chai instanceof User)
console.log(Teacher instanceof User)
console.log(tea instanceof Teacher)
console.log(tea instanceof User);