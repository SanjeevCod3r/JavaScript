// map filter and reduce 

// Array Map Method  --> Create a new Array by Performing Some Operation On each Array Element 
let arr = [45, 23, 65]
console.log(arr)

let a = arr.map((value, index, array)=>{
    console.log(value, index, array)
    return value + index
})
console.log(a)  

// Array Filter Method  --> Filter An Array With Value that posses a test. Create a new array

let arr2 = [45, 23, 21, 0, 3, 5]
let a2 = arr2.filter((value)=>{
    return value<10
})
console.log(a2)


// Array Reduce Method ---> Reduce an Array  to a single value
let arr3 = [1,2,3,4,5,6]
let newarr3 = arr3.reduce((h1, h2)=>{
    return h1 + h2
})

console.log(newarr3) 
