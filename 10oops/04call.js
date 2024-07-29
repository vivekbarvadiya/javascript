function setUsername(uname){
    // complex db calls
    this.username = uname
    console.log('called');
}

function createUser(username,email,password){

    setUsername.call(this,username) //we have to called this explicitly by using call method
    // we also have to pass this object as a parameter
    this.email = email
    this.password = password
}


const chai = new createUser('chai','chai@hmail.com','123');
console.log(chai);