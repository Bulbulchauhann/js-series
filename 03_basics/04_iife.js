//IIFE = Immediately Invoked Function Expressions 
//sometimes problem arises from global scope pollution
//so to remove pollution caused by the variables/declaration, etc we use iife

// ()function definition ()function execution
(function chai(){ //named iife
    console.log("in iife");    
})(); //semi colon is needed to tell to end the context

( () => { //simple iife
    console.log("iife arrow function");    
})();

//passing parameters
( (variable) => { //simple iife
    console.log(`iife arrow function with ${variable}`);    
})("variable blu");