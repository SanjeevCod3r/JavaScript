// 1

let arr = [1,2,3,4,5,6,7,83]
let a  = prompt("Enter a Number")
a = Number.parseInt(a)
arr.push(a)
console.log(arr)


// 2 
let arr = [1,2,3,4,5,6,7,83]
let a; 
do{
 a  = prompt("Enter a Number")
a = Number.parseInt(a)
arr.push(a)
console.log(arr)
}while(a!=0); 

// 3

let arr = [2,4,6,8,10,30,46,50]
let n = arr.filter((x)=>{
    return x%10 == 0
})

console.log(n)

// 4

let arr = [2,4,6,8,10,30,46,50]
let n = arr.map((x)=>{
    return  x*x
})
console.log(n)


// 5
let arr = [1,2,3,4,5,6,7,8,9]
let n = arr.reduce((x1, x2)=>{
    return  x1*x2
})
console.log(n)