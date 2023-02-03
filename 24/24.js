alert("Enter the Value of a")
let a = prompt("Enter a here", "578")
a = Number.parseInt(a)
alert("You entered a of type " + (typeof a))
let write = confirm("Do You Want to Write it to the Page")

if(write){
    document.write(a)
}
else{
    document.write("Please Allow Me To Write")
}
