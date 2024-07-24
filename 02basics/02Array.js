const marvel = ['thor', 'ironman', 'spiderman']
const dc = ['superman', 'flash', 'batman']

// marvel.push(dc); // push in existing array
// console.log(marvel);

//to merge two array
// const all = marvel.concat(dc); //concat give new array
// console.log(all);

const all_new = [...marvel, ...dc] //spread operators
// console.log(all_new);

const arr = [1, 2, [3, 4, 5], 5, [6, [7, 8], 9]]
const real_arr = arr.flat(Infinity);
// console.log(real_arr);


// console.log(Array.isArray("Vivek"));
// console.log(Array.from("Vivek")); //to covert string to array
// console.log(Array.from({name:"Vivek"})); 

let score1 = 100
let score2 = 200
let score3 = 300

// console.log(Array.of(score1,score2,score3));  