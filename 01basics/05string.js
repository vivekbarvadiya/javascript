const name = "vivek"
const age = 22

// console.log(name+age+" .");

// use bqacktics
// console.log(`${name} ${age} .`);

const gameName = String("ClashOfClans");

// console.log(gameName[3]);
// console.log(gameName.__proto__); // its a object

// console.log(gameName.length);
// console.log(gameName.charAt(5));
// console.log(gameName.indexOf("C"));
// console.log(gameName.toUpperCase());

const newGameStr = gameName.substring(7,9);

const newGameStr2 = gameName.slice(-8,8);

console.log(newGameStr);
console.log(newGameStr2);

const newStr = "    vivek      "
console.log(newStr);
console.log(newStr.trim());

const url = "https://vivek.com/vivek%20barvadiya";
console.log(url.replace('%20',"-"));
console.log(url.includes('%20'));
console.log(url.split('/'));
