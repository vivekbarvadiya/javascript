const user = {
    username: "vivek",
    price: 999,

    welcomeMessage: function () {
        console.log(`${this.username}, welcome`);
        // console.log(this);
    }
    // this refers a current context/block
}

// user.username = "sam"
// user.welcomeMessage()
// console.log(user.welcomeMessage); 

// console.log(this);

// function chai() {
//     console.log(this.username); // undefined
// }
// // chai()



// Arrow Function

// const addTwo = (n1,n2) => {
//     return n1+n2
// }


// const addTwo = (n1,n2) => n1+n2
// const addTwo = (n1,n2) => (n1+n2)
//required return when use {} (explicit return)  and not required when use () (implicit return)

const addTwo = (n1,n2) => ({username:"vivek"})


console.log(addTwo(1,2))