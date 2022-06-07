
// Character recognition software is widely used to digitise printed texts. Thus the texts can be edited, searched and stored on a computer.

// When documents (especially pretty old ones written with a typewriter), are digitised character recognition softwares often make mistakes.

// Your task is correct the errors in the digitised text. You only have to handle the following mistakes:

// S is misinterpreted as 5
// O is misinterpreted as 0
// I is misinterpreted as 1
// The test cases contain numbers only by mistake.


function correct(string)
{
//  first split the string, then map that has a few conditionals inside! Can use ternary here
//   then join the str back 

let str = string.split('')

return str.map(element => element === '5' ? 'S' : element === '1' ? 'I' : element === '0' ? 'O' : element).join('')
}

// P will always be a string
// Return a string which corrects the mistakes. 0 to O, 5 to S, 1 to I
// E: LOND0N => LONDON