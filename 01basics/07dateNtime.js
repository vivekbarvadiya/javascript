// Dates

let myDate = new Date();

// console.log(myDate.toString());
// console.log(myDate.toLocaleString());
// console.log(myDate.toDateString());
// console.log(myDate.toString());
// console.log(typeof myDate);


// let customDate = new Date(2025,1,6) // month starting from 0th index
// let customDate = new Date(2025,1,6,15,3) // time is 24 hours not 12 hours
// let customDate = new Date("2025-01-14") // in this manner month will start with 1 YY-MM-DD
let customDate = new Date("01-14-2025") // MM-DD-YY


// console.log(customDate.toLocaleString());
// console.log(customDate.toDateString());


let timestamps = Date.now();

// console.log(timestamps);
// console.log(Math.floor(Date.now()/1000));

let newDate = new Date();

// console.log(newDate);
// console.log(newDate.getMonth() + 1);
// console.log(newDate.getDay());

console.log(
    newDate.toLocaleString('default', {
        weekday: "long",
        timeZoneName:"long"
    })
);




