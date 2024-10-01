// DATES

let myDate = new Date()
console.log(myDate);
console.log(myDate.toString());
console.log(myDate.toLocaleString());
console.log(myDate.toISOString());
console.log(myDate.toJSON());
console.log(myDate.toLocaleDateString());
console.log(myDate.toDateString());
console.log(typeof myDate);

// let myOwnDate = new Date(2024, 11, 22)
// let myOwnDate = new Date(2024, 11, 22, 5, 3)
let myOwnDate = new Date("2024-11-22")
console.log(myOwnDate.toLocaleString());

let myTimeStamp = Date.now()

console.log(myTimeStamp); //value in milliseconds
console.log(myOwnDate.getTime());

// converting in seconds
console.log(Math.floor(Date.now()/1000));

let newDate = new Date()
console.log(newDate);
console.log(newDate.getMonth());
console.log(newDate.getDay());

// `${newDate.getDay()} and the time `
(newDate.toLocaleString('default', {
    weekday : "long",
    timeZone: "Asia/Kolkata"
})

