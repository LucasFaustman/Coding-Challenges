// Convert a hash into an array. Nothing more, Nothing less.

// {name: 'Jeremy', age: 24, role: 'Software Engineer'}
// should be converted into

// [["age", 24], ["name", "Jeremy"], ["role", "Software Engineer"]]
// Note: The output array should be sorted alphabetically by key name.



function convertHashToArray(hash){
    //object.entries
    //.localecompare to compare strings
    return Object.entries(hash).sort((a,b) => a[0].localeCompare(b[0]))
  }
  
  
  //Will be a hash, or object. Will always be a valid object
  
  //Return an array which represents a converted has to an array. output array should be sorted in alphabetical 
  //order by key name
  
  //E: {name: 'Jeremy', age: 24, role: 'Software Engineer'} => [["age", 24], ["name", "Jeremy"], ["role", "Software Engineer"]]