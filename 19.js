// for loop Arrays
let num = [3,54,1,2,4]
for(let i =0; i<=num.length; i++){
    console.log(num[i])
}

// forEach Loop
 num.forEach((Element)=>{
    console.log(Element*Element)
 })

 // Array.from
 let name = "Sanjeev"
 let arr = Array.from(name)
 console.log(arr)

 // for...of
 for (let i of num){
    console.log(i)
 }

 // for in
 for(let i in num)
{
    console.log(i)
}





