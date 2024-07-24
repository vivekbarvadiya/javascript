"Use strict"; //treat all js code as new version

// alert(3+3) // we are using node.js not browser

// number => 2 power 53 range
// bigint => not preferable
// string => "",'
// boolean => t/f
// null => standalone value
// undefined => value is not assigned
// symbol => for uniques 
// Object => 

console.log(typeof "45"); //string
console.log(typeof null); //object
console.log(typeof undefined); //undefined



// MORE ON DATATYPES

// primitive
// 7 types => String, Number, Boolean, null, undefined, Symbol, Bigint

const id = Symbol("123");
const anotherId = Symbol("123");

console.log(id === anotherId);

const bigNumber = 39235472875955555n


// Non primitive/Reference type
// Array, Objects, Function

let muObj = {
    name:"vivek",
    age:12
}

const myFunc = function(){
    console.log("its a function");
}

console.log(myFunc);
myFunc()

console.log(typeof muObj);

