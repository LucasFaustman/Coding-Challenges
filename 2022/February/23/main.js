// Complete the solution so that it splits the string into pairs of two characters. If the string contains an odd number of characters then it should replace the missing second character of the final pair with an underscore ('_').

// Examples:

// * 'abc' =>  ['ab', 'c_']
// * 'abcdef' => ['ab', 'cd', 'ef']

function solution(str){
    let newArr = []
    if (!str.length || !str) {
      return []
      
      
    } else if (str.length % 2 !== 0) {
      for (let i = 0; i < str.length; i++) {
        newArr.push(str.slice(i, i+2 ))
        i = i+1
      }
  
    
    newArr[newArr.length -1] = newArr[newArr.length - 1] + '_'
      
    } else {
      for (let i = 0; i < str.length; i++) {
        newArr.push(str.slice(i, i+2 ))
        i = i+1
    }
      }
    return newArr
     
  }
  
  // P: String, might not always be a string.
  // R: return an array of strings that are split into pairs of two characters each element
  // E; abcd => ['a,b', 'cd']