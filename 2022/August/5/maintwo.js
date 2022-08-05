// Task
// You are given a dictionary/hash/object containing some languages and your test results in the given languages. Return the list of languages where your test score is at least 60, in descending order of the results.

// Note: the scores will always be unique (so no duplicate values)

function myLanguages(results) {
  
    //object.entries to get an array
      //then filter. if the first indexed element is greater than or equal to 60
      //then sort by getting the first indexed element
      //then map to just return the first indexed element, which is the language itself
      
      return Object.entries(results).filter(element => element[1] >= 60).sort((a,b) => b[1] - a[1]).map(element => element[0])
    
    }
    
    // P Will be an object. object will include strings representing languages, then a key value representing test results
    // R: return the properties inside the object with a key value of 60 or more. needs to be an array of strings
    // E:{"Java": 10, "Ruby": 80, "Python": 65}    -->  ["Ruby", "Python"]