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

//shopping cart
// function calculateCartPrice (...num1){ //rest operator / spread
function calculateCartPrice (val1, val2, ...num1){ //will ignore values mentioned
    return num1
}
 console.log(calculateCartPrice(200,400,500));
 
const user = {
    userName : "bulbul",
    price : 100
}

function handleObject(anyObject){
    console.log(`Username is ${anyObject.userName} and the price is ${anyObject.price}`);
    
}

handleObject(user)

const myNewArray = [200, 300, 400, 500]

functionreturnSecondValuses