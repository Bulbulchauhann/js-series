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
const obj1 = {1:"bulbul", 2 : "Rahul", 3 : "Pooja"}
const obj2 = {4 : "Vivek", 5 : "Sumit", 6 : "Mayank"}

console.log(({obj1, obj2})); //problematic, array in array

const obj3 = Object.assign(obj1, obj2) //all values going to obj1
const obj4 = Object.assign({}, obj1, obj2) //{} is target, and obj1, obj2 are source
console.log(obj3);
console.log(obj4); //option parameter, but recommended, values get combined, gives exact value

console.log({...obj1, ...obj2}); //spread operator, most useful and easy

//when values are coming from database

const users1 = [
    {
        id : 1,
        name : "Raj"
    },
    {
        id : 2,
        name : "Raju"
    },
    {
        id : 3,
        name : "Raja"
    }
]

users1[1].id
console.log(twtUser);

console.log(Object.keys(twtUser));
console.log(Object.values(twtUser));
console.log(Object.entries(twtUser));

console.log(twtUser.hasOwnProperty("isLogged"));

// object destructuring
const course = {
    courseName : "JavaScript",
    price : "999",
    courseTeacher : "Pooja"
}

// course.courseInstructure

// const {courseTeacher} = course
const {courseTeacher: Teacher} = course
// console.log(courseTeacher);
console.log(Teacher);

//JSON data in API
// {
//     "name" : "Bulbul",
//     "age" : 24,
//     "course" : "ADIT"
// }

[
    {},
    {},
    {},
]















