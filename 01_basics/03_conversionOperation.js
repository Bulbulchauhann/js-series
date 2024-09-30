let score = "33abc"

console.log(typeof score);
console.log(typeof (score));

let valueInNumber = Number(score);
console.log(typeof valueInNumber);
console.log(valueInNumber); //33 when "33"
console.log(valueInNumber); //NaN when "33"(Not a number - NaN)

