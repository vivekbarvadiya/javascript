// Javascript Execution Context

{} //js code
// global execution context (this)
// function EC
// eval EC

{}//two phase
//memory creation phase (memroty allocation phase)
// execution phase


//three phases of js working


/*

program
let val1 = 10
let val2 = 5
function addNum(num1,num2){
    let total = num1+num2
    return total
}
let result = addNum(val1,val2)
let result2  = addNum(10,2)

1. global execution -> this

2.Memory phase
val1 = undefined
val2 = undefined
addNum = defination
result1 = undefined
result2 = undefined

3.Execution phase
val1=10
val2=5
addNum-->
        new variable environment + execution thread (delete after work done)
        |                                   |
        |                                   |
        V                                   v
        
        Memory phase                       Execution phase
        val1 = undefined                    num1=10
        val2 = undefined                    num2=5
        total = undefined                   total=15
result1 = 15
result2 = 



//same as above repitition
new variable environment + execution thread (delete after work done)
        |                                   |
        |                                   |
        V                                   v
        
        Memory phase                       Execution phase
        val1 = undefined                    num1=10
        val2 = undefined                    num2=5
        total = undefined                   total=15






























*/