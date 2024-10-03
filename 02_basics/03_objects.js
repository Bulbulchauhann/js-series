//singleton
//object.create(constructor method)

//object literals

const mySymbol = Symbol("key1") //declaring a symbol

const user = {
    name : "Bulbul",
    "full name" : "Bulbul Chauhan",
    mySymbol : "myKey1",
    [mySymbol] : "mykey1",
    age : 24,
    location : "blr",
    email : "chauhanbulbul8@gmail.com",
    isLoggedIn : false
}

console.log(user.email); //not a good practice, ignore key written in "", and symbol
console.log(user["email"]);
// console.log(user."fullname"); //cannot access like this
console.log(user["full name"]);
console.log(user[mySymbol]);

//changing values
user.email = "chauhanbulbul8@edunetmail.com"
console.log(user);

//locking values
// Object.freeze(user)
user.email = "chauhanbulbul8@edunetmail.org"
console.log(user);

//functions are treated same as variables
user.greeting = function(){
    console.log("hello user");
}

user.greeting2 = function() {
    console.log(`hello user, ${this.name}`);    
}

console.log(user.greeting()); //function executed
console.log(user.greeting); //function not executed, only reference is made

console.log(user.greeting2());
console.log(user.greeting2);









