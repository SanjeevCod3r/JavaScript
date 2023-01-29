// for loop In JavaScript
for(let i=1; i<=5; i++){
    console.log(i)
}

// Add N Natural Number

let sum =0
let n = 10
for(let i = 1; i<=n; i++){
    sum = sum + i;

}
console.log(sum)


// .............................................................  //

let obj = {
    sanjeev: 64,
    jaiswal: 55,
    shanu: 22,
    rohit: 45
}



// for in Loop
for (let a in obj){
    // console.log(a)
    console.log("Marks of " + a + " are " + obj[a])
}



// for of loop
for(let b of "Sanjeev"){
    console.log(b)
}
