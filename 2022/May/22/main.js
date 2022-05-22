
// Take 2 strings s1 and s2 including only letters from ato z. Return a new sorted string, the longest possible, containing distinct letters - each taken only once - coming from s1 or s2.

// Examples:
// a = "xyaabbbccccdefww"
// b = "xxxxyyyyabklmopq"
// longest(a, b) -> "abcdefklmopqwxy"

// a = "abcdefghijklmnopqrstuvwxyz"
// longest(a, a) -> "abcdefghijklmnopqrstuvwxyz"

function longest(s1, s2) {
    //   I first should combine the strings. I can do this by splitted each parameter into an array first. then concat. I can assign this to a variable.
    // After combing, I can sort the array.
    // Then remove each duplicate instance of the letter
    //   Then join the array into a string and return the sorted string without duplicate letters
      
      let s1Splitted = s1.split('')
      let s2Splitted = s2.split('')
      
      let sortedStr = s1Splitted.concat(s2Splitted).sort()
      
      return sortedStr.filter((element,index) => sortedStr.indexOf(element) === index).join('')
    }
    
    // P: 2 strings. One string per parameter. Only can take letters between a to z. Just a string, not an array. Lowercase letters
    // R: Return a new SORTED string, combining s1 and s2. Only want distinct(letters that don't repeat) letters.
    // E: a = 'aaaaafd' b= 'aaaacd' = 'a,c,d,f'