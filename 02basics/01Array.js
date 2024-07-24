const array = [1,2,3,"4"]
console.log(typeof array);


//shallow copy => share same reference point means change in reference array will change original array
//deep copy => do not  share same reference point means not changing

const abc = ['a','b','c'];

const arr = new Array(1,2,3,4,5)
console.log(arr[3]);

// arr.push(3)
// arr.pop()

arr.unshift(9) // to add an element from starting
arr.shift() // to remove an element from starting

console.log(arr);

// console.log(arr.includes(2)); 
// console.log(arr.indexOf(90)); // -1 if not exists


const newArr = arr.join() // convert to string
console.log(newArr,typeof newArr);

// slice, splice

console.log("A",arr);

const myn1 = arr.slice(1,3)

console.log(myn1);
console.log("B",arr);

const myn2 = arr.splice(1,3)
console.log("C",arr);

console.log(myn2);
//splice will manipulate array 
