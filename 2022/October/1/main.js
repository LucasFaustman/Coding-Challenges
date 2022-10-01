// In this Kata, you will be given a string that has lowercase letters and numbers. Your task is to compare the number groupings and return the largest number. Numbers will not have leading zeros.

// For example, solve("gh12cdy695m1") = 695, because this is the largest of all number groupings.

// Good luck!

function solve(s){
    //I think I can use a for loop for this
      //create new num variable
      let newNum = ''
      //and array
      let newArr = []
      
      for (let i = 0; i <= s.length; i++) {
        //each time it runs, check if element is a number. if so, add to newNum
        if (Number(s[i]) == s[i]) {
          newNum += s[i]
        } else {
          //else, push our num to newarr and setNewNum back to an empty string
          
          newArr.push(newNum)
        newNum = ''
          }
      }
      //return index0 of sorted array, then convert to number
      
      return Number(newArr.sort((a,b) => b-a)[0])
    };
    
    //Will be a string of letters and numbers. numbers will not have leading 0's. seems like always will be valid and full string
    //Return an integer representing the largest number inside the string
    //'gh12cdy695m1'),695