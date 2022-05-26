// Given 2 strings, a and b, return a string of the form short+long+short, with the shorter string on the outside and the longer string on the inside. The strings will not be the same length, but they may be empty ( zero length ).

// Hint for R users:

// The length of string is not always the same as the number of characters
// For example: (Input1, Input2) --> output

// ("1", "22") --> "1221"
// ("22", "1") --> "1221"


function solution(a, b){
    // I should make a conditional to see if one length is bigger than the other. then if true, make a template literal to return
      return a.length > b.length ? `${b}${a}${b}` : `${a}${b}${a}`
    
    }
    // P: 2 strings. Strings may be empty. Strings won't have the same length though
    // R: Return a joined string, concatening the shortstring, long string, then short string
    // E: '222','44' => '4422244'