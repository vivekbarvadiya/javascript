// singleton 
// Object.create //contructor


// object literals


const mySym = Symbol("key1")

const jsUser = {
    name:"Vivek",
    "full name":"vivek b",
    age:21,
    [mySym] :"mykey1",
    location:"Surat",
    email:"vivek@gmail.com",
    isLoggedIn:false,
    lastLoginDays:["monday","saturday"]
}

//by default the above name,age,location... is in the format of string format to prove this read below 

// console.log(jsUser.name);
// console.log(jsUser["name"]);
// console.log(typeof jsUser[mySym]);//it is converted to string 

jsUser.email = "vivek@google.com"
// Object.freeze(jsUser) // to prevent changes in object
jsUser.email = "vivek@chatgpt.com"
// console.log(jsUser);

// add function to objects
jsUser.greeting = function(){
    console.log("hello js user");
}

jsUser.greetingTwo = function(){
    console.log(`hello js user ${this.name}`);
}

console.log(jsUser.greeting());
console.log(jsUser.greetingTwo());




