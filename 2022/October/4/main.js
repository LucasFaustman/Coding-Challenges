// You receive the name of a city as a string, and you need to return a string that shows how many times each letter shows up in the string by using asterisks (*).

// For example:

// "Chicago"  -->  "c:**,h:*,i:*,a:*,g:*,o:*"
// As you can see, the letter c is shown only once, but with 2 asterisks.

// The return string should include only the letters (not the dashes, spaces, apostrophes, etc). There should be no spaces in the output, and the different letters are separated by a comma (,) as seen in the example above.

// Note that the return string must list the letters in order of their first appearance in the original string.

function getStrings(city){
    //I can first declare an object to hold the letter values
    let newObj = {}
    //Split into array then map to get rid of all dashes spaces or apostrophes
    
    let newArr = city.split('').filter(element => element !== ' ' && element !== "''" && element !== '-').map(element => element.toLowerCase())
    //then for loop through array
    
    for (let i = 0; i < newArr.length; i++) {
      if (newObj[newArr[i]]) {
        newObj[newArr[i]] += '*'
      } else
        newObj[newArr[i]] = '*'
    }
    //Return Object.entries. map through array, join together with :. then join all together with ,
    return Object.entries(newObj).map(element => element.join(':')).join(',')
  }
  
  //Will be a string with represents a city. seems like always valid string. might be dashes,spaces,apostophes. might be upper or lowercase
  //Return a string with letters : * number of times the character shows up in the string split by commas
  //Chicago"), "c:**,h:*,i:*,a:*,g:*,o:*"
  
  //"Las Vegas"), "l:*,a:**,s:**,v:*,e:*,g:*"