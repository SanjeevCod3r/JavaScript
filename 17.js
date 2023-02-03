// Array Method
let num = [1,2,3,34,4]

// 1 Method --> toString
let b = num.toString()
console.log(b, typeof b)

// 2 Method --> join
 let c = num.join("_")
 console.log(c, typeof c)
 
 // 3 Method --> pop

 let d = num.pop()
 console.log(d)
 console.log(num)

// 4 Method --> push

let e = num.push(56)
console.log(e)
console.log(num)

// 5 Method --> Shift
let f = num.shift() // remove frist ele and return it
console.log(f, num)

// 6 Method --> UnShift
let g = num.unshift(78) // Add element to the begining , return new array length
console.log(g, num)



