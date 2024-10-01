let score = undefined;

console.log(typeof score);
console.log(typeof (score));

let valueInNumber = Number(score);
console.log(typeof valueInNumber);
console.log(valueInNumber); //33 when "33"
console.log(valueInNumber); //NaN when "33abc"(Not a number - NaN)
console.log(valueInNumber); // 0 when null 
console.log(valueInNumber); //Nan when undefined

//true => 1/false => 0
