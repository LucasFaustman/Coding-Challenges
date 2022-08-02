// This is a spin off of my first kata.

// You are given a string containing a sequence of character sequences separated by commas.

// Write a function which returns a new string containing the same character sequences except the first and the last ones but this time separated by spaces.

// If the input string is empty or the removal of the first and last items would cause the resulting string to be empty, return an empty value (represented as a generic value NULL in the examples below).

function array(arr){

  
  
  
    //   we can first split the string with split(',')
    //   we can remove the last element with .slice(0,-1)
    //   then remove first element by doing .slice(1)
    //   then join(' ')
      //assign this to a variable
      const arrCalc = arr.split(',').slice(0,-1).slice(1).join(' ')
      //ternary. if our calculation is an empty string, return null, else return the calculation
      
      return arrCalc === '' ? null : arrCalc
    }
    
    // P: will be a string of numbers with same sequence seperated by commas
    // R: return a string with the first and last characters off, sepearated by spaces
    // E -> "1,2,3,4"    =>  "2 3"