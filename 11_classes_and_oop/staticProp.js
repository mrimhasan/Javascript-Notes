class User{
    constructor(username){
        this.username = username 
    }
    loggedMe(){
        console.log(`Username ${this.username}`)
    }
    static creatId(){  // it is not access by any other
        return 123
    }
}

const chai = new User("imran")
console.log(chai.loggedMe())
console.log(chai.creatId())