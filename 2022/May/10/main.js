// Check to see if a string has the same amount of 'x's and 'o's. The method must return a boolean and be case insensitive. The string can contain any char.

// Examples input/output:

// XO("ooxx") => true
// XO("xooxx") => false
// XO("ooxXm") => true
// XO("zpzpzpp") => true // when no 'x' and 'o' is present should return true
// XO("zzoo") => false

function XO(str) {
    //     spit the string
    let xNum = str.split('').reduce((acc,letter) => acc + (letter.toLowerCase() === 'x' ? 1 : 0),0)

    let oNum = str.split('').reduce((acc,letter) => acc + (letter.toLowerCase() === 'o' ? 1 : 0),0)
    // check each element in the string

   return xNum === oNum ? true : false
    }