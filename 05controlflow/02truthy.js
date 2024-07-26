const userEmail = ''

if(userEmail){
    console.log("got email");
}
else{
    console.log("not email");
}


/*

falsy value
false, 0, -0, BigInt 0, "", null, undefined, NaN

truthy value
"0", true, 'false', " ", [], {}, function(){}

*/

// to check value truthy in array

const arr= []

if(arr.length===0){
    console.log("empty  array");
}

// to check value truthy in object

const obj = {}

if(Object.keys(obj).length===0){
    console.log("empty object");
}


// Nullish Coalescing Operator (??):null undefined
// error handling
let val1;
// val1 = 5 ?? 10
// val1 = null ?? 10
// val1 = undefined ?? 15
// val1 = null ?? 10 ?? 20


console.log(val1);


// Ternary operator

// condtion ? true :false


const ice = 100
ice >= 80 ? console.log("80"):console.log("100")


