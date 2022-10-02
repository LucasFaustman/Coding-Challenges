// Given a variable n,

// If n is an integer, Return a string with dash'-'marks before and after each odd integer, but do not begin or end the string with a dash mark. If n is negative, then the negative sign should be removed.

// If n is not an integer, return the string "NaN".

function dashatize(num) {
  
    //if num is NaN, return 'NaN'
    //if num is 0, return '0'
    if (num === 0) {
      return '0'
    }
    if (!num) {
      return 'NaN'
    }
    
    //convert to positive integer string
    let newNum = Math.abs(num).toString()
    //create new string
    let newStr = ''
    //then for loop
    for (let i = 0; i < newNum.length;i++) {
      //if i is the last element, and odd, and length > 1, then add - with newNum[i]
      if (i === newNum.length - 1 && Number(newNum[newNum.length - 1]) % 2 !== 0 && newNum.length > 1) {
        newStr += '-' + newNum[i]
        //if i is first element and odd, and length is > 1, add newNum[i] with -
      } else if (i === 0 && Number(newNum[i]) % 2 !== 0 && newNum.length > 1) {
        newStr += newNum[i] + '-'
      }
      //if element is in middle of string and odd, add - to either end
      
     else if (i !==0  && Number(newNum[i]) % 2 !== 0 ) {
        newStr += '-' + newNum[i] + '-'
       //else, just add the num
      } else
        newStr += newNum[i]
    }
    //get rid of duplicate --'s and return
    
    return  newStr.split('--').join('-')
  }
  
  //Will be an integer. might not always be an integer. might be 0, negative, or NaN
  //Return a string with dashes before and after each odd integer, but don't begin or end string with -. if n is negative, get rid of neg sign
  //274), "2-7-4", "Should return 2-7-4"
  //NaN), "NaN", "Should return NaN"
  //), "0", "Should return 0"