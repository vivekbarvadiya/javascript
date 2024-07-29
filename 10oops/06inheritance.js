class User{
    constructor(username){
        this.username = username
    }

    logMe(){
        console.log(`${this.username}`);
    }
}


class Teacher extends User{
    constructor(username,email,password){
        super(username)
        this.email=email
        this.password=password
    }

    addCourse(){
        console.log(`A new course added by ${this.username}`);
    }

}


const chai = new Teacher('chai','chai@gmail.com','123')

chai.addCourse()

const newchai = new User('masala');

newchai.logMe()

console.log(chai instanceof Teacher);