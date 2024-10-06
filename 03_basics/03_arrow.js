const user = {
    userName : "Bulbul",
    price : 999,

    welcomeMessage : function(){
        console.log(`${this.userName}, welcome to website`);
        console.log(this);   //this refer to current context      
    }
}

user.welcomeMessage()
user.userName = "sammy"
user.welcomeMessage()

console.log(this) //will be empty because its in global scope

function coffee(){
    let username = "bulbul"
    console.log(this.username); //undefined = will work only in object    
    console.log(this);    
}

coffee()

//Arrow functions
// const chai = function(){
//     let user = "bulbul"
//     console.log(this.user);    
// }
// chai()

const chai = () => {
    let user = "bulbul"
    console.log(this.user);    
}
chai()

//basic arrow function - explicit return
const addtwo = (num1, num2) => {
    return num1 + num2
}
// console.log(addtwo(5, 28));

//implicit return
//if your are using curly braces {}, you have to write return keyword
const addTwo = (num1, num2) => num1 + num2
const addTwwo = (num1, num2) => (num1 + num2)
const addName = (num1, num2) => ({username : "bulbul"}) //had to wrap object in curly braces and then in parenthesis

console.log(addTwo(5, 128));


