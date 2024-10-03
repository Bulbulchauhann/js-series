let drink = ["coffee", "tea", "water"];
let food = ["pizza", "burger", "pasta"];

// drink.push(food); //will add food array as an array only in drink array
console.log(drink);
// console.log(drink[3][1]); //not a good practice to merge like this

let both = drink.concat(food) //to merge values of to array
console.log(both);

const bothAgain = [...drink,...food] //spread out method
console.log(bothAgain);

const another_array = [1, 2, 3, [4, 5, 6], [6, 7, [9, 7]]]
const another_array2 = [another_array.flat(2)] //to flat out level of array
console.log(another_array2); 

console.log(Array.isArray("rahul")); //to check if the given value is array or not
console.log(Array.from("rahul")); //to make that value an array
console.log(Array.from({name : "rahul"})); //gets confused, interesting

let num1 = 100
let num2 = 200
let num3 = 300

console.log(Array.of(num1, num2, num3)); //to make array from key value pair







