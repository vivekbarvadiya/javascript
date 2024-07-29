function multiplyBy5(num){
    return num*5
}


multiplyBy5.power = 2 //this is prove that function is object also


console.log(multiplyBy5(3));
console.log(multiplyBy5.power);
console.log(multiplyBy5.prototype);


function createUser(username,score){
    this.username = username
    this.score = score
}


createUser.prototype.increment = function(){
    this.score++
}

createUser.prototype.print=function(){
    console.log(`score is ${this.score}`);
}

const chai = new createUser('chai',25)
const tea = new createUser('chai',250)

chai.increment()
chai.print()
tea.print()











