// Immediately Invoked Function Expressions (IIFE)


(function chai(){ //nemed iife
    console.log("DB");
})(); //add semicolon to add iife function(add explicitly)

//there is a problem due to global scope polution  to prevent that we use iife.

// ()() 

((name)=>{ //unnamed iife
    console.log(`${name}`);
})('vivek')


