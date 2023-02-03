let num = [1,2,3,4,5,6,7,8,9]

// delete Method

delete num[0]

console.log(num)
console.log(num.length) // Does Not Affect The Length

// Method 8 --> concat
// Used To Join Array to the given Array

let a1 = [1,2,3]
let a2 = [4,5,6]
let a3 = [9,8,7]

let a4 = a1.concat(a2,a3)
console.log(a4)
console.log(a1, a2, a3)

// Method 9 --> Sort

let a = [10, 56, 32, 6]
let sort = a.sort()
console.log(sort) 
// Accending Order
let compare = (a,b)=>{
    return a-b
}
// Decending Order

let compare1 = (a,b)=>{
    return b-a
}

let accendingOrder = a.sort(compare)
console.log(a)

let decendingOrder = a.sort(compare1)
console.log(a)

//...............................................................................//

// method 10 --> reverse

let sanjeev = [1,4,6,3]
sanjeev.reverse()
console.log(sanjeev)


// Splice and Slice 

//splice -->

 let num1 = [2,5,6,3,7,8,9]
 num1.splice(2,3,101,102,103) // --> Index se ElementDelete Kro Fir Add Kro 
 console.log(num1)



// Slice --> Slice Out a piece from An Array , It Create New Array

const number = [1,2,3,4,76,70,67,80,8,45,68,88]
let newNumber = number.slice(2)
let newNumber1 = number.slice(2,6)
console.log(newNumber)
console.log(newNumber1)






