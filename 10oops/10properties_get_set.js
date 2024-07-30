function User(email,password){
    this._email=email;
    this._password=password

    Object.defineProperty(this,'email',{
        get: function(){
            return this._email.toUpperCase()
        },
        set:function(value){
            this.email=value
        }
    })

    Object.defineProperty(this,'password',{
        get: function(){
            return this._password.toUpperCase()
        },
        set:function(value){
            this._password=value
        }
    })

}



const chai = new User('chai@com','chai')

// console.log(chai.email);




const user2 = {
    _email:'email@example.com',
    _password:'abc',

    get email(){
        return this._email.toUpperCase()
    },

    set email(value){
        this._email=value
    }
}

const tea = Object.create(user2)
console.log(tea.email);