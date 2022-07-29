// Description:
// Replace all vowel to exclamation mark in the sentence. aeiouAEIOU is vowel.

function replace(s){
  
    //   create new str
      let newStr = ''
      
    //   then create a for loop. if i is equal to any vowels, push to newstr as a !
      for (let i = 0; i < s.length; i++) {
        if (s[i].toLowerCase() === 'a'|| s[i].toLowerCase() === 'e' || s[i].toLowerCase() === 'i'
    || s[i].toLowerCase() === 'o' || s[i].toLowerCase() === 'u') {
          newStr += '!'
        } else
          newStr += s[i]
      }
      
    //   then return
      
      return newStr
      
      
    }
    
    // P: Will be a string. seems like it will always be a string. might be upper or lowercase
    // R: return a new string with each vowel replaced with !
    // E: 'HELLO' => H!LL!