
// Write a function that takes in a string of one or more words, and returns the same string, but with all five or more letter words reversed (Just like the name of this Kata). Strings passed in will consist of only letters and spaces. Spaces will be included only when more than one word is present.

// Examples: spinWords( "Hey fellow warriors" ) => returns "Hey wollef sroirraw" spinWords( "This is a test") => returns "This is a test" spinWords( "This is another test" )=> returns "This is rehtona test"


function spinWords(string){
    let splittedStr = string.split(' ')
  //   Map through array. create conditional that asks if element length > 5
  //   if greater than 5, reverse the element
  //   join the string back together
    
    return splittedStr.map(element => element.length >= 5 ? element.split('').reverse().join('') : element).join(' ')
  




//   join the string back together
}
// P: One or more words. Only letters and spaces. 
// R: A string. Words with more than 5 letters reverse.
// E: Hello my name is Lucas => Hello ny name is Lucas
// This is my biggest Kata yet! => This is my tseggib Kata yet!