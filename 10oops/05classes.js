// ES6

class User{
    constructor(username,email,password){
        this.username=username
        this.email=email
        this.password=password
    }

    encryptPass(){
        return `${this.password}abc`
    }

    changeUsername(){
        return `${this.username.toUpperCase()}`
    }
}


// const chai = new User("chai",'chai@gmail.com','123');

// console.log(chai.encryptPass());
// console.log(chai.changeUsername());


// BTS

function User2(username,email,password){
    this.username=username
    this.email=email
    this.password=password
}

User2.prototype.encryptPass = function(){
    return `${this.password}abc`
}

User2.prototype.changeUsername = function(){
    return `${this.username.toUpperCase()}`
}

const eta = new User2("chai",'chai@gmail.com','123')

console.log(eta.encryptPass());
console.log(eta.changeUsername());
