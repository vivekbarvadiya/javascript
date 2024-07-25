function addTwoNum(n1,n2 = 4){ //parameters,default para
    if(n1===undefined){ // or !n1
        console.log("please enter n1");
        return 
    }
    return n1+n2
}

console.log(addTwoNum(1,2)); //arguments

