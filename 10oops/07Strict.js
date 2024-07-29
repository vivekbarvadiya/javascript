class User{
    constructor(username){
        this.username = username
    }

    logMe(){
        console.log(`${this.username}`);
    }

    static createId(){ //static keyword for only once use like id in mongodb (unique)
        return `123`
    }

}


const newchai = new User('masala');



// console.log(newchai.createId());


class Teacher extends User{
    constructor(username,email){
        super(username)
        this.email=email
    }
}


const iphone = new Teacher('iphone','iphone.com')
// console.log(iphone.createId());