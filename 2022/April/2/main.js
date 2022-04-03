
// In this kata you will create a function that takes a list of non-negative integers and strings and returns a new list with the strings filtered out.

// Example
// filter_list([1,2,'a','b']) == [1,2]
// filter_list([1,'a','b',0,15]) == [1,0,15]
// filter_list([1,2,'aasf','1','123',123]) == [1,2,123]



function filter_list(l) {
 
    //   P: iterate through array using a method to see if each element is a number . Type of method will work with filter method I believe
      
      return l.filter(element => typeof element === 'number')
    
    }
    
     // Return a new array with the strings filtered out
    //   PREP
    //   P: list. this list will be an array that takes in Positive numbers and strings.
    // R: You want to return ONLY the numbers.Filter the strings out. Return an array of numbers
    // E: console.log(filter_list[1,2,'a','b']) ==> [1,2] 