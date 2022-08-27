// Consider the word "abode". We can see that the letter a is in position 1 and b is in position 2. In the alphabet, a and b are also in positions 1 and 2. Notice also that d and e in abode occupy the positions they would occupy in the alphabet, which are positions 4 and 5.

// Given an array of words, return an array of the number of letters that occupy their positions in the alphabet for each word. For example,

// solve(["abode","ABc","xyzD"]) = [4, 3, 1]
// See test cases for more examples.

// Input will consist of alphabet characters, both uppercase and lowercase. No spaces.

// Good luck!

function solve(arr){  
    // map through array. then split each element, and map through each element and make them uppercase for simplicity since capitalization
    //   doesnt matter
      // then use charcode at - 64 to get alphabet position
      //then use filter to see if charcode at -64 is equal to index+1
      //then map again and get the length of each element
      //and return
      
      return arr.map(element => element.split('').map(element => element.toUpperCase().charCodeAt(0) - 64).filter((element,index) => 
         element === index+1)).map(element => element.length)
    };
    
    //P: will be an array of upper and lower case strings. no spaces. seems like it will always be an array of strings
    // R: return an arrayof numbers representing the number of letters in their correct position in each string
    // E: ['a,b,d'] => 2 because a and b are 1 and 2, but d is not 3
