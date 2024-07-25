const tinder = new Object() //singlton object
const user = {} //non singlton object

tinder.id = "123anc"
tinder.name = "sam"
tinder.isLoggeIn = false

console.log(tinder);

const regularUser ={
    email:"some@gmail.com",
    fullname:{
        userfullname:{
            firstname:"Vivek",
            lastname:"barvadiya"
        }
    }
}

console.log(regularUser.fullname?.userfullname); //option chain (?)


const obj1 = {1:"a",2:"b"}
const obj2 = {3:"c",4:"b"}

// const obj3 ={obj1,obj2}

// const obj3 = Object.assign({},obj1,obj2) // {} is source and others are object we can add as many as we want.


const obj3 = {...obj1,...obj2}

// console.log(obj3);


console.log(tinder);
console.log(Object.keys(tinder));
console.log(Object.values(tinder));
console.log(Object.entries(tinder));


console.log(tinder.hasOwnProperty("ido"));

