class User{
    constructor(email,password){
        this.email = email
        this.password = password
    }

    get password(){
        return this._password.toUpperCase()
    }

    set password(value){
        this._password = value.toUpperCase()
    }


    get email(){
        return this._email.toUpperCase()
    }

    set email(value){
        this._email = value.toUpperCase()
    }
}


const vivek = new User('vivek@gmail.com','12345abc');
console.log(vivek.password);
console.log(vivek.email);
