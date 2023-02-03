// 1
let str = "San\""
console.log(str.length)

// 2

const sentence = 'The quick brown fox jumps Over The Lazy dog.';
const word = 'fox';
console.log(sentence.includes(word))
console.log(`The word "${word}" ${sentence.includes(word) ? 'is' : 'is not'} in the Sentence`)

// 3
let name = "JAISWAL"
console.log(name.toLowerCase())

//4
// Extrect The Amount out Of String 

let string = "The Amount Is Rs 1000"
let amount = Number.parseInt(string.slice("The Amount Is Rs ".length))
console.log(amount)
console.log(typeof amount)

//5
let friend = "Deepika"
friend[3] = "R"
console.log(friend) // friend is not changed because string is immutable

