/*
javascript and classes

#oop

##object
-collection of properties and method
- ex -> toLowerCase()

##why use OOP
-


##parts of OOp
Object literal


-constructor function
-prototypes
-classes
-instances(new,this)

##4 pillars
Abstraction - hide details (fetch)
Encapsulation - wrap up data
Inheritance 
Polymorphism - many forms
*/


// Object Literals (this)


const user = {
    username:"vivek",
    loginCount:8,
    signIn:true,
    getUserDetails:function(){
        console.log(this.loginCount);
    }
}

user.getUserDetails()
// console.log(user.getUserDetails());


// constuctor(new)

// const date = new Date()

// before below function 'this' is {}


function User(username,loginCount,isLogin){
    this.username = username;
    this.loginCount = loginCount,
    this.isLogin = true

    // console.log(this.username,this.loginCount,this.isLogin);

    //even if we dont return it will work.
    return this
}


const uone = new User('vivek',4,true);
const utwo = new User('v',6,true);

console.log(uone,utwo);








