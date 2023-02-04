// redirect to google.com  on entering Number > 4

let num = prompt("Enter Your Number")
num = Number.parseInt(num)
if(num>4){
    location.href= "https://google.com"
}