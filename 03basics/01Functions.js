function addTwoNum(n1,n2 = 4){ //parameters,default para
    if(n1===undefined){ // or !n1
        console.log("please enter n1");
        return 
    }
    return n1+n2
}

console.log(addTwoNum(1,2)); //arguments



// rest operator

function calculatePrice(val1,val2,...num1){ //same as spread operator
    return num1 //so here val1 is 200, val2 is 400 and then the rest is num1 is 600
}

console.log(calculatePrice(200,400,600,800));




































