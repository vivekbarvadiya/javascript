// promise creation
const promiseOne = new Promise(function (resolve, reject) {
    // do as async task
    // db calls, cryptography, network

    setTimeout(function () {
        // console.log("async task is complete");
        resolve() // resolve use to connect promise wuth then 
    }, 1000)

})

// promiseOne.then(function () {
//     console.log("promise consumed");
// })



// new Promise(function (resolve, reject) {
//     setTimeout(function () {
//         console.log('async task 2');
//         resolve()
//     }, 1000)
// }).then(function () {
//     console.log('async 2 resolved');
// }) 



// const promiseThree = new Promise(function(resolve,reject){
//     setTimeout(function(){
//         resolve({username:'chail',email:"chai@gmail.com"}) //send data to then.
//     },1000)
// })

// promiseThree.then(function(user){
//     console.log(user);
// })


// const promiseFour = new Promise(function (resolve, reject) {
//     setTimeout(function () {
//         let error = false
//         if (!error) {
//             resolve({ username: 'chail', password: "chai" })
//         }
//         else {
//             reject('Error : something went wrong')
//         }
//     }, 1000)
// })

// promiseFour
//     .then((user) => {
//         console.log(user);
//         return user.username
//     })
//     .then((username) => {
//         console.log(username);
//     })
//     .catch(function (error) {
//         console.log(error);
//     }).finally(()=>{
//         console.log("The promise is either resolved or rejected")
//     })






// const promiseFive = new Promise(function (resolve, reject) {
//     setTimeout(function () {
//         let error = true
//         if (!error) {
//             resolve({ username: 'javascript', password: "js" })
//         }
//         else {
//             reject('Error : js went wrong')
//         }
//     }, 1000)
// })

// async function consumePromiseFive(){
//     try {
//         const response = await promiseFive
//         console.log(response);
//     } catch (error) {
//         console.log(error);
//     }
// }

// consumePromiseFive()


// try-catch
// async function getAllUsers(){
//     try {
//         const response = await fetch('https://jsonplaceholder.typicode.com/users')
//         const data = await response.json()
//         console.log(data);
//     } catch (error) {
//         console.log(error);
//     }
// }
// getAllUsers()



// then-catch
fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => {
        return response.json()
    })
    .then(data => {
        console.log(data);
    })
    .catch(err => console.log(err))




// response = fetch("url")
// fetch have 2 things

// first->
//     Data-___
//     onfullfiled[ functions ]  (resolve)
//     onRegjection[ functions ] (reject)


//second->
    // fetch handle api of web browser/node
    // then fire network request
    // 2 phase
    //      true // if response came then it is going to onFullfilled[](404 too)
    //      false // if any other error then go to onRejection[]

