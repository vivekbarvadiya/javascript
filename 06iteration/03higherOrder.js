// for of

const arr = "array"

for (const num of arr) {
    // console.log(num)
}


// Maps
// holds key value pair and its unique
const map = new Map()

map.set("IN", "india")
map.set("USA", "unites states of america")
map.set("PK", "pakistan")

// Map is not iterable

// console.log(map);

for (const [key, value] of map) {
    // console.log(key,value);
}


const obj = {
    'game1': 'NFS',
    'game2': 'spiderman',
}

// for (const [key,valye] of obj) {
//     console.log(key,value);
// }

const obj2 = {
    js: "javascript",
    cpp: 'c++',
    rb: 'ruby'
}

for (const key in obj2) {
    // console.log(key,obj2[key]);
}

// for of will give value
// for in will give index





// For each loop
const coding = ['js', 'cpp', 'java', 'python', 'ruby']

// coding.forEach(function (item) {
    // console.log(item);
// })


// coding.forEach((item)=>{
    // console.log(item);
// })


// function printMe(item){
//     console.log(item);
// }
// coding.forEach(printMe)

// coding.forEach((item,index,arr)=>{
//     console.log(item,index,arr);
// })


const myCoding = [
    {
        lang:'javascript',
        filename:'js'
    },
    {
        lang:'c++',
        filename:'cpp'
    },
    {
        lang:'python',
        filename:'py'
    }
]

myCoding.forEach((item)=>{
    console.log(item.lang,item.filename);
})