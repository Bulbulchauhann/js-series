//array

const myArray = [0, 1, 2, 3, 4, 5]
const myHeroes = ["Flying Jatt", "G One", "shaktiman"]
const myArray2 = new Array(1,2,3,4,5)

console.log(myArray[1]);
console.log(myHeroes);

//array methodss
myArray.push(6) //adding new value
myArray.push(7)
myArray.pop() //removing last value

myArray.unshift(9) //adding value to start
myArray.shift() //removing first value
console.log(myArray)
console.log(myArray.includes(9));
console.log(myArray.indexOf(3));

const newArray = myArray.join()

console.log(myArray);
console.log(typeof newArray);

//slice and splice
console.log("A ", myArray);
const new1 = myArray.slice(1,3)
const new2 = myArray.splice(1,3)
console.log(new1);
console.log(new2)
console.log("B ", myArray);
console.log("C ", new2);





