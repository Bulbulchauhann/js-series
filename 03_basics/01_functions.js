//functions in javascript

function sayMyName() {
  console.log("Bulbul");
}

//calling function
sayMyName();

// function add(num1, num2){
//     console.log(num1 + num2);
// }

// function add(num1, num2) {
//   console.log("Bulbul"); //it will be executed here
//   let result = num1 + num2;
//   return result;
// //   console.log("Bulbul"); //will never execute because there's way to execute function
  
// }


function add(num1, num2){ //paraeter
    return num1 + num2
}


const result = add(3, 1000); //argument
console.log("Result: ", result);

add(12, "a");
add(12, null);

function loginUserMsg(userName= "sam") {
    // if (userName === undefined){ //OR
    if (!userName){
        console.log("Please provide a userName");        
        return
    }
    return `Hello ${userName}, you just logged in.`
}

console.log(loginUserMsg("Bulbul"));
console.log(loginUserMsg());

