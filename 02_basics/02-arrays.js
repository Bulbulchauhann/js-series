let drink = ["coffee", "tea", "water"];
let food = ["pizza", "burger", "pasta"];

// drink.push(food); //will add food array as an array only in drink array
console.log(drink);
// console.log(drink[3][1]); //not a good practice to merge like this

let both = drink.concat(food) //to merge values of to array
console.log(both);

const bothAgain = [...drink,...food] //spread out method
console.log(bothAgain);



