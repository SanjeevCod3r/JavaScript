// Question
let marks = {
    sanjeev: 10,
    deepender: 56,
    monika: 45,
    anshika: 4
}

for(let i=1; i<=Object.keys(marks).length; i++){
    console.log("The Marks of " + Object.keys(marks)[i] + " are " + marks[Object.keys(marks)[i]])
}

// For In Loop
for(let key in marks){
   
    console.log("The Marks of " + key + " are " + marks[key])
}


// Next Problem
let CorretNumber = 4
let i
while (i!=CorretNumber) {
    i = prompt("Enter a Number")
}
console.log("U Enter A Correct Number")


// Mean Of 5 Number 
const mean = (a,b,c,d,)=>{
return (a+b+c+d)/4

}

console.log(mean(2,4,5,6))