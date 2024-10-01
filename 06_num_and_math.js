// ++++++++++++ NUMBERS ++++++++++++++++++++++++++++++++++++++

const score = 400
console.log(score);

const balance = new Number(300)
console.log(balance);

console.log(balance.toString());
console.log(balance.toString().length);
console.log(balance.toFixed(2)); //float

const otherNumber = 253.94632;
console.log(otherNumber.toPrecision(3));

const hundreds = 100000
console.log(hundreds.toLocaleString('en-IN'));

//+++++++++++++  MATHS ++++++++++++++++++++++++++++++++++++++++

console.log(Math);
console.log(Math.abs(-4)); //absolute value
console.log(Math.round(45763578.87824));
console.log(Math.sqrt(49));
console.log(Math.min(4,5,6,7,8));
console.log(Math.max(4,5,6,7,8));

console.log(Math.random());
console.log(Math.floor(Math.random()*10)+1);

const min = 10
const max = 20

console.log(Math.floor(Math.random() * (max - min +1 ))+ min)




