// create five variables and assign them values
let firstName = "Raheem"
let lastName
let age = 26
let location = null
let Cohort = true
// each variable should reference a different primitive data type

// ! REMEMBER: you should never DELIBERATELY assign "undefined" to a variable


// print the type of each variable in this order:
console.log(firstName);
console.log(lastName);
console.log(age);
console.log(location);
console.log(Cohort);
// string, number, boo;lean, undefined, null


// create a variable that references a template literal
// inside the template literal, use two variables
console.log(`The message provided states that ${firstName} is ${age} years old.`)

// reassign the value of the variable that references "null"
location = "St. Louis"

// print the value and its type
console.log(location)

// print a variable that causes a ReferenceError
let middleName = "Q"
console.log(middleName)
// alter the previous line to no longer cause a ReferenceError

