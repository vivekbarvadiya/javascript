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



// MEMORY 

// stack (primitive), heap (non primitive)

let myname = "vivek"

let newname = myname;
newname = "vivekbarvadiya";


console.log(myname);
console.log(newname);
// here newname is a copy of myname so that why it is not changing (stack)
// in stack you will get copy 



let obj = {
    name : "vivek"
}

let obj2= obj

obj2.name = "vivekbarvadiya"

console.log(obj.name,obj2.name);
// in this object obj2 is also pointing to same object as obj in heap thats why when we change obj2 then obj will also reflected.
// in heap you will get a reference of the value



