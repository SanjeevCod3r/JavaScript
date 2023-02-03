// Arrays


let marks_class_12 = [1, 2, 3, 4, false, "Not Present"]

console.log(marks_class_12)


console.log(marks_class_12[2])
console.log(marks_class_12[4])
console.log(marks_class_12[5])


console.log(marks_class_12.length) // count start form 1 in length


marks_class_12[6] = 12 // Adding New Value to Array
console.log(marks_class_12[6])
console.log(marks_class_12.length)

marks_class_12[6] = 96 // Changing the Value of an Array
marks_class_12[0] = 90

console.log(marks_class_12)

// typeof --> Object
console.log(typeof marks_class_12)

//   Note --->

// Arrays Are Mutable ->>  Changeable
// Sreing Are InMutable ->> Not Changable


// Print All Object In Array Using For Loop

let marks = [22,23,45,67]
for(let i=0; i<= marks.length; i++){
    console.log(marks[i])
}




