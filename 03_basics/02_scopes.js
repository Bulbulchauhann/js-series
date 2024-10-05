//global scope = everything outside functions or conditionals
// var c = 300
let a  = 300

//local scope
if (true){
    let a = 10
    const b = 20
    console.log("inner : ", a);
    
}

console.log(a);
// console.log(b);
// console.log(c);


