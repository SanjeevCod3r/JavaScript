// functions in javascript

// Making Function

function avgOfTwoNum(x,y){
    console.log("Done")
    return (x+y)/2
}



let a = 1;
let b = 2;
let c = 3;



console.log("Avg of a and b : ", avgOfTwoNum(a,b))
console.log("Avg of b and c : ", avgOfTwoNum(b,c))

// arrow function
const sum = (p,q)=>{
    return p+q
}

console.log(sum(9,7))

const hello = ()=>
{
    console.log("Hello How Are You! I am Tho Fine Yaar Tum Apana Btao Kaise Ho")
    return "hi"
}



let v = hello();
console.log(v);
