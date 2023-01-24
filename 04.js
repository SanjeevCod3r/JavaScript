// Primitive DataType & Object

// 7 Types ----->>  
// NN --> Null, Number   
// BB --> Boolean, BigInt
// SS --> String, Symbol
// U --> Undefined 

let a = null; 
let b = 345;   
let c = true; // can also be false
let d = BigInt("567") + BigInt("5")
let e = "Sanjeev"
let f = Symbol("I am Nice Symbol") 
let g = undefined   

console.log(a, b, c, d, e, f, g)

console.log(typeof d)
console.log(typeof a)
console.log(typeof b)



// Object

const item = {
    "Sanjeev": true,
    "Jaiswal": false,
    "Depender": 67,
    "Raju": undefined
}

console.log(item["Sanjeev", "Jaiswal", "Depender", "Raju"])






