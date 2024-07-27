const coding = ['js', 'ruby', 'java', 'python', 'cpp']

// forEach not return any value

const values = coding.forEach(() => {
    // return item 
})
console.log(values); //give undefined

const myNums = [1, 2, 3, 4, 5, 6, 7, 8, 9]

const newArray = myNums.filter((num) => { return num > 4 })
// console.log(newArray);


const newNums = myNums.map((num) => num + 10)
// console.log(newNums);


// option chaining ex => map().filter().reduce() etc...

const newNums2 = myNums
                    .map(num => num * 10)
                    .map(num=>num+1)
                    .filter(num=>num>40)



// console.log(newNums2);


const total = myNums.reduce(function(acc,curr){
    return acc+curr
},0)

// console.log(total);

















