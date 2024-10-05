//global scope = everything outside functions or conditionals
// var c = 300
let a  = 300

//local scope
if (true){
    let a = 10
    // const b = 20
    console.log("inner : ", a);    
}

console.log(a);
// console.log(b);
// console.log(c);

function one(){
    const userName = "bulbul"

    function two(){
        const website = "youtube"
        console.log(userName);        
    }
    // console.log(website);
    two()
}
// one()

if(true){
    const user = "bulbul"
    if (user === "bulbul"){
        const web = "netflix"
        // console.log(user + web);
    }
    // console.log(web);    
}
// console.log(user);


// interesting

console.log(addOne(5)) //value returned but not printed
function addOne(num){
    return num+1
}



const addTwo = function(num){
    return num+2
}

console.log(addTwo(3))