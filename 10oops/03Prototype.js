// let uname = 'Vivek   '


// console.log(uname.trim().length);
// console.log(uname.trueLength); //it should trim and give length like above line(property)


let hero = ['thor', 'spiderman']

let power = {
    thor: 'hammer',
    spiderman: 'sling',

    getSpiderPower: function () {
        console.log(`spider power is ${this.spiderman}`);
    }
}

Object.prototype.vivek = function () {
    console.log(`vivek`);
}

Array.prototype.heyVivek = function () {
    console.log(`vivek`);
}

// power.vivek()
// hero.vivek()


// Function --->

// Array  ------->   Object --->  null

// String  --->




// power.heyVivek() //
// hero.heyVivek()




// Inheritance

const User = {
    name:"chai",
    email:"vivek@mail.com"
}

const teacher = {
    makeVideo: true
}

const teachingSupport = {
    isAvailable: false
}

const TASupport = {
    makeAssignment: 'JS Assignment',
    fullTime: true,

    __proto__ : teachingSupport // prototypal inheritance
}

teacher.__proto__ = User


// Model Syntax
Object.setPrototypeOf(teachingSupport,teacher);



let newname = 'chaiAurcode   '

String.prototype.trueLength = function(){
    console.log(`${this}`);
    console.log(`${this.trim().length}`);
}

newname.trueLength()
'vivek'.trueLength()


















