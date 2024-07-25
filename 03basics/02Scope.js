// let a = 10
// const b = 20
var c = 30 // global

{
    let a = 10 // block
    const b = 20 // block
    var c = 30 // global
     
}


// console.log(a);
// console.log(b); 
// console.log(c);



function one(){
    const username = "vivek"

    function two(){
        const website = "youtube"
        console.log(username);
    }

    // console.log(website);
    
    two()
}
// one()

console.log(addOne(3))

function addOne(num){
    return num+1
}

console.log(addTwo(5)); //you can initialize function call before declaration but not varible
const addTwo = function(num){
    return num+2
}




