//singleton and constructors
const twtUser = new Object()
const twtUser1 = {}

// console.log(twtUser, twtUser1);

twtUser.id = "123abc"
twtUser.name = "Amy"
twtUser.isLoggedIn = false

console.log(twtUser);

const regUser = {
    email : "amy22@gmail.com",
    fullname : {
        userFullName :{
            firstName : "Amy",
            lastName : "Peralta"
        }
    }
}

console.log(regUser.fullname.userFullName.firstName);

//option chaining - used mostly when data is coming from api,
//and not sure if it's there or not, to avoid throwing any error
console.log(regUser.fullname?.userFullName.firstName); 

//combing arrays




