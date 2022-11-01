
// Given a string, return a new string that has transformed based on the input:

// Change case of every character, ie. lower case to upper case, upper case to lower case.
// Reverse the order of words from the input.
// Note: You will have to handle multiple spaces, and leading/trailing spaces.

function stringTransformer(str) {
    return str.split(' ')
  .map(element => element.split('').map(letter => letter === letter.toUpperCase() ? letter.toLowerCase() : letter.toUpperCase()).join(''))
      .reverse().filter(element => element).join(' ').trim()
}

//A string. string might be upper or lowercase characters. will always be valid, no funny business
//Return a new string where each case of every character is switched. and reverse order of words from input. string will have multiple spaces and lading/trailing spaces
//"Example Input" ==> "iNPUT eXAMPLE"


console.log(switchString('iNPUT eXAMPLE'))
console.log(switchString('  My Name Is  Lucas'))