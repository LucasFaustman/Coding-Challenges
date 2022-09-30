// The vowel substrings in the word codewarriors are o,e,a,io. The longest of these has a length of 2. Given a lowercase string that has alphabetic characters only (both vowels and consonants) and no spaces, return the length of the longest vowel substring. Vowels are any of aeiou.

// Good luck!

function solve(s){
  
    //declare array with vowels
    let vowelArr = ['a','e','i','o','u']
   //First can declare a number
    let newNum = 0
    //create array to hold nums
    let newArr = []
    
    //then for loop
    for (let i = 0; i < s.length; i++) {
        //each time it runs, check if current element includes one from a vowel arr and if next element contains vowel
      if (vowelArr.includes(s[i]) && vowelArr.includes(s[i+1])) {
        //if so, add to to newNum and skip one element over in iteration
        newNum += 2
        i++
        //else if we have a vowel but next element isnt a vowel
      } else if (vowelArr.includes(s[i]) && !vowelArr.includes(s[s+1])) {
        //push+1newNum to newArr, and assign our num to 0
        newArr.push(newNum + 1)
        newNum = 0
      }
      //if we dont have a vowel, push newNum to newArr and reassign num to 0
       else if (!vowelArr.includes(s[i])) {
        newArr.push(newNum)
        newNum = 0
      }
    }
    //return first index of sorted newarr
    return newArr.sort((a,b) => b - a)[0]
  }
  
  //Will be a string. seems like always will be a string containing letters
  //Return an integer representing the length of the longest vowel chain in the string
  //'codewarriors' => 2, because io is the longest length